export interface Prompt {
  id: string;
  title: string;
  body: string;
}

export interface PromptCategory {
  id: string;
  label: string;
  icon: string;
  prompts: Prompt[];
}

export const promptCategories: PromptCategory[] = [
  {
    id: "test-planning",
    label: "Test Planning & Strategy",
    icon: "clipboard-list",
    prompts: [
      {
        id: "1-1",
        title: "Generate a Performance Test Strategy Document",
        body: `Act as a senior performance engineer. Generate a comprehensive performance test strategy document for a [REST API / web application / microservices system] that handles [describe the system briefly]. 

Include:
- Objectives and scope
- Test types required (load, stress, soak, spike, breakpoint)
- Entry and exit criteria for each test type
- SLA targets (response time, throughput, error rate)
- Environment and infrastructure requirements
- Risks and mitigation strategies
- Tools and technology stack recommendation
- Roles and responsibilities

Format as a professional document with sections and tables where appropriate.`,
      },
      {
        id: "1-2",
        title: "Define SLA Targets from Business Requirements",
        body: `I have the following business requirements for my application:
[Paste business requirements or NFRs here]

Convert these into measurable SLA targets for performance testing. Define:
- p50, p90, p95, p99 response time thresholds
- Throughput (requests per second / transactions per minute)
- Error rate thresholds
- Apdex score targets
- Resource utilization ceilings (CPU, memory, connections)

Explain the rationale behind each threshold.`,
      },
      {
        id: "1-3",
        title: "Performance Test Scope Definition",
        body: `I am testing [application name] which has the following user journeys:
[List top 3–5 user journeys]

Help me define the performance test scope:
- Which transactions to include / exclude and why
- Prioritization by business criticality
- Estimated transaction mix (%)
- Think time recommendations
- Pacing strategy
- Entry and exit criteria`,
      },
      {
        id: "1-4",
        title: "Test Type Selection",
        body: `My application is [describe: e-commerce / banking API / streaming platform / etc.].
Expected peak concurrent users: [N]
Expected peak RPS: [N]
Key concern: [latency / throughput / stability / scalability]

Which performance test types should I run and in what order? For each test type, provide:
- Goal
- Duration
- VU ramp-up profile
- Pass/fail criteria
- What to watch for`,
      },
      {
        id: "1-5",
        title: "NFR Review Checklist",
        body: `Review the following Non-Functional Requirements (NFRs) for completeness and testability:
[Paste NFR document or list]

For each requirement, assess:
- Is it measurable? If not, suggest how to make it measurable.
- Is it testable with JMeter / k6?
- Are there gaps or ambiguities?
- Recommended SLA thresholds based on industry standards.

Output as a table: NFR | Measurable | Testable | Gap | Recommendation`,
      },
    ],
  },
  {
    id: "workload-design",
    label: "Workload Design & Concurrency",
    icon: "bar-chart",
    prompts: [
      {
        id: "2-1",
        title: "Workload Model from Production Metrics",
        body: `Here is my production traffic data from the last 30 days:
[Paste Datadog / Grafana / CloudWatch metrics or describe: peak RPS, average RPS, peak concurrent users]

Design a realistic workload model for performance testing:
- Concurrency model (open vs closed)
- VU ramp-up profile (step, linear, spike)
- Transaction mix (%) based on production ratios
- Think time and pacing recommendations
- Test duration for each test type
- Load profile diagram (ASCII or table)`,
      },
      {
        id: "2-2",
        title: "Little's Law Calculation",
        body: `Help me calculate the required virtual users using Little's Law.

Given:
- Target throughput (λ): [N requests/second]
- Average response time (W): [N milliseconds]
- Think time: [N seconds]

Show the full calculation, explain each variable, and tell me what VU count to configure in JMeter / k6.`,
      },
      {
        id: "2-3",
        title: "Transaction Mix Design",
        body: `My application has the following user actions based on analytics:
- [Action 1]: [% of traffic]
- [Action 2]: [% of traffic]
- [Action 3]: [% of traffic]

Design a transaction mix for performance testing that:
- Mirrors production proportionally
- Accounts for seasonal variation
- Handles dependencies between transactions
- Works with JMeter Thread Groups or k6 scenarios

Show the mix as a table and provide the JMeter / k6 configuration approach.`,
      },
      {
        id: "2-4",
        title: "Ramp-Up Profile Generator",
        body: `Design a ramp-up profile for the following test scenario:

Test type: [load / stress / spike / soak]
Target VUs: [N]
SLA: p95 < [N]ms, error rate < [N]%
Duration: [N minutes]
Application warm-up time: [N seconds]

Provide:
- Step-by-step ramp-up table (time → VUs)
- JMeter Thread Group configuration values (ramp-up, hold, ramp-down)
- k6 stages array equivalent
- Rationale for the chosen profile`,
      },
    ],
  },
  {
    id: "jmeter-scripts",
    label: "JMeter Script Generation",
    icon: "code",
    prompts: [
      {
        id: "3-1",
        title: "Generate JMeter Test Plan (JMX) for REST API",
        body: `Generate a complete JMeter test plan (.jmx XML) for the following REST API:

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

Output valid JMX XML with proper indentation.`,
      },
      {
        id: "3-2",
        title: "JMeter Thread Group Configuration",
        body: `Help me configure JMeter Thread Groups for the following scenario:

Scenario: [describe what you're testing]
Peak users: [N]
Ramp-up time: [N seconds]
Test duration: [N minutes]
Ramp-down: [yes/no]

Provide configurations for:
1. Standard Thread Group (ramp-up/hold/ramp-down)
2. Ultimate Thread Group (if plugin available)
3. Concurrency Thread Group (if plugin available)

Include XML snippets and explain the difference between each approach.`,
      },
      {
        id: "3-3",
        title: "HTTP Request Sampler with Headers",
        body: `Generate a JMeter HTTP Request sampler with the following specification:

Method: [GET / POST / PUT / DELETE / PATCH]
URL: [full URL or path]
Headers:
  - Content-Type: [application/json / etc.]
  - Authorization: \${auth_token}
  - [Any custom headers]

Request body (if POST/PUT):
[Paste JSON body]

Include:
- HTTP Header Manager
- Content Encoding
- Follow Redirects setting
- Timeout configuration (connect: 5000ms, response: 30000ms)`,
      },
      {
        id: "3-4",
        title: "JMeter Config Element Setup",
        body: `Generate JMeter config elements for the following test plan:

1. HTTP Request Defaults — Base URL: [URL], connection timeout: 5000, response timeout: 30000
2. HTTP Cookie Manager — clear each iteration: yes
3. HTTP Cache Manager — clear each iteration: yes
4. User Defined Variables — define: [list variables and values]
5. CSV Data Set Config — file: testdata.csv, variables: [names], delimiter: comma, recycle: true, stop on EOF: false

Output each as a valid JMX XML snippet.`,
      },
      {
        id: "3-5",
        title: "JMeter Distributed Testing Setup",
        body: `I need to run JMeter in distributed mode with:
- 1 master node
- [N] slave/worker nodes
- Target: [N] total VUs across all nodes

Provide:
- jmeter.properties configuration for master and slaves
- Command to start JMeter server on slaves
- Command to run the test from master
- How to split VUs across nodes
- How to merge and analyze results
- Common issues and fixes (firewall, RMI, SSL)`,
      },
      {
        id: "3-6",
        title: "Backend Listener Configuration (InfluxDB / Grafana)",
        body: `Configure JMeter Backend Listener to send metrics to InfluxDB for Grafana dashboards.

InfluxDB details:
- URL: [http://localhost:8086]
- Database/Bucket: [jmeter]
- Version: [InfluxDB 1.x / 2.x]

Provide:
- Backend Listener XML configuration
- Required InfluxDB setup commands
- Grafana dashboard import instructions
- Key metrics that will be streamed
- Recommended Grafana JMeter dashboard (ID if available)`,
      },
    ],
  },
  {
    id: "k6-scripts",
    label: "k6 Script Generation",
    icon: "zap",
    prompts: [
      {
        id: "4-1",
        title: "k6 Load Test Script for REST API",
        body: `Generate a complete k6 load test script in JavaScript/TypeScript for:

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
- handleSummary to export JSON report`,
      },
      {
        id: "4-2",
        title: "k6 Scenarios Configuration",
        body: `I need k6 scenarios for a mixed workload with different user behaviors:

Scenario A (Browse): [N] VUs, [description], weight [N]%
Scenario B (Checkout): [N] VUs, [description], weight [N]%
Scenario C (API): constant-arrival-rate, [N] RPS, [description]

Generate the k6 options object with:
- Per-scenario executor, VUs, duration, gracefulStop
- Shared thresholds and per-scenario thresholds using tags
- GracefulRampDown configuration
- Console output explanation`,
      },
      {
        id: "4-3",
        title: "k6 to JMeter Conversion",
        body: `I have this k6 script:
[Paste k6 script]

Convert it to an equivalent JMeter test plan (JMX). Preserve:
- Load profile / stages → Thread Group ramp-up
- Thresholds → Response Assertions + Duration Assertions
- Checks → Response Assertions
- CSV parameterization → CSV Data Set Config
- Custom tags → Transaction Controller naming

Also highlight any k6 features that have no direct JMeter equivalent and suggest workarounds.`,
      },
    ],
  },
  {
    id: "gatling-scripts",
    label: "Gatling Script Generation",
    icon: "terminal",
    prompts: [
      {
        id: "5-1",
        title: "Gatling Simulation for HTTP API",
        body: `Generate a Gatling simulation in Java DSL for:

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
- Protocol configuration with baseUrl and headers`,
      },
    ],
  },
  {
    id: "correlation",
    label: "Correlation & Dynamic Values",
    icon: "git-merge",
    prompts: [
      {
        id: "6-1",
        title: "Identify Correlation Candidates",
        body: `I have the following HTTP response from my application:
[Paste response headers and body]

Identify all values that need to be correlated (extracted and reused in subsequent requests). For each:
- What the value is (session token, CSRF token, ViewState, redirect URL, etc.)
- Where it appears in the response (header / body / cookie)
- How to extract it in JMeter (Regular Expression Extractor / JSON Extractor / CSS/JQuery Extractor / Boundary Extractor)
- Where it is used in subsequent requests
- Extraction regex or JSONPath expression

Output as a table: Field | Location | Extractor Type | Expression | Used In`,
      },
      {
        id: "6-2",
        title: "JMeter Extractor Configuration",
        body: `Generate JMeter extractor configurations for the following dynamic values:

1. JWT token from response body JSON path: $.data.token
2. CSRF token from HTML form input field named "_csrf"
3. Redirect URL from Location response header
4. Order ID from response body: "orderId":"12345"

For each, provide:
- Correct extractor type (JSON / Regex / CSS / Boundary / XPath)
- Full JMX XML snippet
- Variable name
- Default value
- Scope (main sample only vs sub-samples)`,
      },
      {
        id: "6-3",
        title: "OAuth2 / JWT Token Handling",
        body: `My application uses OAuth2 with JWT tokens. The flow is:
1. POST /oauth/token with client_id, client_secret, grant_type
2. Extract access_token from response
3. Use Bearer \${access_token} in all subsequent requests
4. Token expires every [N] minutes — needs refresh

Implement this in JMeter:
- Login request with token extraction
- User Defined Variable or setUp Thread Group for token
- Token refresh logic using If Controller + Timer
- Proper scoping so all threads share the token
- JSR223 / Groovy approach if needed for refresh timing`,
      },
    ],
  },
  {
    id: "test-data",
    label: "Test Data & Parameterization",
    icon: "database",
    prompts: [
      {
        id: "7-1",
        title: "Test Data Strategy",
        body: `My performance test requires the following data:

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

Provide sample CSV header rows and a data generation SQL or script snippet.`,
      },
      {
        id: "7-2",
        title: "CSV Data Set Config Best Practices",
        body: `I am using a CSV file with [N] rows for [N] virtual users in JMeter.

The CSV contains: [list column names]

Configure JMeter CSV Data Set Config for:
- Scenario A: Each VU gets a unique row (no sharing)
- Scenario B: All VUs cycle through the same data pool
- Scenario C: Random access pattern

For each scenario provide:
- CSV Data Set Config XML
- Sharing mode recommendation
- What happens when EOF is reached
- Gotchas with thread count vs row count mismatch`,
      },
      {
        id: "7-3",
        title: "Dynamic Test Data Generation with Groovy",
        body: `Generate a JSR223 PreProcessor Groovy script that creates dynamic test data per iteration:

Required data:
- Unique email: user_[timestamp]_[threadNum]@test.com
- Random phone number: 10-digit US format
- Random date of birth: between 1970 and 2000
- UUID for correlation ID
- Random amount: between 10.00 and 999.99

Store each as a JMeter variable accessible via \${varName}. Add comments explaining each operation.`,
      },
    ],
  },
  {
    id: "assertions",
    label: "Assertions & Validations",
    icon: "check-circle",
    prompts: [
      {
        id: "8-1",
        title: "Comprehensive Assertion Setup",
        body: `Generate a complete set of JMeter assertions for an HTTP request that:
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

Include scope and failure message for each.`,
      },
      {
        id: "8-2",
        title: "JSON Schema Validation",
        body: `I need to validate that my API response matches an expected JSON schema. The expected structure is:
[Paste expected JSON response]

Generate:
1. JMeter JSON Assertion to validate required fields exist
2. JSR223 Assertion with Groovy to perform deeper schema validation
3. k6 equivalent using check() with multiple conditions
4. Explain the difference between asserting presence vs asserting value`,
      },
    ],
  },
  {
    id: "cicd",
    label: "CI/CD Pipeline Integration",
    icon: "git-branch",
    prompts: [
      {
        id: "9-1",
        title: "JMeter in Jenkins Pipeline",
        body: `Generate a Jenkins declarative pipeline (Jenkinsfile) that:
1. Checks out the JMeter test plan from Git
2. Runs JMeter in non-GUI mode with:
   - Test plan: tests/load-test.jmx
   - Results: results/result.jtl
   - HTML report output: reports/
   - Properties overrides: threads=50, rampup=60, duration=300
3. Publishes the HTML report as a Jenkins artifact
4. Parses the JTL to check error rate < 1% and p95 < 500ms
5. Fails the build if thresholds are breached

Include the JMeter command, threshold-checking script (bash or Groovy), and pipeline triggers.`,
      },
      {
        id: "9-2",
        title: "k6 in GitHub Actions",
        body: `Generate a GitHub Actions workflow file that:
1. Triggers on push to main and on schedule (daily at 2am UTC)
2. Installs k6
3. Runs k6 test with environment variable overrides: BASE_URL, API_KEY
4. Uploads the k6 summary JSON as an artifact
5. Comments the test summary on the PR (if triggered by PR)
6. Fails the workflow if k6 thresholds fail

Include secrets handling for API_KEY and the full YAML workflow.`,
      },
      {
        id: "9-3",
        title: "Performance Gate in CI/CD",
        body: `I want to implement a performance quality gate in my CI/CD pipeline. Our thresholds are:
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

Include error handling for missing or empty results files.`,
      },
    ],
  },
  {
    id: "results-analysis",
    label: "Results Analysis & Bottleneck ID",
    icon: "trending-up",
    prompts: [
      {
        id: "10-1",
        title: "JTL Analysis and Interpretation",
        body: `Analyze the following JMeter JTL (CSV) summary data:

[Paste summary: label, samples, average, min, max, p90, p95, p99, error%, throughput]

Provide:
- Overall assessment: Pass / Fail / Warning against typical SLAs
- Identification of slowest transactions and likely causes
- Error rate analysis — which transactions are failing?
- Throughput analysis — are we hitting the target?
- Recommendations for optimization
- Whether the test was resource-limited or application-limited based on these numbers`,
      },
      {
        id: "10-2",
        title: "Percentile Analysis Deep Dive",
        body: `Explain and analyze the following response time distribution for [endpoint name]:

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
- Recommended investigation steps for outlier transactions`,
      },
      {
        id: "10-3",
        title: "Bottleneck Identification Framework",
        body: `My load test results show the following symptoms:
[Describe: slow response times / high error rate / throughput plateau / GC pauses / connection pool exhaustion / etc.]

Walk me through a systematic bottleneck identification process:
1. Which layer is likely the bottleneck? (App / DB / Network / Infra)
2. What metrics to collect at each layer
3. JVM-level diagnostics (if Java app): GC logs, heap, thread dumps
4. Database diagnostics: slow query log, connection pool stats
5. Infrastructure: CPU, memory, disk I/O, network bandwidth
6. How to correlate JMeter response time spikes with server metrics
7. Recommended APM queries (Datadog / Dynatrace / Grafana Loki/Tempo)`,
      },
      {
        id: "10-4",
        title: "Throughput vs Response Time Analysis",
        body: `I ran a step-load test and collected the following data:

VUs | Avg Response Time (ms) | Throughput (RPS) | Error Rate (%)
[Paste table]

Analyze:
- At what VU count does response time start degrading significantly?
- At what VU count does the error rate spike?
- What is the estimated maximum sustainable throughput (saturation point)?
- Plot this as an ASCII chart (throughput curve and response time curve vs VUs)
- Recommend the safe operating capacity with headroom`,
      },
    ],
  },
  {
    id: "observability",
    label: "Observability & APM Integration",
    icon: "activity",
    prompts: [
      {
        id: "11-1",
        title: "Correlating JMeter Results with APM",
        body: `During my load test, I observed the following in JMeter:
- Spike in p99 response time at [time] during [VU count]
- Error rate increased from 0% to [N]% at [time]

I have [Datadog / Dynatrace / New Relic / Grafana + Prometheus] as my APM tool.

Guide me on:
- Which APM dashboards and metrics to check
- How to find the slow traces correlating to the JMeter spike time
- Database query analysis: slow queries, lock contention
- JVM analysis: heap usage, GC activity, thread states
- Infrastructure correlation: CPU, memory, network at the same timestamp
- How to set up APM alerts triggered during load tests`,
      },
      {
        id: "11-2",
        title: "JMeter + InfluxDB + Grafana Stack Setup",
        body: `Set up a complete real-time monitoring stack for JMeter:

Components:
- JMeter Backend Listener → InfluxDB → Grafana

Provide:
1. Docker Compose file for InfluxDB 2.x and Grafana
2. InfluxDB bucket and token setup commands
3. JMeter Backend Listener XML configuration
4. Grafana data source configuration
5. Key panels to add: throughput, response times (p50/p90/p95/p99), active VUs, error rate, requests/sec per transaction
6. How to annotate the Grafana dashboard with test start/end events`,
      },
      {
        id: "11-3",
        title: "Prometheus Metrics During Load Test",
        body: `My Spring Boot application exposes Prometheus metrics via /actuator/prometheus.

During load testing, I want to correlate:
- JVM heap usage (jvm_memory_used_bytes)
- GC pause duration (jvm_gc_pause_seconds)
- Hikari connection pool active connections (hikaricp_connections_active)
- HTTP request duration from app side (http_server_requests_seconds)

Generate:
- Prometheus scrape config for the application
- Key PromQL queries to run during tests
- Grafana panel JSON for each metric
- Alert thresholds to set for each metric during a load test`,
      },
    ],
  },
  {
    id: "api-testing",
    label: "API Performance Testing",
    icon: "globe",
    prompts: [
      {
        id: "12-1",
        title: "REST API Full CRUD Load Test",
        body: `Generate a JMeter test plan for full CRUD operations on a REST API:

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
- Think time: 1–3 seconds (Gaussian Random Timer)`,
      },
      {
        id: "12-2",
        title: "GraphQL Performance Testing",
        body: `I need to performance test a GraphQL API at [endpoint: /graphql].

Queries to test:
1. Query: [paste GraphQL query]
2. Mutation: [paste GraphQL mutation]

Generate:
- JMeter HTTP Request for GraphQL (POST with JSON body containing query/variables)
- k6 equivalent
- How to parameterize GraphQL variables
- Common GraphQL-specific performance pitfalls (N+1, deep nesting, unbounded queries)
- How to identify expensive resolvers using APM`,
      },
      {
        id: "12-3",
        title: "gRPC Load Testing",
        body: `I need to load test a gRPC service with the following proto definition:
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
- Key metrics to monitor for gRPC services`,
      },
    ],
  },
  {
    id: "database-testing",
    label: "Database & JDBC Testing",
    icon: "server",
    prompts: [
      {
        id: "13-1",
        title: "JMeter JDBC Load Test",
        body: `Generate a JMeter JDBC test plan for database performance testing:

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
- Full JMX XML output`,
      },
      {
        id: "13-2",
        title: "Connection Pool Exhaustion Diagnosis",
        body: `During my load test, I'm seeing errors like:
"Cannot get a connection, pool error: Timeout waiting for connection"
OR
"HikariPool - Connection is not available, request timed out after Nms"

Diagnose and fix:
- What is connection pool exhaustion and why does it happen under load?
- How to calculate the right pool size for my workload
- HikariCP configuration best practices (minimumIdle, maximumPoolSize, connectionTimeout, idleTimeout)
- Spring Boot application.properties settings
- How to monitor connection pool in Grafana/Prometheus
- What to look for in slow query logs`,
      },
    ],
  },
  {
    id: "websocket-grpc",
    label: "WebSocket & gRPC Testing",
    icon: "radio",
    prompts: [
      {
        id: "14-1",
        title: "WebSocket Load Test in JMeter",
        body: `Generate a JMeter test plan for WebSocket load testing:

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
- Extract dynamic values from connect response`,
      },
    ],
  },
  {
    id: "distributed-cloud",
    label: "Distributed & Cloud Execution",
    icon: "cloud",
    prompts: [
      {
        id: "15-1",
        title: "JMeter on Kubernetes",
        body: `Deploy and run JMeter distributed tests on Kubernetes:

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
- How to scale workers horizontally with kubectl`,
      },
      {
        id: "15-2",
        title: "Grafana k6 Cloud Configuration",
        body: `Configure k6 to run tests on Grafana Cloud k6:

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
- Thresholds behavior in cloud runs (advisory vs abort)`,
      },
    ],
  },
  {
    id: "reporting",
    label: "Reporting & Stakeholder Comms",
    icon: "file-text",
    prompts: [
      {
        id: "16-1",
        title: "Executive Performance Test Summary",
        body: `I ran a load test with the following results:
[Paste JMeter summary or k6 output]

Write an executive summary (non-technical) covering:
- Test objective in one sentence
- Overall result: PASS / FAIL / CONDITIONAL PASS
- Key findings (3 bullet points max)
- Business impact of any failures found
- Recommendation: Go / No-Go for production
- Next steps

Keep it under 300 words. Avoid technical jargon. Use plain business language.`,
      },
      {
        id: "16-2",
        title: "Technical Performance Test Report",
        body: `Generate a detailed technical performance test report based on:

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
- Appendix: Raw data reference`,
      },
      {
        id: "16-3",
        title: "Performance Regression Comparison",
        body: `Compare these two performance test runs to identify regression:

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
- Output as a comparison table with delta % and RAG status (Red/Amber/Green)`,
      },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting & Debugging",
    icon: "alert-triangle",
    prompts: [
      {
        id: "17-1",
        title: "JMeter Out of Memory / Heap Issues",
        body: `My JMeter test is crashing with OutOfMemoryError or GC overhead limit exceeded after [N] minutes with [N] VUs.

Diagnose and fix:
- Root causes of JMeter memory issues
- JVM heap tuning: how to set -Xms and -Xmx in jmeter.bat / jmeter.sh
- Listener optimization: which listeners to disable in CI/CD runs
- Results file size management
- How to profile JMeter's own memory with JVisualVM or JMC
- Best configuration for long-running soak tests
- Recommended JVM flags for JMeter at [N] VUs`,
      },
      {
        id: "17-2",
        title: "Debug JMeter HTTP Request",
        body: `My JMeter HTTP request is failing with:
[Paste error: Connection refused / 401 / 403 / 500 / SSL handshake / etc.]

Help me debug step by step:
- What each error code means in the context of load testing
- How to enable JMeter HTTP debug logging
- How to compare JMeter request with working browser/Postman request
- SSL/TLS configuration issues and fixes
- Proxy recording debugging tips
- HTTP request header differences to check
- How to use View Results Tree effectively without memory issues`,
      },
      {
        id: "17-3",
        title: "High Error Rate Root Cause Analysis",
        body: `My load test has a [N]% error rate. The errors are:
[Paste error messages from JMeter or describe them]

Provide a systematic RCA:
1. Classify errors: client-side vs server-side vs network
2. Common causes for each error type
3. How to extract error details from JMeter (Response Assertion failure, HTTP status, body)
4. How to correlate errors with server logs
5. How to implement JMeter Error Handling (Error Controller, If Controller)
6. When to fail fast vs continue on error
7. Fix recommendations for the specific errors observed`,
      },
    ],
  },
  {
    id: "production-testing",
    label: "Production Testing & Observability",
    icon: "eye",
    prompts: [
      {
        id: "18-1",
        title: "Synthetic Monitoring Design",
        body: `Design a synthetic monitoring strategy for production using [k6 Cloud / Grafana Synthetic / Catchpoint]:

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
- Runbook: What to do when synthetic alert fires`,
      },
      {
        id: "18-2",
        title: "Shadow Load Testing",
        body: `Explain how to implement shadow load testing for my production system:

Architecture: [describe: microservices / monolith / API gateway / etc.]

Cover:
- What shadow load testing is and when to use it
- Tools: Shadowtraffic, Goreplay, Istio traffic mirroring, AWS Global Accelerator
- How to mirror [N]% of production traffic to staging
- Ensuring shadow requests don't pollute production data
- Monitoring shadow environment during traffic replay
- Interpreting results when shadow latency differs from production
- Risk management and rollback strategy`,
      },
    ],
  },
  {
    id: "groovy-scripting",
    label: "Groovy & JSR223 Scripting",
    icon: "cpu",
    prompts: [
      {
        id: "19-1",
        title: "Groovy Pre/Post Processor Templates",
        body: `Generate Groovy scripts for the following JSR223 use cases in JMeter:

1. PreProcessor: Generate HMAC-SHA256 signature for request signing
   - Inputs: request body (\${requestBody}), secret key (\${apiSecret})
   - Output: JMeter variable \${signature}

2. PostProcessor: Parse nested JSON and extract a list of IDs into separate variables
   - Input: Response body with array $.items[*].id
   - Output: \${itemId_1}, \${itemId_2}, ... \${itemId_N} and \${itemId_count}

3. PreProcessor: Log request details to a custom file per test run
   - Include: timestamp, thread name, sampler label, iteration count

Include error handling and use JMeter API (vars, props, log) correctly.`,
      },
      {
        id: "19-2",
        title: "Groovy HTTP Client in JSR223",
        body: `I need to make a secondary HTTP call inside a JSR223 Groovy script (not as a separate JMeter sampler) to:
- GET [URL] to fetch a lookup value
- Store the result in a JMeter variable \${lookupValue}

Generate the Groovy script using:
1. JMeter's built-in HTTP client (org.apache.http)
2. Java's HttpURLConnection
3. Groovy's built-in HTTP support

Show all three approaches and recommend the best one for JMeter performance.`,
      },
    ],
  },
  {
    id: "best-practices",
    label: "Performance Engineering Best Practices",
    icon: "award",
    prompts: [
      {
        id: "20-1",
        title: "Performance Testing Checklist",
        body: `Generate a comprehensive performance testing checklist covering all phases:

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

Output as a detailed, actionable Markdown checklist.`,
      },
      {
        id: "20-2",
        title: "Common Performance Anti-Patterns",
        body: `List the top 20 performance testing anti-patterns that engineers make with JMeter / k6, covering:

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
- Reporting mistakes`,
      },
      {
        id: "20-3",
        title: "Performance Testing Maturity Assessment",
        body: `Assess the performance testing maturity of my team based on the following current state:
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
- Quick wins achievable in the first 30 days`,
      },
      {
        id: "20-4",
        title: "Performance KPIs Dashboard Design",
        body: `Design a performance engineering KPIs dashboard for a development team.

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
- Alert conditions for each KPI`,
      },
    ],
  },
  {
    id: "kafka-testing",
    label: "Kafka Performance Testing",
    icon: "layers",
    prompts: [
      {
        id: "21-1",
        title: "Kafka Producer Load Test with JMeter",
        body: `Generate a JMeter test plan to load test a Kafka producer using the JMeter Kafka plugin (pepper-box or kafka-jmeter):

Kafka cluster: [broker1:9092, broker2:9092]
Topic: [topic-name]
Number of partitions: [N]
Replication factor: [N]
Message format: [JSON / Avro / Plain text]
Sample message payload:
[Paste message JSON or schema]

Requirements:
- Thread Group: [N] producer threads, [N]s ramp-up
- Target throughput: [N] messages/second
- Message size: ~[N] KB
- Parameterize key fields using CSV or Groovy
- Acks configuration: [0 / 1 / all]
- Compression: [none / gzip / snappy / lz4]
- Linger.ms and batch.size tuning

Provide:
- Full JMX XML with Kafka Sampler configuration
- Producer properties (key.serializer, value.serializer, acks, retries)
- How to measure producer latency and throughput in JMeter
- Expected Kafka broker metrics to monitor during test`,
      },
      {
        id: "21-2",
        title: "Kafka Consumer Performance Testing",
        body: `Design a performance test for a Kafka consumer group:

Topic: [topic-name]
Consumer group: [group-id]
Expected message rate: [N] messages/second
Consumer lag SLA: < [N] messages behind

Provide:
- How to measure consumer lag using kafka-consumer-groups.sh
- k6 or JMeter approach to simulate concurrent consumers
- Kafka consumer benchmark using kafka-consumer-perf-test.sh
- Key consumer config tuning: fetch.min.bytes, max.poll.records, max.poll.interval.ms, session.timeout.ms
- Grafana / Prometheus metrics to monitor: kafka_consumer_group_lag, kafka_consumer_records_consumed_rate
- Alert thresholds for consumer lag during a load test
- How to identify a slow consumer vs a slow broker`,
      },
      {
        id: "21-3",
        title: "End-to-End Kafka Pipeline Latency Test",
        body: `I need to measure end-to-end latency through a Kafka pipeline:

Flow: [Producer] → [Topic A] → [Consumer/Service] → [Topic B] → [Final Consumer]

Target: p99 end-to-end latency < [N]ms at [N] messages/second

Design a test that:
- Embeds a timestamp in message payload at producer side
- Measures time-to-consume at the final consumer
- Calculates end-to-end latency per message
- Accounts for clock skew between producer and consumer machines
- Plots latency distribution under increasing message rates

Provide:
- JMeter / k6 producer script with timestamp injection
- Consumer-side measurement approach (custom consumer app or kafka-streams)
- Latency calculation formula and methodology
- Results analysis: how to identify which stage in the pipeline adds the most latency
- Common Kafka latency bottlenecks: network, disk I/O, GC, partition imbalance`,
      },
      {
        id: "21-4",
        title: "Kafka Broker Capacity Planning",
        body: `Help me capacity plan a Kafka cluster for the following workload:

Peak message rate: [N] messages/second
Average message size: [N] KB
Retention period: [N] hours / days
Replication factor: [N]
Number of consumer groups: [N]
Expected peak network throughput: [N] MB/s

Calculate:
- Required disk space per broker (with formula)
- Required network bandwidth per broker
- Recommended number of partitions per topic
- Recommended number of brokers
- JVM heap size for each broker
- os.page.cache sizing recommendation
- Key broker configs to tune: log.retention.bytes, num.io.threads, num.network.threads, socket.send.buffer.bytes
- How to run kafka-producer-perf-test.sh and kafka-consumer-perf-test.sh to validate capacity`,
      },
      {
        id: "21-5",
        title: "Kafka Schema Registry & Avro Performance",
        body: `My Kafka producers use Avro serialization with Confluent Schema Registry.

Schema Registry URL: [http://schema-registry:8081]
Avro schema:
[Paste Avro schema JSON]

Performance concerns:
- Schema Registry lookup adds latency on first message per schema
- Serialization/deserialization CPU cost at high throughput

Provide:
- JMeter Kafka sampler configuration for Avro messages
- How to pre-warm schema registry cache before test
- Benchmark: Avro vs JSON serialization throughput comparison approach
- Schema Registry performance tuning: caching, replication
- Monitoring Schema Registry health during load test
- Common Avro serialization errors under load and fixes`,
      },
      {
        id: "21-6",
        title: "Kafka Performance Troubleshooting",
        body: `My Kafka load test shows the following symptoms:
[Choose / describe: high producer latency / consumer lag growing / under-replicated partitions / broker CPU spike / OOM on broker / network saturation]

Walk me through diagnosis:
1. Kafka broker JMX metrics to inspect: UnderReplicatedPartitions, RequestHandlerAvgIdlePercent, NetworkProcessorAvgIdlePercent
2. OS-level checks: disk throughput (iostat), network (sar, netstat), file descriptor limits
3. JVM GC analysis for Kafka brokers: which GC, heap sizing, GC pause impact on produce latency
4. Producer-side investigation: record-error-rate, record-retry-rate, batch-size-avg
5. Consumer-side investigation: fetch-latency-avg, records-lag-max
6. Partition rebalancing impact during test
7. Step-by-step fix recommendations with specific config property changes`,
      },
    ],
  },
  {
    id: "browser-testing",
    label: "Browser-Based Performance Testing",
    icon: "monitor",
    prompts: [
      {
        id: "22-1",
        title: "k6 Browser Test Script",
        body: `Generate a k6 browser-based performance test using the k6 browser module for:

URL: [https://example.com]
User journey:
1. Navigate to homepage
2. Click [element / button]
3. Fill form: username=[parameterized], password=[parameterized]
4. Submit and wait for [selector] to appear
5. Navigate to [next page]
6. Assert page title contains [text]

Requirements:
- Use k6/browser API (chromium)
- Measure: page load time, LCP, FCP, CLS, TBT, TTFB
- Collect Web Vitals using page.evaluate()
- Run [N] browser VUs in parallel
- Thresholds on browser_http_req_duration and web_vital_lcp
- Screenshot on failure
- headless: true for CI runs

Output a complete k6 browser script.`,
      },
      {
        id: "22-2",
        title: "Playwright + k6 Hybrid Testing",
        body: `I want to combine Playwright for script recording with k6 browser for execution:

Steps:
1. Use Playwright codegen to record the user journey on [URL]
2. Convert the Playwright script to k6 browser API
3. Add performance assertions
4. Run as part of CI pipeline

Provide:
- Playwright codegen command for [URL]
- Mapping table: Playwright API → k6 browser API equivalent
  (page.goto, page.click, page.fill, page.waitForSelector, page.screenshot, expect)
- k6 browser script converted from a typical Playwright output
- Key differences to watch for during conversion
- How to run k6 browser tests in headed vs headless mode
- Docker command to run k6 browser in CI without display`,
      },
      {
        id: "22-3",
        title: "Core Web Vitals Performance Baseline",
        body: `I need to establish a Core Web Vitals performance baseline for [URL / web application] under load.

Metrics to capture:
- LCP (Largest Contentful Paint) — target < 2.5s
- FCP (First Contentful Paint) — target < 1.8s
- CLS (Cumulative Layout Shift) — target < 0.1
- TBT (Total Blocking Time) — target < 200ms
- TTFB (Time to First Byte) — target < 800ms
- INP (Interaction to Next Paint) — target < 200ms

Generate:
- k6 browser script that measures all Web Vitals via page.evaluate() and PerformanceObserver
- How to export these metrics to InfluxDB / Grafana
- Thresholds configuration in k6 options
- How to distinguish server-side latency (TTFB) from client-side rendering issues (LCP, TBT)
- Recommendations for testing across simulated network conditions (3G, 4G, broadband)`,
      },
      {
        id: "22-4",
        title: "JMeter HTML Page Performance Testing",
        body: `I need to measure full page load performance (including assets) with JMeter, not just API response times.

Target URL: [https://example.com]

Configure JMeter to:
- Download embedded resources (CSS, JS, images) per request
- Measure total page load time including all assets
- Identify the slowest resources (images, JS bundles, fonts)
- Simulate browser caching behavior (Cache Manager)
- Simulate concurrent users loading the same page
- Simulate parallel connections per user (concurrent pool size)

Provide:
- HTTP Request Defaults with "Retrieve All Embedded Resources" enabled
- Parallel Downloads configuration (concurrent pool: 6)
- HTTP Cache Manager for cache simulation
- DNS Cache Manager
- How to extract and report per-resource response times
- Comparison: JMeter page load metrics vs Real User Monitoring (RUM) data`,
      },
      {
        id: "22-5",
        title: "Browser vs Protocol Load Test Strategy",
        body: `I need to decide between browser-based (k6 browser / Playwright) and protocol-level (JMeter / k6 HTTP) load testing for [application name].

Application characteristics:
- [SPA / Server-rendered / Hybrid]
- Heavy JavaScript rendering: [yes / no]
- Critical user journeys depend on JS interactions: [yes / no]
- Scale needed: [N] concurrent users
- Infrastructure budget for test runners: [limited / sufficient]

Provide:
- Comparison matrix: browser-based vs protocol-based for this scenario
- Resource cost: how many browser VUs vs protocol VUs can 1 machine handle
- Hybrid strategy: when to use each in the same test suite
- Tool recommendation with justification
- Architecture diagram of the hybrid test approach
- Cost estimate for cloud execution (k6 Grafana Cloud browser VUs)`,
      },
      {
        id: "22-6",
        title: "Real User Monitoring vs Synthetic Testing Gap Analysis",
        body: `I have the following Real User Monitoring (RUM) data from [Datadog RUM / New Relic Browser / Dynatrace RUM]:
[Paste RUM metrics: LCP, TTFB, error rates by page]

And the following synthetic test results from [k6 browser / JMeter]:
[Paste synthetic test results]

Analyze the gaps:
- Where do synthetic results match RUM? Where do they diverge significantly?
- What factors explain the divergence? (geographic distribution, device types, network conditions, caching, bot detection)
- How to make synthetic tests more representative of real users
- Should we adjust our SLAs based on RUM data?
- How to use RUM data to design more realistic load test scenarios`,
      },
    ],
  },
  {
    id: "chaos-engineering",
    label: "Chaos Engineering & Resilience",
    icon: "zap-off",
    prompts: [
      {
        id: "23-1",
        title: "Chaos Engineering Strategy for Performance Teams",
        body: `Design a chaos engineering strategy that integrates with performance testing for [application name]:

Architecture: [describe: microservices on Kubernetes / monolith on VMs / serverless / etc.]
Current observability: [Datadog / Grafana / Prometheus / etc.]
Current testing maturity: [level 1–4]

Provide:
- What chaos engineering adds beyond traditional load testing
- Steady-state hypothesis definition for [application]
- Chaos experiment catalog relevant to performance (latency injection, resource exhaustion, dependency failure)
- How to run chaos experiments in parallel with JMeter / k6 load tests
- Tooling options: Chaos Monkey, LitmusChaos, Gremlin, AWS Fault Injection Simulator, Chaos Mesh
- Entry criteria before running chaos experiments (must have load baseline first)
- Blast radius control strategy
- Rollback procedures`,
      },
      {
        id: "23-2",
        title: "Network Latency Injection During Load Test",
        body: `I want to inject artificial network latency to test my application's resilience:

Target: inject [N]ms latency on calls from [Service A] to [Service B / database / external API]
Load: simultaneous JMeter / k6 load test at [N] VUs
Hypothesis: application degrades gracefully — p99 increases but error rate stays < [N]%

Provide:
- tc (traffic control) commands to inject latency on Linux
- Toxiproxy setup as a chaos proxy between services
- AWS Fault Injection Simulator equivalent
- Istio fault injection YAML (if service mesh is available)
- LitmusChaos NetworkChaos experiment YAML for Kubernetes
- How to measure the impact: JMeter response time delta vs injected latency
- Expected cascading effects: timeout propagation, retry storms, circuit breaker activation
- How to restore normal network conditions after the test`,
      },
      {
        id: "23-3",
        title: "CPU & Memory Resource Exhaustion Testing",
        body: `I want to test how my application behaves when server resources are constrained during load:

Experiments to run:
1. CPU stress: 80% CPU utilization on app server while running load test
2. Memory pressure: consume 70% of available memory
3. Disk I/O saturation: heavy disk write contention

For each experiment:
- Tool to inject the stress: stress-ng, sysbench, dd, or container resource limits
- Exact commands / Kubernetes resource quota YAML
- JMeter / k6 load profile to run simultaneously
- Metrics to watch: CPU steal time, memory swap usage, disk await, app response time
- Expected degradation patterns and how to identify graceful vs catastrophic failure
- Recovery test: remove stress and measure time-to-recover to baseline performance
- Go / No-Go criteria for production readiness`,
      },
      {
        id: "23-4",
        title: "Dependency Failure Resilience Test",
        body: `My application depends on the following external services:
1. [Service A] — [REST API / gRPC / message queue]
2. [Service B] — [Database / Cache / S3]
3. [Service C] — [Third-party API]

Design chaos experiments to test failure resilience under load:

For each dependency:
- Failure mode: full outage / slow response ([N]ms latency) / partial failure ([N]% error rate)
- Chaos tool: Toxiproxy / Istio fault injection / Gremlin / AWS FIS
- Simultaneous JMeter load: [N] VUs
- Steady-state hypothesis: what should the app do? (return cached data / circuit open / graceful error / queue messages)
- How to implement with Toxiproxy (provide config JSON)
- How to implement with Istio VirtualService fault injection (provide YAML)
- Success criteria: error handling works, no cascading failures, circuit breaker trips correctly
- Metrics to validate: circuit breaker open rate, fallback invocation count, user-facing error rate`,
      },
      {
        id: "23-5",
        title: "Kubernetes Pod Chaos Under Load",
        body: `I am running my application on Kubernetes and want to validate resilience with pod-level chaos while running a load test.

Experiments:
1. Pod Kill: randomly kill [N]% of pods during peak load
2. Pod CPU Hog: inject CPU pressure inside the pod
3. Node Drain: drain a worker node while load test is running
4. Network Partition: block traffic between pods in different namespaces

Tool: [LitmusChaos / Chaos Mesh / AWS FIS / kubectl manual]

For each experiment provide:
- LitmusChaos ChaosEngine YAML or Chaos Mesh YAML
- kubectl equivalent for manual reproduction
- JMeter / k6 load profile to run simultaneously
- Kubernetes metrics to watch: pod restarts, HPA scaling events, pending pods, node pressure
- Expected k8s recovery behavior: ReplicaSet respawn, rolling update, HPA scale-out
- How to verify zero-downtime deployment under chaos
- Pass criteria: application recovers within [N] seconds, error rate spike < [N]%`,
      },
      {
        id: "23-6",
        title: "Circuit Breaker Validation Test",
        body: `My application uses a circuit breaker pattern (Resilience4j / Hystrix / Istio) for [service name].

Circuit breaker config:
- Failure rate threshold: [N]%
- Slow call threshold: [N]ms
- Wait duration in open state: [N]s
- Half-open permitted calls: [N]

Design a performance test that validates circuit breaker behavior:
- Phase 1: Normal load — circuit CLOSED, validate baseline
- Phase 2: Inject failures — circuit should OPEN when threshold is breached
- Phase 3: Wait duration — validate requests are rejected fast (fail-fast behavior)
- Phase 4: Half-open — validate recovery probe calls
- Phase 5: Recovery — circuit CLOSED again, validate normal behavior resumes

Provide:
- JMeter test plan structure for each phase (Thread Groups / Controllers)
- How to trigger failures: Toxiproxy / Istio fault injection / mock server returning 500
- Groovy / JSR223 script to log circuit state transitions during test
- Metrics: circuit breaker state (Micrometer / Prometheus), fallback invocation rate, error rate per phase
- Pass/fail criteria per phase`,
      },
      {
        id: "23-7",
        title: "Chaos Experiment Report Template",
        body: `Generate a chaos experiment report template for the following completed experiment:

Experiment name: [e.g., Network latency injection on payment-service]
Date: [date]
Team: [team name]
System under test: [service / component]
Load during experiment: [N VUs / N RPS]

Report structure:
1. Executive Summary (3 sentences max)
2. Steady-State Hypothesis (before and after verification)
3. Experiment Setup (blast radius, tooling, duration)
4. Results (metrics before / during / after with tables)
5. Observations (what happened, what didn't)
6. Weaknesses Discovered
7. Recommendations (circuit breakers, timeouts, retries, fallbacks)
8. Action Items with owners and due dates
9. Lessons Learned

Format as a professional Markdown document ready for Confluence.`,
      },
      {
        id: "23-8",
        title: "Retry Storm Detection and Prevention",
        body: `During chaos testing with [N]% packet loss injected, my load test showed:
- Response times spiked from [N]ms to [N]ms
- Throughput dropped but then spiked back above baseline
- Error rate increased and then decreased but with high latency

This looks like a retry storm. Diagnose and fix:

1. What is a retry storm and why does it amplify failures?
2. How to detect retry storm in JMeter results (throughput spike pattern, response time bimodal)
3. How to detect it from APM metrics (request rate spike on server side vs client side)
4. Retry configuration best practices: max retries, exponential backoff, jitter
5. Resilience4j Retry configuration with exponential backoff + jitter (Java code snippet)
6. k6 retry simulation for testing backoff behavior
7. How to distinguish retry traffic from legitimate traffic in JMeter results
8. Circuit breaker + retry interaction: which should trigger first?`,
      },
    ],
  },
];
