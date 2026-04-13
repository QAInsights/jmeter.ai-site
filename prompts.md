# Performance Engineering Prompt Library
> Curated for JMeter.ai | QAInsights | naveenkumar.xyz
> Version 1.0 | 2026

---

## 📋 TABLE OF CONTENTS

1. [Test Planning & Strategy](#1-test-planning--strategy)
2. [Workload Design & Concurrency Modeling](#2-workload-design--concurrency-modeling)
3. [JMeter Script Generation](#3-jmeter-script-generation)
4. [k6 Script Generation](#4-k6-script-generation)
5. [Gatling Script Generation](#5-gatling-script-generation)
6. [Correlation & Dynamic Values](#6-correlation--dynamic-values)
7. [Test Data & Parameterization](#7-test-data--parameterization)
8. [Assertions & Validations](#8-assertions--validations)
9. [CI/CD Pipeline Integration](#9-cicd-pipeline-integration)
10. [Results Analysis & Bottleneck Identification](#10-results-analysis--bottleneck-identification)
11. [Observability & APM Integration](#11-observability--apm-integration)
12. [API Performance Testing](#12-api-performance-testing)
13. [Database & JDBC Testing](#13-database--jdbc-testing)
14. [WebSocket & gRPC Testing](#14-websocket--grpc-testing)
15. [Distributed & Cloud Execution](#15-distributed--cloud-execution)
16. [Reporting & Stakeholder Communication](#16-reporting--stakeholder-communication)
17. [Troubleshooting & Debugging](#17-troubleshooting--debugging)
18. [Production Testing & Observability](#18-production-testing--observability)
19. [Groovy & JSR223 Scripting](#19-groovy--jsr223-scripting)
20. [Performance Engineering Best Practices](#20-performance-engineering-best-practices)

---

## 1. TEST PLANNING & STRATEGY

### 1.1 — Generate a Performance Test Strategy Document
```
Act as a senior performance engineer. Generate a comprehensive performance test strategy document for a [REST API / web application / microservices system] that handles [describe the system briefly]. 

Include:
- Objectives and scope
- Test types required (load, stress, soak, spike, breakpoint)
- Entry and exit criteria for each test type
- SLA targets (response time, throughput, error rate)
- Environment and infrastructure requirements
- Risks and mitigation strategies
- Tools and technology stack recommendation
- Roles and responsibilities

Format as a professional document with sections and tables where appropriate.
```

### 1.2 — Define SLA Targets from Business Requirements
```
I have the following business requirements for my application:
[Paste business requirements or NFRs here]

Convert these into measurable SLA targets for performance testing. Define:
- p50, p90, p95, p99 response time thresholds
- Throughput (requests per second / transactions per minute)
- Error rate thresholds
- Apdex score targets
- Resource utilization ceilings (CPU, memory, connections)

Explain the rationale behind each threshold.
```

### 1.3 — Performance Test Scope Definition
```
I am testing [application name] which has the following user journeys:
[List top 3–5 user journeys]

Help me define the performance test scope:
- Which transactions to include / exclude and why
- Prioritization by business criticality
- Estimated transaction mix (%)
- Think time recommendations
- Pacing strategy
- Entry and exit criteria
```

### 1.4 — Test Type Selection
```
My application is [describe: e-commerce / banking API / streaming platform / etc.].
Expected peak concurrent users: [N]
Expected peak RPS: [N]
Key concern: [latency / throughput / stability / scalability]

Which performance test types should I run and in what order? For each test type, provide:
- Goal
- Duration
- VU ramp-up profile
- Pass/fail criteria
- What to watch for
```

### 1.5 — NFR Review Checklist
```
Review the following Non-Functional Requirements (NFRs) for completeness and testability:
[Paste NFR document or list]

For each requirement, assess:
- Is it measurable? If not, suggest how to make it measurable.
- Is it testable with JMeter / k6?
- Are there gaps or ambiguities?
- Recommended SLA thresholds based on industry standards.

Output as a table: NFR | Measurable | Testable | Gap | Recommendation
```

---

## 2. WORKLOAD DESIGN & CONCURRENCY MODELING

### 2.1 — Workload Model from Production Metrics
```
Here is my production traffic data from the last 30 days:
[Paste Datadog / Grafana / CloudWatch metrics or describe: peak RPS, average RPS, peak concurrent users]

Design a realistic workload model for performance testing:
- Concurrency model (open vs closed)
- VU ramp-up profile (step, linear, spike)
- Transaction mix (%) based on production ratios
- Think time and pacing recommendations
- Test duration for each test type
- Load profile diagram (ASCII or table)
```

### 2.2 — Little's Law Calculation
```
Help me calculate the required virtual users using Little's Law.

Given:
- Target throughput (λ): [N requests/second]
- Average response time (W): [N milliseconds]
- Think time: [N seconds]

Show the full calculation, explain each variable, and tell me what VU count to configure in JMeter / k6.
```

### 2.3 — Transaction Mix Design
```
My application has the following user actions based on analytics:
- [Action 1]: [% of traffic]
- [Action 2]: [% of traffic]
- [Action 3]: [% of traffic]

Design a transaction mix for performance testing that:
- Mirrors production proportionally
- Accounts for seasonal variation
- Handles dependencies between transactions
- Works with JMeter Thread Groups or k6 scenarios

Show the mix as a table and provide the JMeter / k6 configuration approach.
```

### 2.4 — Ramp-Up Profile Generator
```
Design a ramp-up profile for the following test scenario:

Test type: [load / stress / spike / soak]
Target VUs: [N]
SLA: p95 < [N]ms, error rate < [N]%
Duration: [N minutes]
Application warm-up time: [N seconds]

Provide:
- Step-by-step ramp-up table (time → VUs)
- JMeter Thread Group configuration values (ramp-up, hold, ramp-down)
- k6 stages array equivalent
- Rationale for the chosen profile
```

---

## 3. JMETER SCRIPT GENERATION

### 3.1 — Generate JMeter Test Plan (JMX) for REST API
```
Generate a complete JMeter test plan (.jmx XML) for the following REST API:

Base URL: [https://api.example.com]
Authentication: [Bearer token / Basic Auth / OAuth2 / API Key]
Endpoints to test:
  1. [GET /endpoint1] — [description]
  2. [POST /endpoint2] — request body: [JSON body]
  3. [PUT /endpoint3] — [description]

Requirements:
- Thread Group: [N] users, [N]s ramp-up, [N] loops
- CSV parameterization for [field names]
- Response assertions on status codes
- Response time assertions
- JSON extractors for dynamic values
- Listeners: View Results Tree (disabled), Summary Report, Backend Listener for Grafana/InfluxDB
- Console output suppressed for CI runs

Output valid JMX XML with proper indentation.
```

### 3.2 — JMeter Thread Group Configuration
```
Help me configure JMeter Thread Groups for the following scenario:

Scenario: [describe what you're testing]
Peak users: [N]
Ramp-up time: [N seconds]
Test duration: [N minutes]
Ramp-down: [yes/no]

Provide configurations for:
1. Standard Thread Group (ramp-up/hold/ramp-down)
2. Ultimate Thread Group (if plugin available)
3. Concurrency Thread Group (if plugin available)

Include XML snippets and explain the difference between each approach.
```

### 3.3 — HTTP Request Sampler with Headers
```
Generate a JMeter HTTP Request sampler with the following specification:

Method: [GET / POST / PUT / DELETE / PATCH]
URL: [full URL or path]
Headers:
  - Content-Type: [application/json / etc.]
  - Authorization: ${auth_token}
  - [Any custom headers]

Request body (if POST/PUT):
[Paste JSON body]

Include:
- HTTP Header Manager
- Content Encoding
- Follow Redirects setting
- Timeout configuration (connect: 5000ms, response: 30000ms)
```

### 3.4 — JMeter Config Element Setup
```
Generate JMeter config elements for the following test plan:

1. HTTP Request Defaults — Base URL: [URL], connection timeout: 5000, response timeout: 30000
2. HTTP Cookie Manager — clear each iteration: yes
3. HTTP Cache Manager — clear each iteration: yes
4. User Defined Variables — define: [list variables and values]
5. CSV Data Set Config — file: testdata.csv, variables: [names], delimiter: comma, recycle: true, stop on EOF: false

Output each as a valid JMX XML snippet.
```

### 3.5 — JMeter Distributed Testing Setup
```
I need to run JMeter in distributed mode with:
- 1 master node
- [N] slave/worker nodes
- Target: [N] total VUs across all nodes

Provide:
- jmeter.properties configuration for master and slaves
- Command to start JMeter server on slaves
- Command to run the test from master
- How to split VUs across nodes
- How to merge and analyze results
- Common issues and fixes (firewall, RMI, SSL)
```

### 3.6 — Backend Listener Configuration (InfluxDB / Grafana)
```
Configure JMeter Backend Listener to send metrics to InfluxDB for Grafana dashboards.

InfluxDB details:
- URL: [http://localhost:8086]
- Database/Bucket: [jmeter]
- Version: [InfluxDB 1.x / 2.x]

Provide:
- Backend Listener XML configuration
- Required InfluxDB setup commands
- Grafana dashboard import instructions
- Key metrics that will be streamed
- Recommended Grafana JMeter dashboard (ID if available)
```

---

## 4. K6 SCRIPT GENERATION

### 4.1 — k6 Load Test Script for REST API
```
Generate a complete k6 load test script in JavaScript/TypeScript for:

Base URL: [https://api.example.com]
Authentication: [Bearer token / API Key in header]
Scenarios to test:
  1. [GET /endpoint] — [description]
  2. [POST /endpoint] — body: [JSON]
  3. [PUT /endpoint] — [description]

Requirements:
- Use k6 scenarios with executor: ramping-vus
- Stages: ramp-up [N]s, hold [N]s, ramp-down [N]s
- Thresholds: http_req_duration p95 < [N]ms, http_req_failed rate < [N]%
- Custom tags per request
- CSV parameterization using SharedArray
- Check status codes and response body
- handleSummary to export JSON report
```

### 4.2 — k6 Scenarios Configuration
```
I need k6 scenarios for a mixed workload with different user behaviors:

Scenario A (Browse): [N] VUs, [description], weight [N]%
Scenario B (Checkout): [N] VUs, [description], weight [N]%
Scenario C (API): constant-arrival-rate, [N] RPS, [description]

Generate the k6 options object with:
- Per-scenario executor, VUs, duration, gracefulStop
- Shared thresholds and per-scenario thresholds using tags
- GracefulRampDown configuration
- Console output explanation
```

### 4.3 — k6 to JMeter Comparison
```
I have this k6 script:
[Paste k6 script]

Convert it to an equivalent JMeter test plan (JMX). Preserve:
- Load profile / stages → Thread Group ramp-up
- Thresholds → Response Assertions + Duration Assertions
- Checks → Response Assertions
- CSV parameterization → CSV Data Set Config
- Custom tags → Transaction Controller naming

Also highlight any k6 features that have no direct JMeter equivalent and suggest workarounds.
```

---

## 5. GATLING SCRIPT GENERATION

### 5.1 — Gatling Simulation for HTTP API
```
Generate a Gatling simulation in Java DSL for:

Base URL: [https://api.example.com]
Endpoints:
  1. [GET /endpoint] with header [key: value]
  2. [POST /endpoint] with body: [JSON]

Load profile:
- Ramp [N] users over [N] seconds
- Hold for [N] seconds

Include:
- Session variable extraction with jsonPath
- Checks on status and response body
- Feeder for CSV test data
- Assertions on p95 and error rate
- Protocol configuration with baseUrl and headers
```

---

## 6. CORRELATION & DYNAMIC VALUES

### 6.1 — Identify Correlation Candidates
```
I have the following HTTP response from my application:
[Paste response headers and body]

Identify all values that need to be correlated (extracted and reused in subsequent requests). For each:
- What the value is (session token, CSRF token, ViewState, redirect URL, etc.)
- Where it appears in the response (header / body / cookie)
- How to extract it in JMeter (Regular Expression Extractor / JSON Extractor / CSS/JQuery Extractor / Boundary Extractor)
- Where it is used in subsequent requests
- Extraction regex or JSONPath expression

Output as a table: Field | Location | Extractor Type | Expression | Used In
```

### 6.2 — JMeter Extractor Configuration
```
Generate JMeter extractor configurations for the following dynamic values:

1. JWT token from response body JSON path: $.data.token
2. CSRF token from HTML form input field named "_csrf"
3. Redirect URL from Location response header
4. Order ID from response body: "orderId":"12345"

For each, provide:
- Correct extractor type (JSON / Regex / CSS / Boundary / XPath)
- Full JMX XML snippet
- Variable name
- Default value
- Scope (main sample only vs sub-samples)
```

### 6.3 — OAuth2 / JWT Token Handling
```
My application uses OAuth2 with JWT tokens. The flow is:
1. POST /oauth/token with client_id, client_secret, grant_type
2. Extract access_token from response
3. Use Bearer ${access_token} in all subsequent requests
4. Token expires every [N] minutes — needs refresh

Implement this in JMeter:
- Login request with token extraction
- User Defined Variable or setUp Thread Group for token
- Token refresh logic using If Controller + Timer
- Proper scoping so all threads share the token
- JSR223 / Groovy approach if needed for refresh timing
```

---

## 7. TEST DATA & PARAMETERIZATION

### 7.1 — Test Data Strategy
```
My performance test requires the following data:

Users: [N] unique users with credentials
Products: [N] product IDs
Orders: Pre-existing orders for GET scenarios
Dynamic inputs: [describe]

Design a test data strategy covering:
- How to generate the data (SQL scripts, data factories, API seeding)
- CSV structure and column names for JMeter / k6 feeders
- Data isolation between VUs (partition strategy)
- Cleanup strategy post-test
- Handling sensitive PII in test data

Provide sample CSV header rows and a data generation SQL or script snippet.
```

### 7.2 — CSV Data Set Config Best Practices
```
I am using a CSV file with [N] rows for [N] virtual users in JMeter.

The CSV contains: [list column names]

Configure JMeter CSV Data Set Config for:
- Scenario A: Each VU gets a unique row (no sharing)
- Scenario B: All VUs cycle through the same data pool
- Scenario C: Random access pattern

For each scenario provide:
- CSV Data Set Config XML
- Sharing mode recommendation
- What happens when EOF is reached
- Gotchas with thread count vs row count mismatch
```

### 7.3 — Dynamic Test Data Generation with Groovy
```
Generate a JSR223 PreProcessor Groovy script that creates dynamic test data per iteration:

Required data:
- Unique email: user_[timestamp]_[threadNum]@test.com
- Random phone number: 10-digit US format
- Random date of birth: between 1970 and 2000
- UUID for correlation ID
- Random amount: between 10.00 and 999.99

Store each as a JMeter variable accessible via ${varName}. Add comments explaining each operation.
```

---

## 8. ASSERTIONS & VALIDATIONS

### 8.1 — Comprehensive Assertion Setup
```
Generate a complete set of JMeter assertions for an HTTP request that:
- Returns HTTP 200 OK
- Returns Content-Type: application/json
- Response body contains "status":"success"
- Response body does NOT contain "error"
- Response time is under [N]ms
- Response size is between [N] and [N] bytes

Provide XML for:
1. Response Assertion (status code)
2. Response Assertion (content type header)
3. JSON Assertion (body content)
4. Response Assertion (negative — must not contain)
5. Duration Assertion (SLA enforcement)
6. Size Assertion

Include scope and failure message for each.
```

### 8.2 — JSON Schema Validation
```
I need to validate that my API response matches an expected JSON schema. The expected structure is:
[Paste expected JSON response]

Generate:
1. JMeter JSON Assertion to validate required fields exist
2. JSR223 Assertion with Groovy to perform deeper schema validation
3. k6 equivalent using check() with multiple conditions
4. Explain the difference between asserting presence vs asserting value
```

---

## 9. CI/CD PIPELINE INTEGRATION

### 9.1 — JMeter in Jenkins Pipeline
```
Generate a Jenkins declarative pipeline (Jenkinsfile) that:
1. Checks out the JMeter test plan from Git
2. Runs JMeter in non-GUI mode with:
   - Test plan: tests/load-test.jmx
   - Results: results/result.jtl
   - HTML report output: reports/
   - Properties overrides: threads=50, rampup=60, duration=300
3. Publishes the HTML report as a Jenkins artifact
4. Parses the JTL to check error rate < 1% and p95 < 500ms
5. Fails the build if thresholds are breached

Include the JMeter command, threshold-checking script (bash or Groovy), and pipeline triggers.
```

### 9.2 — k6 in GitHub Actions
```
Generate a GitHub Actions workflow file that:
1. Triggers on push to main and on schedule (daily at 2am UTC)
2. Installs k6
3. Runs k6 test with environment variable overrides: BASE_URL, API_KEY
4. Uploads the k6 summary JSON as an artifact
5. Comments the test summary on the PR (if triggered by PR)
6. Fails the workflow if k6 thresholds fail

Include secrets handling for API_KEY and the full YAML workflow.
```

### 9.3 — Performance Gate in CI/CD
```
I want to implement a performance quality gate in my CI/CD pipeline. Our thresholds are:
- p95 response time < [N]ms
- p99 response time < [N]ms
- Error rate < [N]%
- Throughput > [N] RPS

Write a shell script (or Python script) that:
1. Reads a JMeter .jtl results file (CSV format)
2. Calculates the above metrics
3. Compares against thresholds
4. Exits with code 0 (pass) or 1 (fail) with a human-readable summary
5. Outputs results as JSON for downstream processing

Include error handling for missing or empty results files.
```

---

## 10. RESULTS ANALYSIS & BOTTLENECK IDENTIFICATION

### 10.1 — JTL Analysis and Interpretation
```
Analyze the following JMeter JTL (CSV) summary data:

[Paste summary: label, samples, average, min, max, p90, p95, p99, error%, throughput]

Provide:
- Overall assessment: Pass / Fail / Warning against typical SLAs
- Identification of slowest transactions and likely causes
- Error rate analysis — which transactions are failing?
- Throughput analysis — are we hitting the target?
- Recommendations for optimization
- Whether the test was resource-limited or application-limited based on these numbers
```

### 10.2 — Percentile Analysis Deep Dive
```
Explain and analyze the following response time distribution for [endpoint name]:

p50: [N]ms
p75: [N]ms
p90: [N]ms
p95: [N]ms
p99: [N]ms
p99.9: [N]ms
Max: [N]ms

Interpret:
- What does the gap between p95 and p99 suggest?
- What does the gap between p99 and max suggest?
- Is this a bimodal distribution? What might cause it?
- Which percentile should be used as the SLA target and why?
- Recommended investigation steps for outlier transactions
```

### 10.3 — Bottleneck Identification Framework
```
My load test results show the following symptoms:
[Describe: slow response times / high error rate / throughput plateau / GC pauses / connection pool exhaustion / etc.]

Walk me through a systematic bottleneck identification process:
1. Which layer is likely the bottleneck? (App / DB / Network / Infra)
2. What metrics to collect at each layer
3. JVM-level diagnostics (if Java app): GC logs, heap, thread dumps
4. Database diagnostics: slow query log, connection pool stats
5. Infrastructure: CPU, memory, disk I/O, network bandwidth
6. How to correlate JMeter response time spikes with server metrics
7. Recommended APM queries (Datadog / Dynatrace / Grafana Loki/Tempo)
```

### 10.4 — Throughput vs Response Time Analysis
```
I ran a step-load test and collected the following data:

VUs | Avg Response Time (ms) | Throughput (RPS) | Error Rate (%)
[Paste table]

Analyze:
- At what VU count does response time start degrading significantly?
- At what VU count does the error rate spike?
- What is the estimated maximum sustainable throughput (saturation point)?
- Plot this as an ASCII chart (throughput curve and response time curve vs VUs)
- Recommend the safe operating capacity with headroom
```

---

## 11. OBSERVABILITY & APM INTEGRATION

### 11.1 — Correlating JMeter Results with APM
```
During my load test, I observed the following in JMeter:
- Spike in p99 response time at [time] during [VU count]
- Error rate increased from 0% to [N]% at [time]

I have [Datadog / Dynatrace / New Relic / Grafana + Prometheus] as my APM tool.

Guide me on:
- Which APM dashboards and metrics to check
- How to find the slow traces correlating to the JMeter spike time
- Database query analysis: slow queries, lock contention
- JVM analysis: heap usage, GC activity, thread states
- Infrastructure correlation: CPU, memory, network at the same timestamp
- How to set up APM alerts triggered during load tests
```

### 11.2 — JMeter + InfluxDB + Grafana Stack Setup
```
Set up a complete real-time monitoring stack for JMeter:

Components:
- JMeter Backend Listener → InfluxDB → Grafana

Provide:
1. Docker Compose file for InfluxDB 2.x and Grafana
2. InfluxDB bucket and token setup commands
3. JMeter Backend Listener XML configuration
4. Grafana data source configuration
5. Key panels to add: throughput, response times (p50/p90/p95/p99), active VUs, error rate, requests/sec per transaction
6. How to annotate the Grafana dashboard with test start/end events
```

### 11.3 — Prometheus Metrics from Application During Load Test
```
My Spring Boot application exposes Prometheus metrics via /actuator/prometheus.

During load testing, I want to correlate:
- JVM heap usage (jvm_memory_used_bytes)
- GC pause duration (jvm_gc_pause_seconds)
- Hikari connection pool active connections (hikaricp_connections_active)
- HTTP request duration from app side (http_server_requests_seconds)

Generate:
- Prometheus scrape config for the application
- Key PromQL queries to run during tests
- Grafana panel JSON for each metric
- Alert thresholds to set for each metric during a load test
```

---

## 12. API PERFORMANCE TESTING

### 12.1 — REST API Full CRUD Load Test
```
Generate a JMeter test plan for full CRUD operations on a REST API:

Resource: [/api/v1/products]
Operations:
- POST (Create): 20% of traffic
- GET by ID (Read): 50% of traffic
- PUT (Update): 20% of traffic
- DELETE: 10% of traffic

Requirements:
- Flow dependency: Create → Read → Update → Delete in sequence per VU
- Extract ID from POST response for use in GET, PUT, DELETE
- Separate Thread Groups or Transaction Controllers per operation
- Assertions on all operations
- Think time: 1–3 seconds (Gaussian Random Timer)
```

### 12.2 — GraphQL Performance Testing
```
I need to performance test a GraphQL API at [endpoint: /graphql].

Queries to test:
1. Query: [paste GraphQL query]
2. Mutation: [paste GraphQL mutation]

Generate:
- JMeter HTTP Request for GraphQL (POST with JSON body containing query/variables)
- k6 equivalent
- How to parameterize GraphQL variables
- Common GraphQL-specific performance pitfalls (N+1, deep nesting, unbounded queries)
- How to identify expensive resolvers using APM
```

### 12.3 — gRPC Load Testing
```
I need to load test a gRPC service with the following proto definition:
[Paste proto snippet or describe service methods]

Provide options for:
1. JMeter gRPC Plugin setup and configuration
2. k6 with k6-grpc extension
3. ghz command-line tool approach

Include:
- Tool setup and dependencies
- Script/config for each option
- How to parameterize request payloads
- How to handle TLS/mTLS
- Key metrics to monitor for gRPC services
```

---

## 13. DATABASE & JDBC TESTING

### 13.1 — JMeter JDBC Load Test
```
Generate a JMeter JDBC test plan for database performance testing:

Database: [MySQL / PostgreSQL / Oracle / SQL Server]
JDBC URL: [jdbc:mysql://localhost:3306/testdb]
Driver class: [com.mysql.cj.jdbc.Driver]
Username/password: parameterized via CSV

Queries to test:
1. SELECT: [your query]
2. INSERT: [your query]
3. UPDATE: [your query]

Include:
- JDBC Connection Configuration element
- JDBC Request sampler for each query
- Result variable extraction for SELECT results
- Connection pool settings (maxActive, maxIdle, maxWait)
- Proper connection cleanup
- Full JMX XML output
```

### 13.2 — Connection Pool Exhaustion Diagnosis
```
During my load test, I'm seeing errors like:
"Cannot get a connection, pool error: Timeout waiting for connection"
OR
"HikariPool - Connection is not available, request timed out after Nms"

Diagnose and fix:
- What is connection pool exhaustion and why does it happen under load?
- How to calculate the right pool size for my workload
- HikariCP configuration best practices (minimumIdle, maximumPoolSize, connectionTimeout, idleTimeout)
- Spring Boot application.properties settings
- How to monitor connection pool in Grafana/Prometheus
- What to look for in slow query logs
```

---

## 14. WEBSOCKET & GRPC TESTING

### 14.1 — WebSocket Load Test in JMeter
```
Generate a JMeter test plan for WebSocket load testing:

WebSocket URL: [ws://localhost:8080/ws or wss://]
Flow:
1. Connect to WebSocket
2. Send message: [payload]
3. Wait for response containing [substring]
4. Send [N] more messages
5. Close connection

Requirements:
- Use JMeter WebSocket Sampler plugin (Peter Doornbosch)
- Connection and close samplers
- Response assertion on incoming message
- Simulate [N] concurrent connections
- Think time between messages: [N]ms
- Extract dynamic values from connect response
```

---

## 15. DISTRIBUTED & CLOUD EXECUTION

### 15.1 — JMeter on Kubernetes
```
Deploy and run JMeter distributed tests on Kubernetes:

Requirements:
- 1 JMeter master pod
- [N] JMeter worker pods (auto-scaled)
- Shared test plan from ConfigMap or PVC
- Results collected from all workers to master

Provide:
- JMeter master Deployment YAML
- JMeter worker Deployment YAML
- Service definitions for RMI communication
- ConfigMap for jmeter.properties
- Commands to trigger the test and collect results
- How to scale workers horizontally with kubectl
```

### 15.2 — Grafana k6 Cloud Configuration
```
Configure k6 to run tests on Grafana Cloud k6:

Setup:
- k6 cloud token configuration
- Project and test naming
- Zones/load zones: [us-east, eu-west, ap-southeast]
- VU distribution across zones

Provide:
- k6 cloud login and configure commands
- k6 script options for cloud execution
- How to view real-time results in Grafana Cloud k6
- Cost estimation for [N] VUs over [N] minutes
- Thresholds behavior in cloud runs (advisory vs abort)
```

---

## 16. REPORTING & STAKEHOLDER COMMUNICATION

### 16.1 — Executive Performance Test Summary
```
I ran a load test with the following results:
[Paste JMeter summary or k6 output]

Write an executive summary (non-technical) covering:
- Test objective in one sentence
- Overall result: PASS / FAIL / CONDITIONAL PASS
- Key findings (3 bullet points max)
- Business impact of any failures found
- Recommendation: Go / No-Go for production
- Next steps

Keep it under 300 words. Avoid technical jargon. Use plain business language.
```

### 16.2 — Technical Performance Test Report
```
Generate a detailed technical performance test report based on:

Test environment: [describe]
Test tool: [JMeter / k6]
Test date: [date]
Duration: [N minutes]
Peak VUs: [N]
Results: [paste summary table]
Errors observed: [describe]
Infrastructure metrics: [describe CPU, memory, DB during test]

Report should include:
- Test objectives and scope
- Test environment details
- Methodology and approach
- Results summary table
- Response time graphs description
- Throughput analysis
- Error analysis with root cause
- Infrastructure utilization summary
- Pass/fail against SLAs
- Root cause and recommendations
- Appendix: Raw data reference
```

### 16.3 — Performance Regression Comparison
```
Compare these two performance test runs to identify regression:

Baseline (v1.0):
[Paste baseline results table]

Current (v2.0):
[Paste current results table]

Analyze:
- Which transactions regressed? (response time increase > 10%)
- Which transactions improved?
- Is the throughput change significant?
- Error rate comparison
- Overall regression verdict: Significant / Minor / None
- Suspected root causes for regressions
- Output as a comparison table with delta % and RAG status (Red/Amber/Green)
```

---

## 17. TROUBLESHOOTING & DEBUGGING

### 17.1 — JMeter Out of Memory / Heap Issues
```
My JMeter test is crashing with OutOfMemoryError or GC overhead limit exceeded after [N] minutes with [N] VUs.

Diagnose and fix:
- Root causes of JMeter memory issues
- JVM heap tuning: how to set -Xms and -Xmx in jmeter.bat / jmeter.sh
- Listener optimization: which listeners to disable in CI/CD runs
- Results file size management
- How to profile JMeter's own memory with JVisualVM or JMC
- Best configuration for long-running soak tests
- Recommended JVM flags for JMeter at [N] VUs
```

### 17.2 — Debug JMeter HTTP Request
```
My JMeter HTTP request is failing with:
[Paste error: Connection refused / 401 / 403 / 500 / SSL handshake / etc.]

Help me debug step by step:
- What each error code means in the context of load testing
- How to enable JMeter HTTP debug logging
- How to compare JMeter request with working browser/Postman request
- SSL/TLS configuration issues and fixes
- Proxy recording debugging tips
- HTTP request header differences to check
- How to use View Results Tree effectively without memory issues
```

### 17.3 — High Error Rate Root Cause Analysis
```
My load test has a [N]% error rate. The errors are:
[Paste error messages from JMeter or describe them]

Provide a systematic RCA:
1. Classify errors: client-side vs server-side vs network
2. Common causes for each error type
3. How to extract error details from JMeter (Response Assertion failure, HTTP status, body)
4. How to correlate errors with server logs
5. How to implement JMeter Error Handling (Error Controller, If Controller)
6. When to fail fast vs continue on error
7. Fix recommendations for the specific errors observed
```

---

## 18. PRODUCTION TESTING & OBSERVABILITY

### 18.1 — Synthetic Monitoring Design
```
Design a synthetic monitoring strategy for production using [k6 Cloud / Grafana Synthetic / Catchpoint]:

Critical user journeys to monitor:
1. [Journey 1]: [description]
2. [Journey 2]: [description]

Requirements:
- Frequency: every [N] minutes
- From locations: [list regions]
- Alerting: page on-call if p95 > [N]ms or error for > [N] consecutive runs

Provide:
- Script structure for each journey
- Alert configuration logic
- How to distinguish synthetic failures from real user impact
- Runbook: What to do when synthetic alert fires
```

### 18.2 — Shadow Load Testing
```
Explain how to implement shadow load testing for my production system:

Architecture: [describe: microservices / monolith / API gateway / etc.]

Cover:
- What shadow load testing is and when to use it
- Tools: Shadowtraffic, Goreplay, Istio traffic mirroring, AWS Global Accelerator
- How to mirror [N]% of production traffic to staging
- Ensuring shadow requests don't pollute production data
- Monitoring shadow environment during traffic replay
- Interpreting results when shadow latency differs from production
- Risk management and rollback strategy
```

---

## 19. GROOVY & JSR223 SCRIPTING

### 19.1 — Groovy Pre/Post Processor Templates
```
Generate Groovy scripts for the following JSR223 use cases in JMeter:

1. PreProcessor: Generate HMAC-SHA256 signature for request signing
   - Inputs: request body (${requestBody}), secret key (${apiSecret})
   - Output: JMeter variable ${signature}

2. PostProcessor: Parse nested JSON and extract a list of IDs into separate variables
   - Input: Response body with array $.items[*].id
   - Output: ${itemId_1}, ${itemId_2}, ... ${itemId_N} and ${itemId_count}

3. PreProcessor: Log request details to a custom file per test run
   - Include: timestamp, thread name, sampler label, iteration count

Include error handling and use JMeter API (vars, props, log) correctly.
```

### 19.2 — Groovy HTTP Client in JSR223
```
I need to make a secondary HTTP call inside a JSR223 Groovy script (not as a separate JMeter sampler) to:
- GET [URL] to fetch a lookup value
- Store the result in a JMeter variable ${lookupValue}

Generate the Groovy script using:
1. JMeter's built-in HTTP client (org.apache.http)
2. Java's HttpURLConnection
3. Groovy's built-in HTTP support

Show all three approaches and recommend the best one for JMeter performance.
```

---

## 20. PERFORMANCE ENGINEERING BEST PRACTICES

### 20.1 — Performance Testing Checklist
```
Generate a comprehensive performance testing checklist covering all phases:

Phase 1: Pre-Test
- [ ] Test plan reviewed and approved
- [ ] [Continue generating all checklist items]

Phase 2: Environment Setup
Phase 3: Test Data Preparation
Phase 4: Script Review
Phase 5: Test Execution
Phase 6: Monitoring Setup
Phase 7: Results Analysis
Phase 8: Reporting
Phase 9: Post-Test Cleanup

Output as a detailed, actionable Markdown checklist.
```

### 20.2 — Common Performance Anti-Patterns
```
List the top 20 performance testing anti-patterns that engineers make with JMeter / k6, covering:

For each anti-pattern:
- Anti-pattern name
- What the engineer does wrong
- Why it leads to misleading results
- The correct approach
- Example (before/after configuration or code)

Categories to cover:
- Script design mistakes
- Load profile mistakes
- Assertion mistakes
- Environment mistakes
- Analysis mistakes
- Reporting mistakes
```

### 20.3 — Performance Testing Maturity Assessment
```
Assess the performance testing maturity of my team based on the following current state:
[Describe: when do you test, what tools, how automated, what metrics you track, how results are used]

Use the following maturity levels:
- Level 1: Reactive (test only when problems occur)
- Level 2: Defined (some process, occasional testing)
- Level 3: Managed (regular testing, CI/CD integration)
- Level 4: Optimized (continuous performance engineering, production feedback loop)

Provide:
- Current maturity level with justification
- Gap analysis for the next level
- A 90-day roadmap to reach Level [N+1]
- Quick wins achievable in the first 30 days
```

### 20.4 — Performance KPIs Dashboard Design
```
Design a performance engineering KPIs dashboard for a development team.

The dashboard should track:
- Per-release performance trends (response time, throughput, error rate)
- SLA compliance rate over time
- Number of performance bugs found and fixed per sprint
- Test coverage (% of critical user journeys tested)
- Time to detect performance regressions

Provide:
- Dashboard layout description
- Data sources for each KPI
- How to instrument CI/CD to auto-populate metrics
- Recommended tooling: Grafana / Datadog / Confluence
- Alert conditions for each KPI
```

---

## 🔖 QUICK REFERENCE PROMPTS

| Use Case | Start with |
|---|---|
| Generate JMeter script from API spec | *"Generate a JMeter test plan for..."* |
| Debug a failing test | *"My JMeter test is failing with..."* |
| Analyze results | *"Analyze these JMeter results..."* |
| CI/CD integration | *"Generate a Jenkins pipeline that runs JMeter..."* |
| Correlation help | *"Identify correlation candidates in this response..."* |
| Workload model | *"Design a workload model using Little's Law for..."* |
| Executive report | *"Write an executive summary for these test results..."* |
| Bottleneck diagnosis | *"My load test shows high p99. Help me diagnose..."* |
| k6 conversion | *"Convert this JMeter plan to k6..."* |
| Groovy scripting | *"Write a JSR223 Groovy script that..."* |

---