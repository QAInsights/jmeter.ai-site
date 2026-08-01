// Shared presentation constants for DetailPanel sub-components.
// Kept separate so both the header and the feature/section panels can reuse them.

export const productEmoji: Record<string, string> = {
  "feather-wand": "🪄",
  "super-key": "⌨️",
  "readme-config": "📝",
  "jmeter-studio": "🎨",
  "perftractor": "🧮",
  "academy": "🎓",
  "prism": "🚀",
  "prompts": "📚",
  "perf-skills": "⚡",
  "docs": "📖",
  "plugins": "🧩",
  "blog": "📝",
};

export const disclaimerText: Record<string, string> = {
  "super-key":
    "This is a browser-based demo simulating Super Key's command palette and test execution. The actual JMeter plugin features, performance, and behavior may vary. For full functionality, install the plugin in Apache JMeter.",
  "prism":
    "This is a browser-based demo simulating Prism's multi-tab interface. The actual JMeter plugin features, tab management, and behavior may vary. For full functionality, install the plugin in Apache JMeter.",
  "feather-wand":
    "This demo uses pre-scripted AI responses to simulate Feather Wand's capabilities. The actual plugin uses real LLM integration (OpenAI, Anthropic, etc.) with full context awareness and advanced code generation. Responses and behavior may vary in the production version.",
  "readme-config":
    "This is a browser-based simulation of the README Config Element. The split-pane Markdown editor and preview rendering are for demonstration purposes only. For the full experience including JMeter deep-links and GFM support, download and install the actual plugin.",
};

// Shared Tailwind class for all calculator number inputs
export const calcInputClass =
  "w-full bg-jm-bg border border-jm-border rounded px-3 py-2 text-sm text-jm-text focus:outline-none focus:border-jm-border-light";
