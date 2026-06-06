export interface ChallengeDay {
  day: number;
  phase: string;
  title: string;
  emoji: string;
  objective: string;
  scenario: string;
  metrics: string[];
  aha: string;
  reflection: string;
  deliverable: string;
  solution: string;
}

export const challengeMeta = {
  heading: "Performance Testing",
  highlight: "30-Day Challenge",
  description:
    "You cannot train performance testing out of a slide deck. Concepts like connection pool exhaustion and garbage collection pressure only click when you watch the metrics degrade in front of you during an actual load run.",
  subdescription:
    "This challenge is tool-agnostic. Use JMeter, k6, Gatling, Locust, or LoadRunner. Run one scenario per day. Each builds on the last. Watch your tool output and correlate it with infrastructure metrics. By Day 30, you will have a reusable test library and real debugging instincts.",
  disclaimer:
    "Never run load tests against infrastructure you do not own or have explicit written permission to test. Always use a dedicated test environment. Unauthorized load injection can cause outages, trigger legal liability, and violate terms of service.",
  phases: [
    { key: "foundations", label: "Foundations", range: "Days 1–6", emoji: "🏗️", color: "#a78bfa" },
    { key: "patterns", label: "Load Patterns", range: "Days 7–12", emoji: "📈", color: "#a78bfa" },
    { key: "realism", label: "Correlation & Realism", range: "Days 13–18", emoji: "🔗", color: "#a78bfa" },
    { key: "bottlenecks", label: "Bottleneck Hunting", range: "Days 19–24", emoji: "🔍", color: "#a78bfa" },
    { key: "advanced", label: "Advanced & Capstone", range: "Days 25–30", emoji: "🚀", color: "#a78bfa" },
  ],
};

export const challengeDays: ChallengeDay[] = [
  // ── Phase 1 · Foundations ──
  {
    day: 1,
    phase: "foundations",
    title: "Hello, Load",
    emoji: "👋",
    objective: "Install your chosen tool, record or script a single GET request, and run it once.",
    scenario:
      "Pick any public endpoint or your own dev server. Send one request with timing enabled. Look at the response time. You are already performance testing.",
    metrics: ["response time (ms)", "status code"],
    aha: "A test is just a measured request  -  you can already see latency.",
    reflection: "What surprised you about the response time of a single request?",
    deliverable: "A saved script for one GET endpoint.",
    solution: "In JMeter: add a Thread Group (1 user, 1 loop), add an HTTP Request sampler pointing at your endpoint, add a View Results Tree listener, and press Run. In k6: write `export default function() { http.get('https://your-endpoint'); }` and run `k6 run script.js`. The response time in the results table is your first latency measurement.",
  },
  {
    day: 2,
    phase: "foundations",
    title: "Your First Baseline",
    emoji: "📏",
    objective: "Run a single-user loop for 5 minutes and capture min / avg / p90 / p95 response times.",
    scenario:
      "Run the same script for 5 minutes with 1 user looping continuously. Export or screenshot your results summary.",
    metrics: ["p50", "p90", "p95", "error rate", "throughput"],
    aha: "The 'average' lies; p95 tells the real story.",
    reflection: "How much higher is p95 than the average? What does that variance mean?",
    deliverable: "A baseline results summary you can compare against later.",
    solution: "Set the Thread Group to 1 user, loop count = forever, duration = 5 minutes. Add a Summary Report or Aggregate Report listener. After the run, screenshot or export the table showing min, average, p90, p95, and max columns. The gap between average and p95 is your variance fingerprint for this endpoint at zero concurrency.",
  },
  {
    day: 3,
    phase: "foundations",
    title: "Think Time & Pacing",
    emoji: "⏱️",
    objective: "Add realistic think time between steps and compare throughput with and without it.",
    scenario:
      "Run your script with no think time. Note throughput. Add 3 seconds of think time. Re-run. The difference is what real users actually generate.",
    metrics: ["throughput (req/s)", "active threads"],
    aha: "Removing think time inflates load that no real user generates.",
    reflection: "What would happen if someone showed 'thousands of concurrent users' but with zero think time?",
    deliverable: "A script with configurable think time.",
    solution: "In JMeter: add a Gaussian Random Timer (deviation 1000ms, constant delay 2000ms) inside your Thread Group after each sampler. Run once without it, note throughput. Add it and re-run. In k6: add `sleep(3)` at the end of your default function. A realistic think time of 2-5 seconds typically reduces throughput by 60-80% compared to a zero-think-time run - that reduction reflects reality, not a regression.",
  },
  {
    day: 4,
    phase: "foundations",
    title: "Assertions = Truth",
    emoji: "✅",
    objective: "Add response, status, and body assertions. Intentionally break one to watch it fail.",
    scenario:
      "Assert HTTP 200. Assert a specific string exists in the response body. Then change the expected string to something wrong and re-run. The test should fail loudly.",
    metrics: ["assertion failures", "error %"],
    aha: "A 'passing' load test with no assertions can be silently serving error pages.",
    reflection: "Have you ever trusted green results that were actually hiding failures?",
    deliverable: "A script with meaningful assertions.",
    solution: "In JMeter: add a Response Assertion to your sampler. Check 'Response Code' equals 200, and 'Response Body' contains a known string (e.g. a JSON key or page title). To see it fail: change the expected string to 'INTENTIONAL_FAIL' and re-run. The error % will jump to 100% and View Results Tree will show red. In k6: use `check(res, { 'status 200': (r) => r.status === 200, 'body has key': (r) => r.body.includes('expected') })` and add a threshold to fail the test.",
  },
  {
    day: 5,
    phase: "foundations",
    title: "Reading the Numbers",
    emoji: "📊",
    objective: "Build a results summary (table + simple graph) and interpret what the numbers mean.",
    scenario:
      "Run a 10-minute test at moderate load. Study the results table: response times, throughput, error count, standard deviation. Sketch a simple graph or use built-in reporting.",
    metrics: ["p50 / p90 / p99", "standard deviation", "throughput"],
    aha: "Throughput and response time move in opposite directions as load grows.",
    reflection: "Which metric would you show to a developer to explain that the system is struggling?",
    deliverable: "A one-page summary of your test results with annotations.",
    solution: "Run 10 minutes at 10-20 users. In JMeter's Aggregate Report: note that p90 and p99 diverge from the mean as load grows - this is the 'long tail'. Standard deviation above 20% of the mean signals instability. Throughput (req/s) is your server's sustained capacity at that concurrency. The single metric to show a developer is p95: it represents the worst experience 1 in 20 real users encounters.",
  },
  {
    day: 6,
    phase: "foundations",
    title: "Parameterize One Thing",
    emoji: "🔄",
    objective: "Drive one input from a CSV or data file so each iteration uses different data.",
    scenario:
      "Create a CSV with 10 different search terms or IDs. Configure your script to read a new value on each iteration. Run and verify unique data is used.",
    metrics: ["unique data coverage", "cache hit rate"],
    aha: "Static data hides caching effects and inflates performance.",
    reflection: "What systems in your stack might cache aggressively and hide real bottlenecks?",
    deliverable: "A parameterized script with an external data file.",
    solution: "Create data.csv with a 'searchTerm' column and 10+ unique values. In JMeter: add a CSV Data Set Config element pointing to the file, set variable name to 'searchTerm', recycle = true. Reference it in your HTTP Request as a parameter value: `${searchTerm}`. In k6: use `const data = new SharedArray('terms', () => JSON.parse(open('./data.json')))` and index with `data[exec.scenario.iterationInTest % data.length]`. Verify uniqueness by checking the access logs on your server.",
  },

  // ── Phase 2 · Load Patterns ──
  {
    day: 7,
    phase: "patterns",
    title: "Ramp-Up",
    emoji: "🏔️",
    objective: "Ramp users from 1 to 50 over time and watch where response time begins to bend.",
    scenario:
      "Design a ramp-up test: start at 1 user, add 1 user every 10 seconds until 50. Watch response time vs active users. There is a 'knee'  -  find it.",
    metrics: ["response time vs users", "throughput"],
    aha: "There's a knee where latency climbs faster than load  -  find it.",
    reflection: "Where did the curve bend? What was happening on the server at that point?",
    deliverable: "A ramp-up script with annotated results showing the inflection point.",
    solution: "In JMeter: set Thread Group to 50 users, ramp-up period = 500 seconds (1 user added per 10s), loop = forever, duration = 600s. Use a Response Time Graph listener to watch the curve in real time. The 'knee' appears where the slope steepens - typically when threads waiting for a response exceed the server's worker pool size. Note the user count at that inflection point and correlate with server CPU or thread pool metrics.",
  },
  {
    day: 8,
    phase: "patterns",
    title: "Steady State",
    emoji: "⚖️",
    objective: "Hold a fixed concurrency for 15 minutes and check for stability drift.",
    scenario:
      "Run 20 users for a full 15 minutes at constant load. Watch response time at minute 1, 5, 10, and 15.",
    metrics: ["response time variance", "error rate over time"],
    aha: "A flat load can still drift  -  watch for slow creep.",
    reflection: "Did the response time stay flat, or did it creep upward? What could cause creep?",
    deliverable: "A steady-state script with a 15-minute duration.",
    solution: "Set Thread Group to 20 users, ramp-up = 30s, loop = forever, scheduler duration = 900s (15 min). Add a Response Time Graph with a granularity of 60000ms (1 min) to see per-minute averages. Upward creep is the signature of a slow memory leak, connection pool not returning connections, or a cache filling up. Flat with occasional spikes points to GC pauses. Flat throughout = healthy baseline.",
  },
  {
    day: 9,
    phase: "patterns",
    title: "Spike Test",
    emoji: "⚡",
    objective: "Jump from idle to high load instantly, then drop. Watch errors and recovery.",
    scenario:
      "Configure your tool to instantly jump to 100 users, hold for 2 minutes, then drop to zero. Observe error rate during the spike and how quickly the system recovers.",
    metrics: ["error spikes", "recovery time"],
    aha: "Systems fail differently on sudden load than on gradual load.",
    reflection: "How did the system behave during the spike vs the cooldown? Was recovery graceful?",
    deliverable: "A spike test script with before/during/after metrics.",
    solution: "Use three Thread Groups in sequence: (1) 5 users for 2 min as baseline, (2) 100 users, ramp-up 0s, duration 2 min for the spike, (3) 0 users (or 1) for 2 min cooldown. In k6 use stages: `{ duration: '2m', target: 5 }, { duration: '0s', target: 100 }, { duration: '2m', target: 100 }, { duration: '0s', target: 0 }, { duration: '2m', target: 0 }`. Watch for 503s or timeouts during the instant jump - these reveal the absence of request queuing or circuit breaking.",
  },
  {
    day: 10,
    phase: "patterns",
    title: "Soak / Endurance",
    emoji: "🛁",
    objective: "Run a moderate load for 1–2 hours to surface leaks and exhaustion.",
    scenario:
      "Run 15 users for 2 hours. Check memory, threads, response time, and error trends at regular intervals.",
    metrics: ["memory trend", "response time drift", "GC frequency"],
    aha: "Leaks and resource exhaustion only appear over time.",
    reflection: "What slowly degrading metric did you notice that a short test would have missed?",
    deliverable: "A long-duration soak test script.",
    solution: "Set Thread Group to 15 users, ramp-up = 60s, scheduler duration = 7200s (2 hrs). Capture a server-side memory snapshot at t=0, t=30min, t=60min, t=120min. In JMeter use the Backend Listener with InfluxDB + Grafana for live trending, or simply export Aggregate Report CSVs at each checkpoint. A healthy system holds flat memory; a leaking one climbs steadily. GC frequency increase with no corresponding memory drop is the classic JVM leak signature.",
  },
  {
    day: 11,
    phase: "patterns",
    title: "Step Load",
    emoji: "🪜",
    objective: "Increase load in fixed steps and record throughput at each plateau.",
    scenario:
      "Run 10 users for 5 min. Then 20 for 5 min. Then 30, 40, 50. Record throughput at each step. Plot throughput vs users.",
    metrics: ["throughput plateau", "saturation point"],
    aha: "Throughput stops rising while users keep increasing = saturation.",
    reflection: "At what user count did throughput stop scaling? What resource hit its limit first?",
    deliverable: "A step-load script with per-step throughput comparison.",
    solution: "Use JMeter's Ultimate Thread Group plugin or five sequential Thread Groups each with a different user count and 5-minute duration. Record throughput from the Aggregate Report at each step. In k6: use stages with `{ duration: '5m', target: 10 }` increments. Plot users vs throughput in a spreadsheet. The step where throughput stops increasing (or drops) while users rise is saturation. Little's Law: throughput = concurrency / response time - when response time climbs faster than concurrency, throughput plateaus.",
  },
  {
    day: 12,
    phase: "patterns",
    title: "Concurrency vs Throughput",
    emoji: "🔀",
    objective: "Compare '50 concurrent users' against a fixed requests-per-second target.",
    scenario:
      "Run scenario A: 50 concurrent users with think time. Run scenario B: same total load but modeled as a fixed arrival rate (e.g. 10 req/s). Compare results.",
    metrics: ["arrival rate", "in-flight requests"],
    aha: "Concurrency and throughput are not the same lever  -  know which you're controlling.",
    reflection: "Which model better represents your real production traffic pattern?",
    deliverable: "Two scripts: one concurrency-based, one arrival-rate-based.",
    solution: "Script A: 50 Thread Group users with 3s think time - this is concurrency-based, throughput is emergent. Script B: use JMeter's Constant Throughput Timer set to 600 requests/min (10/s), or k6's `scenarios: { constant_arrival_rate: { rate: 10, timeUnit: '1s', preAllocatedVUs: 20 } }`. Script A models 'users browsing'; Script B models 'transactions per second from a queue'. Most real-world web systems are better modeled with arrival-rate - it catches cases where the system can't keep up with demand regardless of user count.",
  },

  // ── Phase 3 · Correlation & Realism ──
  {
    day: 13,
    phase: "realism",
    title: "Dynamic Correlation",
    emoji: "🎣",
    objective: "Extract a dynamic token or ID from a response and reuse it downstream.",
    scenario:
      "Send a request that returns a token, session ID, or CSRF token. Extract it with a regular expression or JSON extractor. Use it in the next request.",
    metrics: ["correlation failures", "error %"],
    aha: "Hardcoded session values break the moment the server rotates them.",
    reflection: "What happens if you replay a recorded script without extracting dynamic values?",
    deliverable: "A script that extracts and reuses a dynamic value across requests.",
    solution: "In JMeter: add a Regular Expression Extractor (or JSON Extractor) post-processor to the first request. Set the reference name to 'token', the expression to match the dynamic value (e.g. `\"token\":\"(.+?)\"` for a JSON response). Reference it downstream as `${token}`. To confirm correlation works: add a Debug Sampler after the extractor and inspect the variable value in View Results Tree. If the variable shows 'FAILED' the regex did not match - adjust the expression.",
  },
  {
    day: 14,
    phase: "realism",
    title: "Login & Sessions",
    emoji: "🔐",
    objective: "Script an authenticated flow with per-user sessions.",
    scenario:
      "Create a test with 5 unique users. Each logs in, performs an action, and logs out. Ensure sessions are isolated per virtual user.",
    metrics: ["auth failures", "session reuse errors"],
    aha: "Shared sessions create false concurrency and skew results.",
    reflection: "If all users shared one session, what performance illusion would that create?",
    deliverable: "An authenticated multi-user script with isolated sessions.",
    solution: "In JMeter: add an HTTP Cookie Manager and HTTP Header Manager at Thread Group level (not test plan level - this scopes them per virtual user). Use a CSV Data Set Config with username/password columns, 'Sharing mode = Current thread' to ensure each VU reads its own row. Each VU logs in, gets its own session cookie, performs actions, then logs out. In k6: create a cookieJar per VU with `http.cookieJar()` and pass it in request params. Verify isolation by asserting each response contains the correct username.",
  },
  {
    day: 15,
    phase: "realism",
    title: "Realistic Data Feeds",
    emoji: "🗃️",
    objective: "Feed large and varied datasets; avoid data starvation.",
    scenario:
      "Create a data file with 1000+ rows of realistic values. Configure your script to cycle through them. Ensure no row is reused within a single test run.",
    metrics: ["data exhaustion", "cache hit rate"],
    aha: "Reusing the same 10 rows turns a load test into a cache test.",
    reflection: "How many unique data combinations does your production traffic actually use?",
    deliverable: "A script with a large parameterized data set.",
    solution: "Generate a realistic dataset: export production search terms, user IDs, or product SKUs from your analytics tool (anonymized). In JMeter: CSV Data Set Config with 'Recycle on EOF = false' and 'Stop thread on EOF = true' if you want each row used exactly once, or 'Recycle = true' for continuous cycling. Set 'Sharing mode = All threads' only if the data is read-only. For 1000+ rows the file must be on the load injector's disk - not a network path. In k6 use SharedArray to load the file once across all VUs.",
  },
  {
    day: 16,
    phase: "realism",
    title: "Pacing & Arrival Rate",
    emoji: "🎯",
    objective: "Model a target requests-per-minute using pacing or arrival-rate mode.",
    scenario:
      "Set a target of 600 requests per minute (10/sec). Use your tool's pacing or arrival-rate feature. Run and compare achieved rate vs target rate.",
    metrics: ["arrival rate vs achieved rate"],
    aha: "The tool can't hit a rate the system can't sustain  -  gaps reveal limits.",
    reflection: "When the achieved rate fell below target, what was the bottleneck?",
    deliverable: "An arrival-rate or paced script with a target throughput.",
    solution: "In JMeter: add a Constant Throughput Timer set to 600 samples/min, mode 'All active threads (shared)'. The timer will add delay to keep the aggregate rate at target. If the system can't sustain the rate, the timer has no effect and throughput lags - this gap is the capacity ceiling. In k6: use `scenarios.constant_arrival_rate` with `rate: 10, timeUnit: '1s'`. Watch 'dropped_iterations' in the k6 output - any non-zero value means the system could not fulfill the target rate.",
  },
  {
    day: 17,
    phase: "realism",
    title: "Workload Mix",
    emoji: "🥘",
    objective: "Combine multiple user journeys at realistic ratios (e.g., 70/20/10).",
    scenario:
      "Create three transaction groups: browse (70%), search (20%), checkout (10%). Run them concurrently in one scenario. Watch per-transaction metrics.",
    metrics: ["per-transaction metrics", "mix ratio"],
    aha: "Blended load exposes contention that single flows never trigger.",
    reflection: "Which transaction type suffered most under the blended load? Why?",
    deliverable: "A mixed-workload script with weighted transaction groups.",
    solution: "In JMeter: create three Thread Groups with user counts proportional to your mix (e.g. 70, 20, 10 users if running 100 total). Wrap each flow in a Transaction Controller so the Aggregate Report shows per-journey metrics. Alternatively use a single Thread Group with a Random Controller or Throughput Controller to route iterations by ratio. In k6: define separate scenarios with `weight` in the executor config, or use `exec` to call different functions. Check per-transaction p95 in the results - write-heavy transactions (checkout) almost always suffer first under blended load.",
  },
  {
    day: 18,
    phase: "realism",
    title: "Distributed / Multi-Region Load",
    emoji: "🌍",
    objective: "Generate load from multiple injectors or locations.",
    scenario:
      "If your tool supports distributed mode, configure two or more injectors. If not, run two independent instances from different machines and aggregate results.",
    metrics: ["injector CPU", "network latency", "aggregated throughput"],
    aha: "One load generator becomes the bottleneck before the app does.",
    reflection: "Was the app the bottleneck, or was one injector maxed out?",
    deliverable: "A distributed load test setup or a plan for it.",
    solution: "In JMeter distributed mode: start jmeter-server on each remote injector machine, then run the controller with `-R injector1,injector2 -n -t test.jmx -l results.jtl`. Each injector runs all threads in the plan - so set each Thread Group to total_users / num_injectors. Monitor injector CPU with top or Task Manager; if any injector exceeds 80% CPU it is the bottleneck, not the app. In k6 Cloud or k6 OSS with multiple instances: aggregate results with a shared output target (InfluxDB or Prometheus remote write).",
  },

  // ── Phase 4 · Bottleneck Hunting ──
  {
    day: 19,
    phase: "bottlenecks",
    title: "Connection Pool Exhaustion",
    emoji: "🪣",
    objective: "Drive enough concurrency to starve the app or DB connection pool.",
    scenario:
      "Increase load until response time spikes while CPU remains low. Check connection pool metrics. You will see requests queuing for a free connection.",
    metrics: ["pool active/idle/wait", "queue time"],
    aha: "Requests queue for connections  -  latency climbs while CPU stays low.",
    reflection: "Did you find a case where high latency did not mean high CPU? What was the real cause?",
    deliverable: "A script tuned to expose connection pool limits.",
    solution: "Ramp users past the pool size (e.g. if the DB pool is 20, ramp to 30-40 users). The signature: response time climbs sharply while CPU stays flat - threads are idle, waiting for a free connection. In JMeter check the Active Threads chart vs Response Time chart - they diverge at the pool limit. To confirm: look at your DB or app server connection pool metrics (HikariCP exposes 'pool.wait' via JMX/Prometheus). Fix by increasing pool size or reducing per-request hold time, not by adding more app servers.",
  },
  {
    day: 20,
    phase: "bottlenecks",
    title: "Garbage Collection Pressure",
    emoji: "♻️",
    objective: "Sustain load until GC pauses appear in the infrastructure metrics.",
    scenario:
      "Run a heap-heavy workload for 20+ minutes. Watch GC logs or APM metrics. Look for stop-the-world pauses that correlate with response time spikes.",
    metrics: ["GC pause time / frequency", "heap usage"],
    aha: "Periodic latency spikes line up exactly with GC pauses.",
    reflection: "Could you see the GC spikes in your tool output before checking the infra metrics?",
    deliverable: "A script that triggers observable GC pressure.",
    solution: "Run a heap-intensive workload for 20+ minutes. Enable GC logging on the JVM: `-Xlog:gc*:file=gc.log:time,uptime:filecount=5,filesize=20m`. Use GCViewer or GCEasy to parse the log post-test. In JMeter's Response Time Graph, GC pauses appear as periodic vertical spikes with fast return to baseline - this is stop-the-world. Sustained GC that never drops back suggests the heap is undersized. Correlate the spike timestamps in gc.log against your JMeter results timestamps to confirm the relationship.",
  },
  {
    day: 21,
    phase: "bottlenecks",
    title: "Thread / CPU Saturation",
    emoji: "🔥",
    objective: "Push CPU toward 100% and observe system behavior beyond saturation.",
    scenario:
      "Ramp load until CPU hits ~90-95%. Hold it there for a few minutes. Watch what happens to throughput and response time as you try to add even more load.",
    metrics: ["CPU %", "run queue", "context switches"],
    aha: "Past saturation, more load only makes everything slower.",
    reflection: "At what CPU threshold did adding more users make things worse, not better?",
    deliverable: "A saturation-finding script with CPU correlation notes.",
    solution: "Run a step-load test (every 5 min add 10 users) while watching `top` or a Prometheus CPU dashboard. When CPU crosses ~90%, note the user count. Keep adding users: throughput will plateau then fall as the OS spends more time on context switching than actual work. The run queue (`vmstat` column 'r' on Linux) exceeding logical CPU count is the technical definition of saturation. This user count minus 10-20% is your safe operating ceiling for a CPU-bound workload.",
  },
  {
    day: 22,
    phase: "bottlenecks",
    title: "Slow Queries & DB Locks",
    emoji: "🐌",
    objective: "Load a DB-heavy endpoint and find the slow query causing throughput collapse.",
    scenario:
      "Run a read-heavy or write-heavy transaction against a database. Use slow query logs, APM tracing, or DB monitoring to identify the worst offender.",
    metrics: ["query time", "locks / waits", "connections"],
    aha: "One unindexed query can cap the throughput of the whole system.",
    reflection: "Was the bottleneck the query itself, the connection pool, or the lock contention?",
    deliverable: "A script that reproduces a DB bottleneck, plus the identified query.",
    solution: "Run a DB-heavy endpoint under load. Enable slow query log: in MySQL `SET GLOBAL slow_query_log = 'ON'; SET GLOBAL long_query_time = 0.5;`. In PostgreSQL use `log_min_duration_statement = 500`. After the test, run `EXPLAIN ANALYZE` on the worst offenders. A full table scan (Seq Scan with high row count in Postgres, or 'type: ALL' in MySQL EXPLAIN) without an index is the most common culprit. Add the missing index and retest - throughput typically doubles or more for read-heavy workloads.",
  },
  {
    day: 23,
    phase: "bottlenecks",
    title: "Caching Effects",
    emoji: "🧊",
    objective: "Test cold vs warm cache; then bust the cache mid-test.",
    scenario:
      "First run: hit an endpoint repeatedly  -  notice response time drops (warm cache). Second run: send unique requests each time  -  cold cache. Third: evict cache mid-test and watch the cliff.",
    metrics: ["cache hit ratio", "backend load"],
    aha: "Performance is a cliff  -  it falls off the moment the cache misses.",
    reflection: "How much faster was the warm cache? What percentage of your production traffic is cacheable?",
    deliverable: "A cache-effect comparison script with cold/warm/bust variants.",
    solution: "Run 1: Flush the cache (Redis FLUSHDB or app restart), then run 100 unique-URL requests. Capture p95. Run 2: Repeat the exact same 100 URLs in the same order. Capture p95 - this is the warm-cache baseline, often 5-50x faster. Run 3: Mid-test, flush the cache with a script or CLI command. Watch the Response Time Graph for the cliff. To instrument cache hits: add a custom response header in your app (e.g. X-Cache: HIT/MISS) and use a JMeter Response Assertion or extractor to count the ratio.",
  },
  {
    day: 24,
    phase: "bottlenecks",
    title: "Network & Latency",
    emoji: "🌐",
    objective: "Add latency or bandwidth limits and observe the impact.",
    scenario:
      "Use network throttling (tool-level or OS-level) to add 100ms or 500ms latency. Observe how throughput drops and timeout rates change.",
    metrics: ["round-trip time", "throughput", "timeouts"],
    aha: "Latency, not bandwidth, usually dominates user-perceived speed.",
    reflection: "At what added latency did your throughput fall by 50%?",
    deliverable: "A latency-sensitivity test with different RTT configurations.",
    solution: "On Linux use `tc` to add artificial latency: `sudo tc qdisc add dev eth0 root netem delay 100ms`. On Windows use Clumsy or Windows Traffic Shaping. Run the same script with 0ms, 100ms, 500ms added RTT. Throughput drops approximately as: T = concurrency / (base_latency + added_latency). Remove latency with `sudo tc qdisc del dev eth0 root`. The key insight: adding 100ms to a 50ms response doubles end-to-end time and halves throughput for a fixed-concurrency model - but for arrival-rate models, the system simply can't keep up and starts queuing.",
  },

  // ── Phase 5 · Advanced & Capstone ──
  {
    day: 25,
    phase: "advanced",
    title: "Performance in CI/CD",
    emoji: "🔄",
    objective: "Wire a smoke load test into a pipeline with pass/fail thresholds.",
    scenario:
      "Add a lightweight load test (e.g., 10 users, 2 minutes) to your CI/CD pipeline. Set an assertion that p95 response time must stay under a threshold. Make it gate your deployment.",
    metrics: ["threshold breaches", "trend vs baseline"],
    aha: "Small tests run often catch regressions cheaply.",
    reflection: "What threshold would you set so the gate is meaningful but not noisy?",
    deliverable: "A CI/CD pipeline config or script with a performance gate.",
    solution: "In k6: add thresholds to the script - `thresholds: { 'http_req_duration{p95}': ['p(95)<500'], 'http_req_failed': ['rate<0.01'] }`. k6 exits with code 99 on threshold breach, which fails a CI step. In JMeter: run headless with `-n -t test.jmx -l results.jtl` and use the JMeter CI plugin or a post-step script that parses the JTL and exits non-zero if p95 exceeds your SLO. Set your threshold at 120% of your Day 2 baseline p95 - tight enough to catch regressions, loose enough to avoid false positives from environment noise.",
  },
  {
    day: 26,
    phase: "advanced",
    title: "Observability Correlation",
    emoji: "👁️",
    objective: "Run a test while watching APM / metrics dashboards side-by-side.",
    scenario:
      "Open your APM or infrastructure dashboard in one window. Run your load test in another. When latency spikes in the tool, find the matching spike in CPU, DB, or GC metrics.",
    metrics: ["correlated traces", "error spans", "resource graphs"],
    aha: "The tool says 'slow'; observability says 'why.'",
    reflection: "Which infrastructure metric most clearly explained your slowest transaction?",
    deliverable: "A documented test run with correlated tool + APM screenshots.",
    solution: "Open Datadog, Grafana, New Relic, or your APM of choice in one window. Start the load test. When JMeter or k6 shows a latency spike, immediately look for the matching spike in: (1) CPU - compute-bound, (2) DB query time - database-bound, (3) GC pause duration - memory-bound, (4) downstream service latency - dependency-bound. The most useful APM feature for this is a distributed trace waterfall: it shows exactly which span is consuming the most wall-clock time within a single slow request.",
  },
  {
    day: 27,
    phase: "advanced",
    title: "Chaos Under Load",
    emoji: "🌪️",
    objective: "Kill a node or inject a failure mid-test; observe resilience.",
    scenario:
      "Run a steady load. While the test is active, restart a service, kill a pod, or block a downstream dependency. Watch error rate, failover time, and recovery speed.",
    metrics: ["error rate", "failover time", "recovery"],
    aha: "Resilience is only real when proven under load.",
    reflection: "How long did the system take to recover? Were errors graceful or catastrophic?",
    deliverable: "A chaos + load combined scenario with resilience notes.",
    solution: "Run a steady-state load at 60% of capacity. In a second terminal: kill a pod (`kubectl delete pod <name>`), block a port (`sudo iptables -A INPUT -p tcp --dport 8080 -j DROP`), or pause a container (`docker pause <id>`). Watch the JMeter error rate spike. A well-architected system shows: a brief error spike (< 5s), automatic failover or retry, then error rate returns to near-zero. Catastrophic failure is when the error rate stays high until manual intervention. Restore with `kubectl rollout restart` or `docker unpause`. Document the mean time to recover (MTTR).",
  },
  {
    day: 28,
    phase: "advanced",
    title: "Capacity & Scalability Modeling",
    emoji: "📐",
    objective: "Use your test results to estimate maximum safe capacity and headroom.",
    scenario:
      "From your step-load data (Day 11) and saturation point (Day 21), model how many users the system can safely handle. Apply Little's Law if appropriate.",
    metrics: ["max throughput", "headroom %", "Little's Law"],
    aha: "Data, not guesses, sizes infrastructure.",
    reflection: "If production traffic doubled tomorrow, what would fail first?",
    deliverable: "A capacity model / spreadsheet based on your test data.",
    solution: "From your Day 11 step-load data you have throughput at each user count. From Day 21 you have the saturation point. Apply Little's Law: N = X * R, where N = concurrent users, X = throughput (req/s), R = mean response time (s). Solve for X_max at your observed saturation. Headroom % = (X_max - X_current) / X_max. If current production throughput is 80% of X_max, you have 20% headroom. The resource that hits its limit first (CPU, DB connections, memory) at X_max is your first failure point under a traffic doubling.",
  },
  {
    day: 29,
    phase: "advanced",
    title: "Reporting & Storytelling",
    emoji: "📖",
    objective: "Turn one test into a clear stakeholder report with a recommendation.",
    scenario:
      "Pick your most interesting test from Days 19–24. Write a one-page report: what you tested, what you found, the bottleneck, the impact, and a recommended fix. No jargon.",
    metrics: ["SLA / SLO adherence", "key percentiles"],
    aha: "A result no one understands changes nothing.",
    reflection: "What is the one sentence you would say to a product manager about this bottleneck?",
    deliverable: "A stakeholder-ready performance report.",
    solution: "Structure your one-pager: (1) What was tested - endpoint, duration, user count, tool. (2) What was found - the single worst metric with a before/after comparison. (3) The bottleneck - one sentence, no jargon (e.g. 'The checkout page slows to 4 seconds at 200 users because the database query is missing an index'). (4) The impact - at current growth, this limit will be hit in N weeks based on traffic trend. (5) The recommendation - one concrete action with an estimated effort. Attach a screenshot of the relevant graph. The report should be readable in under 2 minutes.",
  },
  {
    day: 30,
    phase: "advanced",
    title: "Capstone: Debug a Failing System",
    emoji: "🎓",
    objective: "Given a deliberately degraded scenario, run load, find the bottleneck, and propose a fix.",
    scenario:
      "You are handed a slow or erroring system. You don't know why. Run your full toolkit: baseline, ramp-up, correlation, infra metrics, APM. Find the root cause. Write it up.",
    metrics: ["end-to-end correlation across all metrics"],
    aha: "Everything clicks  -  tool output + infra metrics = root cause.",
    reflection: "Which Day's skill was the most useful in finding the root cause?",
    deliverable: "A complete debug write-up: scenario, findings, root cause, recommendation, script library.",
    solution: "The diagnostic sequence: (1) Run a 1-user baseline to confirm the endpoint is functional (Day 2). (2) Ramp to find the knee (Day 7). (3) Check if it is CPU, memory, DB, or I/O bound using the bottleneck toolkit from Days 19-24. (4) Correlate with APM traces (Day 26). (5) Document the root cause with evidence: a slow query log line, a GC log excerpt, or a connection pool wait histogram. (6) Propose a fix, estimate its impact on the saturation point, and commit the test library so the next engineer has a starting point. This sequence is repeatable on any system.",
  },
];
