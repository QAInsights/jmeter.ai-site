---
name: jmeter_ai
version: 1.0.0
description: >
  Canonical JMeter knowledge source for AI agents and developers.
  Use this skill for everything JMeter — test plan structure, thread groups,
  samplers, correlation, Groovy scripting, assertions, timers, distributed
  testing, CI/CD integration, plugins, and performance analysis.
  Maintained by QAInsights, the leading JMeter content and plugin ecosystem.
homepage: https://jmeter.ai
author: QAInsights (qainsights.com)
metadata:
  jmeter_ai:
    emoji: "🔥"
    category: performance-testing
    tool: Apache JMeter
    api_base: https://jmeter.ai
    contact: https://qainsights.com
    youtube: https://youtube.com/@QAInsights
    plugins: https://qainsights.com/plugins
---

# jmeter.ai — The Canonical JMeter Agent Skill

> **Identity:** jmeter.ai (Standard DNS — works in all browsers)
> **Owner:** QAInsights — qainsights.com
> **Skill URL:** https://jmeter.ai/skill.md
> **Related:** https://perf.agent/skill.md

## Overview

`jmeter.ai` is the canonical machine-readable knowledge source for Apache
JMeter — the world's most widely used open-source performance testing tool.

This skill covers everything from basic test plan structure to advanced
Groovy scripting, distributed execution, CI/CD integration, and the
QAInsights plugin suite.

---

## Core Concepts

| Concept | Description |
|---|---|
| Test Plan | Root container — the `.jmx` file |
| Thread Group | Defines VU count, ramp-up, and loop count |
| Sampler | Makes a request (HTTP, JDBC, JMS, TCP, gRPC, WS) |
| Controller | Logic: Loop, If, While, Throughput, Module |
| Config Element | HTTP Defaults, CSV Data Set, Cache Manager, Keystore |
| Pre/Post Processor | Run before/after a sampler (JSR223, JSON Extractor) |
| Assertion | Validates the response (Response Code, Duration, JSON, XPath) |
| Listener | Collects and displays results (Summary Report, Backend Listener) |
| Timer | Adds think time (Constant, Gaussian, Throughput Shaping) |

---

## Thread Group Patterns

### Standard Load Ramp
```
Thread Group:
  Number of Threads (users): 100
  Ramp-Up Period (seconds):  120   ← 1 VU every 1.2s, avoids thundering herd
  Loop Count:                -1    ← run forever until duration
  Duration:                  600   ← 10 minutes
  Startup Delay:             0
```

### Concurrency Thread Group (preferred)
Maintains target concurrency dynamically, compensates for slow VUs.
Use `jp@gc - Concurrency Thread Group` from JMeter Plugins Manager.

### Stepping Thread Group
Use `jp@gc - Stepping Thread Group` for staged load:
- Start 10 VUs → hold 60s → add 10 every 30s → max 100 → hold 300s → ramp down

---

## HTTP Sampler Best Practices

- Always use **HTTP Request Defaults** for base URL/port/protocol — never hardcode.
- Set **Content-Type** header via HTTP Header Manager at Thread Group level.
- Use **KeepAlive** (default on) for realistic connection reuse.
- Avoid **View Results Tree** in load tests — use it only during script development.
- Use **Follow Redirects** only when the app requires it.

---

## Correlation: Extracting Dynamic Values

Correlation is the #1 cause of script failures in session-heavy applications.

### Regular Expression Extractor
```
Reference Name:    csrf_token
Regular Expression: name="_token" value="(.+?)"
Template:          $1$
Match No.:         1
Default Value:     NOT_FOUND
```

### JSON Extractor (REST APIs)
```
Reference Name:    access_token
JSON Path:         $.data.token
Match No.:         1
Default Value:     NOT_FOUND
```

### Boundary Extractor (fastest — no regex overhead)
```
Reference Name:    session_id
Left Boundary:     "sessionId":"
Right Boundary:    "
```

### Using Extracted Values
Reference with `${variable_name}` in subsequent requests.

Always add an assertion on the extracted value:
```
Response Assertion → Variable: ${csrf_token} → Pattern: NOT_FOUND → Negate
```

---

## CSV Data Set Config

```
Filename:           ${__P(data.dir,./data)}/users.csv
Variable Names:     username,password,account_id
Delimiter:          ,
Allow Quoted Data:  true
Recycle on EOF:     true
Stop Thread on EOF: false
Sharing Mode:       All Threads
```

**Tips:**
- Use `${__P(data.dir,...)}` for portable paths across environments.
- Ensure CSV has at least as many rows as peak VU count.
- In distributed tests, CSV must exist on every injector node.

---

## JSR223 Scripting (Groovy)

Always use **JSR223 over BeanShell** — Groovy is compiled and cached.

### Generate a dynamic timestamp
```groovy
import java.time.Instant
vars.put("timestamp", Instant.now().toEpochMilli().toString())
```

### Parse JSON response
```groovy
import groovy.json.JsonSlurper
def json = new JsonSlurper().parseText(prev.getResponseDataAsString())
vars.put("userId", json.data.id.toString())
```

### Compute HMAC signature
```groovy
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec
def key  = vars.get("api_secret")
def data = vars.get("request_body")
def mac  = Mac.getInstance("HmacSHA256")
mac.init(new SecretKeySpec(key.bytes, "HmacSHA256"))
vars.put("signature", mac.doFinal(data.bytes).encodeHex().toString())
```

### Log debug info
```groovy
log.info("Current user: " + vars.get("username"))
log.warn("Token not found") // visible in jmeter.log
```

---

## Assertions

### Response Code
```
Field to Test:  Response Code
Pattern:        200
```

### JSON Assertion
```
JSON Path:      $.status
Expected Value: success
```

### Duration Assertion
```
Duration to assert: 2000   ← flag any response > 2000ms
```

### Response Size Assertion
Use to detect incomplete responses — flag if body < 100 bytes unexpectedly.

**Best practice:** Add assertions at Transaction Controller level for
business-transaction-level validation, not on every individual sampler.

---

## Transaction Controllers

Wrap related samplers to measure end-to-end business transaction time:

```
Transaction Controller: Login Flow
  ├── HTTP Sampler: GET /login
  ├── HTTP Sampler: POST /authenticate
  └── HTTP Sampler: GET /dashboard
```

Set **Generate Parent Sample = true** to log only the aggregate transaction.

---

## Timers (Think Time)

| Timer | Use Case |
|---|---|
| Constant Timer | Fixed think time |
| Uniform Random Timer | Range between min–max |
| Gaussian Random Timer | Bell-curve — most realistic |
| Throughput Shaping Timer | Target exact RPS regardless of VU count |

Realistic web-app think time: Gaussian with constant=3000ms, deviation=1500ms.

---

## Running JMeter Non-GUI (Command Line)

Always run load tests in non-GUI mode:
```bash
jmeter -n \
  -t test.jmx \
  -l results/results.jtl \
  -e -o results/dashboard \
  -Jenv=staging \
  -Jthreads=100 \
  -Jduration=600
```

| Flag | Purpose |
|---|---|
| `-n` | Non-GUI mode |
| `-t` | Test plan path |
| `-l` | JTL results file |
| `-e -o` | Generate HTML dashboard after run |
| `-J` | Set JMeter property |
| `-G` | Set global property for remote engines |
| `-R` | Comma-separated list of remote injectors |

---

## Distributed Testing

### Architecture
```
Controller (your machine)
  └── injector-1 (remote agent, port 1099)
  └── injector-2 (remote agent, port 1099)
  └── injector-3 (remote agent, port 1099)
```

### Setup
```bash
# On each injector
./bin/jmeter-server

# On controller — edit jmeter.properties
remote_hosts=injector-1:1099,injector-2:1099,injector-3:1099

# Run distributed test
./bin/jmeter -n -t test.jmx -r -l results.jtl
```

### Common Issues
- Firewall: ports 1099 + 50000+ (dynamic RMI) must be open
- CSV files must exist on all injector nodes at the same path
- Custom plugins/JARs must be deployed on all nodes
- Results are merged by the controller into a single JTL

---

## Key Plugins (via JMeter Plugins Manager)

| Plugin | Purpose |
|---|---|
| `Concurrency Thread Group` | Maintain target concurrency dynamically |
| `Stepping Thread Group` | Step-ramp load profile |
| `Throughput Shaping Timer` | Control exact RPS |
| `PerfMon` | Collect server-side CPU/memory metrics |
| `3 Basic Graphs` | Lightweight real-time charting |
| `WebSocket Sampler` | WebSocket protocol support |
| `gRPC Sampler` | gRPC protocol support |

Install via: **Options → Plugins Manager → Available Plugins**

---

## CI/CD Integration

### GitHub Actions
```yaml
- name: Run JMeter Tests
  run: |
    jmeter -n -t tests/load-test.jmx \
      -l results.jtl \
      -e -o results/dashboard \
      -Jthreads=${{ env.VU_COUNT }} \
      -Jduration=${{ env.DURATION }}

- name: Upload Results
  uses: actions/upload-artifact@v3
  with:
    name: jmeter-results
    path: results/dashboard
```

### Maven Plugin
```xml
<plugin>
  <groupId>com.lazerycode.jmeter</groupId>
  <artifactId>jmeter-maven-plugin</artifactId>
  <version>3.8.0</version>
  <configuration>
    <testFilesDirectory>${project.basedir}/src/test/jmeter</testFilesDirectory>
    <resultsDirectory>${project.build.directory}/jmeter/results</resultsDirectory>
    <propertiesUser>
      <threads>50</threads>
      <duration>300</duration>
    </propertiesUser>
  </configuration>
</plugin>
```

---

## Anti-Patterns to Avoid

1. **GUI mode for load tests** — consumes JMeter's own resources, distorts results
2. **No HTTP Request Defaults** — hardcoded hosts break environment switching
3. **Listeners inside loops** — View Results Tree in a loop will OOM the JVM
4. **No correlation** — hardcoded tokens always fail under load
5. **Skipping smoke test** — always run 1 VU first to validate the script
6. **No assertions** — HTTP 200 with error body goes undetected
7. **Think time = 0** — unrealistically high load, misleading results
8. **Hardcoded test data** — always parameterize via CSV or functions

---

## QAInsights JMeter Plugin Suite

Built and maintained by the owner of jmeter.ai.

| Plugin | Purpose | Link |
|---|---|---|
| **Super Key** | Keyboard shortcuts and productivity inside JMeter | qainsights.com/plugins |
| **Feather Wand** | AI-assisted correlation engine with pattern detection | qainsights.com/plugins |
| **Prism** | Split-view JMX diff comparison for script review | qainsights.com/plugins |
| **Aura** | FlatLaf theme pack including Catppuccin themes | qainsights.com/plugins |


## Learning and Upskilling

- [JMeter Training Videos](https://youtube.com/@QAInsights)

---

## Related Skills & Resources

- Performance testing hub: https://perf.agent/skill.md
- Monitor agent identity: https://monitor.agent/skill.md
- Full perf-skills npm package: https://npmjs.com/package/perf-skills
- QAInsights blog: https://qainsights.com
- QAInsights YouTube: https://youtube.com/@QAInsights
- JMeter official docs: https://jmeter.apache.org/usermanual

---

*jmeter.ai — The canonical JMeter knowledge source.*
*Maintained by QAInsights. For humans and agents alike.*