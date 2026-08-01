export interface CalcField {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
}

export interface Calculator {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  /** One-line result sentence, {result} is replaced with the computed value. */
  resultTemplate: string;
  formula: string;
  formulaTerms: { term: string; meaning: string }[];
  explainer: string[];
  fields: CalcField[];
  faqs: { question: string; answer: string }[];
}

export const calculators: Calculator[] = [
  {
    id: "virtual-users",
    name: "Virtual Users Calculator (Little's Law)",
    emoji: "👥",
    tagline: "Calculate the number of virtual users needed to hit your target load.",
    resultTemplate: "{result} virtual users required",
    formula: "N = Z × (R + T)",
    formulaTerms: [
      { term: "N", meaning: "Number of virtual users" },
      { term: "Z", meaning: "Transactions per second (target throughput)" },
      { term: "R", meaning: "Average response time in seconds" },
      { term: "T", meaning: "Think time in seconds" },
    ],
    explainer: [
      "Little's Law is the fundamental queueing relationship used to size a load test: the number of concurrent users (N) equals throughput (Z) multiplied by the total time each user spends in the system — response time (R) plus think time (T).",
      "If your target is 10 transactions per second, each transaction takes 2 seconds, and users think for 3 seconds between actions, you need 10 × (2 + 3) = 50 virtual users.",
      "Undersizing VU count is the most common reason a load test fails to reach its target throughput: the system is never given enough concurrent work to saturate it.",
    ],
    fields: [
      { id: "tps", label: "Transactions Per Second:", value: 10, min: 1, max: 10000, step: 1 },
      { id: "response", label: "Average Response Time (seconds):", value: 2, min: 0.1, max: 60, step: 0.1 },
      { id: "think", label: "Think Time (seconds):", value: 3, min: 0, max: 300, step: 0.1 },
    ],
    faqs: [
      {
        question: "What is Little's Law in performance testing?",
        answer: "Little's Law states that the number of concurrent users N equals throughput Z (transactions per second) multiplied by the time each user spends in the system: N = Z × (R + T), where R is average response time and T is think time. It is the standard way to size virtual user counts for load tests in JMeter, k6, Gatling, or LoadRunner.",
      },
      {
        question: "How many virtual users do I need for my load test?",
        answer: "Multiply your target transactions per second by the sum of average response time and think time (both in seconds). For example, 20 TPS with 1.5s response time and 4s think time requires 20 × 5.5 = 110 virtual users.",
      },
      {
        question: "Why does my load test not reach target throughput?",
        answer: "The most common cause is too few virtual users for the response time and think time you configured. Recalculate N with Little's Law and check that your load generators are not CPU- or memory-saturated, which artificially slows VUs.",
      },
    ],
  },
  {
    id: "pacing",
    name: "Pacing Calculator",
    emoji: "⌛",
    tagline: "Calculate the delay between iterations to hit your transactions-per-hour target.",
    resultTemplate: "{result} seconds pacing required",
    formula: "Pacing = 3600 × VU ÷ TPH",
    formulaTerms: [
      { term: "TPH", meaning: "Transactions per hour (business target)" },
      { term: "VU", meaning: "Number of virtual users" },
      { term: "Pacing", meaning: "Seconds each VU waits between iterations" },
    ],
    explainer: [
      "Pacing is the controlled delay between the end of one iteration and the start of the next. Unlike think time (which simulates a user pausing inside a transaction), pacing regulates how often each virtual user starts a new transaction.",
      "Given a business target in transactions per hour and a fixed number of virtual users, pacing spreads the work evenly: each VU must complete 3600 ÷ (TPH ÷ VU) seconds per iteration cycle.",
      "In JMeter, implement pacing with a Constant Throughput Timer or a Flow Control Action; in k6 use sleep() at the end of the iteration; in LoadRunner it is a runtime setting.",
    ],
    fields: [
      { id: "tph", label: "Transactions Per Hour:", value: 36000, min: 60, max: 1000000, step: 100 },
      { id: "users", label: "Number of Virtual Users:", value: 100, min: 1, max: 10000, step: 1 },
    ],
    faqs: [
      {
        question: "What is pacing in performance testing?",
        answer: "Pacing is the fixed delay between the end of one test iteration and the start of the next for each virtual user. It controls how frequently transactions are initiated, letting you hit a precise transactions-per-hour target without changing the number of virtual users.",
      },
      {
        question: "What is the difference between think time and pacing?",
        answer: "Think time simulates a user pausing between individual actions inside one transaction. Pacing is the delay between complete iterations of the whole transaction. Both shape load, but pacing directly sets your transactions-per-hour rate.",
      },
      {
        question: "How do I calculate pacing for a load test?",
        answer: "Pacing (in seconds) = 3600 × virtual users ÷ transactions per hour. For 36,000 transactions per hour with 100 virtual users, each VU must cycle every 3600 × 100 ÷ 36000 = 10 seconds.",
      },
    ],
  },
  {
    id: "test-data",
    name: "Test Data Calculator",
    emoji: "🧪",
    tagline: "Estimate how many unique data records your test needs.",
    resultTemplate: "{result} test data records required",
    formula: "Records = VU × (Test Duration ÷ Iteration Duration)",
    formulaTerms: [
      { term: "VU", meaning: "Number of virtual users" },
      { term: "Iteration Duration", meaning: "Minutes one VU takes per iteration" },
      { term: "Test Duration", meaning: "Total test length in hours" },
    ],
    explainer: [
      "Every iteration that consumes a unique row (a fresh user account, an unused order ID, a one-time token) needs its own record. Running out of data mid-test causes cascading failures that look like server errors but are actually script errors.",
      "Total records = virtual users × iterations per VU, where iterations per VU = test duration ÷ iteration duration. Always add 10–20% headroom for failed iterations that still consume data.",
      "In JMeter, set CSV Data Set Config to 'Recycle on EOF = false' and 'Stop thread on EOF = true' so exhaustion is loud, not silent.",
    ],
    fields: [
      { id: "users", label: "Number of Virtual Users:", value: 10, min: 1, max: 10000, step: 1 },
      { id: "iteration", label: "Each VUser Iteration Duration (minutes):", value: 2, min: 0.1, max: 60, step: 0.1 },
      { id: "duration", label: "Test Duration (hours):", value: 3, min: 0.1, max: 24, step: 0.1 },
    ],
    faqs: [
      {
        question: "How much test data do I need for a performance test?",
        answer: "Multiply virtual users by iterations per user: VU × (test duration ÷ iteration duration). A 3-hour test with 10 VUs running 2-minute iterations needs 10 × 90 = 900 unique records, plus 10–20% headroom for retries.",
      },
      {
        question: "What happens when a JMeter test runs out of CSV data?",
        answer: "If 'Recycle on EOF' is true, values repeat silently and may cause duplicate-key errors or unrealistic cache hits. If 'Stop thread on EOF' is true, threads exit and your load quietly drops. Size your data file up front with this calculator and fail loudly on exhaustion.",
      },
      {
        question: "Should each virtual user use unique test data?",
        answer: "Use unique data when the system writes records, enforces uniqueness constraints, or caches reads. For read-only scenarios against cached content, shared data is fine and more realistic.",
      },
    ],
  },
  {
    id: "load-generator",
    name: "Load Generator Calculator",
    emoji: "🔋",
    tagline: "Work out how many virtual users each load generator can safely run.",
    resultTemplate: "{result} virtual users per load generator",
    formula: "VUs per LG = (Total RAM − OS RAM − First VU) ÷ Additional VU + 1",
    formulaTerms: [
      { term: "Total RAM", meaning: "Memory available on the load generator (MB)" },
      { term: "OS RAM", meaning: "Memory reserved for the operating system (MB)" },
      { term: "First VU", meaning: "Memory footprint of the first virtual user (MB)" },
      { term: "Additional VU", meaning: "Memory each extra virtual user adds (MB)" },
    ],
    explainer: [
      "A load generator that runs out of memory or CPU produces slow, unreliable VUs — and your test measures the generator's limits instead of the system's. Sizing generators correctly is a prerequisite for trustworthy results.",
      "The first virtual user pays the one-time cost (JVM/runtime, loaded resources); each additional VU adds a smaller incremental footprint. Subtract OS reserve and the first VU, then divide the remainder by the per-VU increment.",
      "Always validate with a calibration run: watch generator CPU below ~70% and memory headroom at peak load. Divide your total VU count by this per-generator capacity to get the number of generators required.",
    ],
    fields: [
      { id: "ram", label: "Total LG RAM (MB):", value: 4096, min: 1024, max: 262144, step: 1024 },
      { id: "first", label: "First VUser Memory (MB):", value: 200, min: 50, max: 1024, step: 10 },
      { id: "additional", label: "Each Additional VUser Memory (MB):", value: 100, min: 10, max: 1024, step: 10 },
      { id: "os", label: "OS RAM (typically 700-1024 MB):", value: 1024, min: 512, max: 4096, step: 128 },
    ],
    faqs: [
      {
        question: "How many virtual users can one load generator run?",
        answer: "It depends on available memory and per-VU footprint: VUs = (Total RAM − OS reserve − first VU memory) ÷ per-additional-VU memory + 1. A 4 GB generator with 1 GB OS reserve, 200 MB first VU and 100 MB per extra VU runs about 29 VUs. Always confirm with a calibration run keeping CPU under ~70%.",
      },
      {
        question: "How do I know if my load generator is overloaded?",
        answer: "Watch for generator CPU above 70–80%, memory swapping, or VU response times climbing while server-side metrics stay flat. Overloaded generators distort results — add generators or reduce VUs per generator.",
      },
      {
        question: "Do I need multiple load generators for JMeter?",
        answer: "When your target VU count exceeds one machine's safe capacity, use JMeter distributed mode (jmeter-server on each injector, -r flag on the controller) or a cloud runner. Deploy the same JMeter version, plugins, and data files on every node.",
      },
    ],
  },
  {
    id: "bandwidth",
    name: "Network Bandwidth Calculator",
    emoji: "🌐",
    tagline: "Estimate the network throughput your test will consume.",
    resultTemplate: "{result} Mbps required",
    formula: "Mbps = VU × TPS × (Request + Response KB) × 8 ÷ 1024 × (1 + Overhead)",
    formulaTerms: [
      { term: "VU", meaning: "Concurrent virtual users" },
      { term: "TPS", meaning: "Transactions per second per user" },
      { term: "Request/Response KB", meaning: "Average payload sizes" },
      { term: "Overhead", meaning: "Protocol overhead (TCP/TLS headers, retransmits)" },
    ],
    explainer: [
      "Load tests can saturate the network link of the load generator or the corporate VPN long before the target system feels any pressure. Estimating bandwidth up front prevents a whole class of misleading results.",
      "Total throughput = concurrent users × transactions per second × average bytes per transaction (request + response), converted to megabits and inflated by protocol overhead (TCP/TLS headers, retransmissions — typically 15–25%).",
      "If the result approaches your link capacity, distribute the load across multiple generators in different networks, or move generation into the same data center or cloud region as the target.",
    ],
    fields: [
      { id: "users", label: "Concurrent Users:", value: 100, min: 1, max: 10000, step: 1 },
      { id: "tps", label: "Transactions Per Second (per user):", value: 2, min: 0.1, max: 100, step: 0.1 },
      { id: "request", label: "Average Request Size (KB):", value: 5, min: 0.1, max: 1024, step: 0.1 },
      { id: "response", label: "Average Response Size (KB):", value: 50, min: 0.1, max: 10240, step: 0.1 },
      { id: "overhead", label: "Protocol Overhead (%):", value: 20, min: 0, max: 50, step: 1 },
    ],
    faqs: [
      {
        question: "How much bandwidth does a load test need?",
        answer: "Bandwidth (Mbps) = concurrent users × TPS per user × (request + response size in KB) × 8 ÷ 1024 × (1 + protocol overhead). 100 users at 2 TPS each moving 55 KB per transaction needs roughly 103 Mbps with 20% overhead.",
      },
      {
        question: "Why do my load test results look worse when running from my laptop?",
        answer: "Local links, VPNs, and Wi-Fi add latency and cap throughput. If the generator-side network saturates, response times inflate regardless of server health. Estimate bandwidth first and generate load from a data center or cloud region near the target.",
      },
      {
        question: "What protocol overhead should I assume for HTTP tests?",
        answer: "Plan for 15–25% overhead for TCP/TLS headers, connection setup, and retransmissions. Use the higher end for TLS-heavy APIs with small payloads, the lower end for large responses on kept-alive connections.",
      },
    ],
  },
];
