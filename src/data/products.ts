export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  oss: boolean | string;
  pro: boolean | string;
}

export interface InstallStep {
  title: string;
  code?: string;
  description: string;
}

export interface Badge {
  label: string;
  emoji: string;
  variant: "filled" | "outlined";
  color?: string;
}

export interface InfoCard {
  label: string;
  value: string;
  color: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface AgentToolGroup {
  label: string;
  emoji: string;
  tools: { name: string; description: string }[];
}

export interface AgentExample {
  request: string;
  chain: string[];
}

export interface AgentMode {
  providersNote: string;
  enableProperty: string;
  toolGroups: AgentToolGroup[];
  examples: AgentExample[];
  safety: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  subtitlePrefix: string;
  subtitleHighlight: string;
  subtitleSuffix: string;
  description: string;
  icon: string;
  color: string;
  colorRgb: string;
  github: string;
  externalUrl?: string;
  badges: Badge[];
  infoCards: InfoCard[];
  featuresHeadingPrefix: string;
  featuresHeadingHighlight: string;
  featuresSubtitle: string;
  features: Feature[];
  ossVsPro: ComparisonRow[];
  installation: InstallStep[];
  faqs?: Faq[];
  agentMode?: AgentMode;
  socials: Social[];
  treeNodes: TreeNode[];
}

export interface TreeNode {
  id: string;
  label: string;
  icon: string;
  href?: string;
  children?: TreeNode[];
}

export const defaultSocials: Social[] = [
  { name: "GitHub", url: "https://github.com/QAInsights", icon: "github" },
  { name: "X", url: "https://x.com/QAInsights", icon: "twitter" },
  { name: "YouTube", url: "https://youtube.com/@QAInsights", icon: "youtube" },
  { name: "LinkedIn", url: "https://linkedin.com/in/naveenkumarn", icon: "linkedin" },
  { name: "Website", url: "https://qainsights.com", icon: "globe" },
];

const defaultTreeNodes: TreeNode[] = [
  { id: "overview", label: "Overview", icon: "info" },
  { id: "features", label: "Features", icon: "zap" },
  { id: "oss-pro", label: "OSS vs Pro", icon: "git-compare" },
  { id: "installation", label: "Installation", icon: "download" },
  { id: "github", label: "GitHub", icon: "github" },
  { id: "connect", label: "Connect", icon: "users" },
];

export const products: Product[] = [
  {
    id: "feather-wand",
    name: "Feather Wand",
    tagline: "The AI Agent for Apache JMeter",
    subtitlePrefix: "AI-POWERED INTELLIGENCE FOR",
    subtitleHighlight: "APACHE JMETER",
    subtitleSuffix: "",
    description:
      "Feather Wand is a full AI agent living inside Apache JMeter. Chat with 8 LLM providers (Claude, OpenAI, Gemini, DeepSeek, Ollama, Grok, Meta Muse, and AWS Bedrock) or enable Agent Mode and let the AI autonomously edit your test plan through 18 tools: adding elements, setting properties, running tests, and auto-correlating dynamic values. Embedded AI CLI terminals, context-aware @commands, streaming responses, and smart JSR223 refactoring included.",
    icon: "wand-sparkles",
    color: "#00e5ff",
    colorRgb: "0, 229, 255",
    github: "https://github.com/QAInsights/jmeter-ai",
    treeNodes: [
      { id: "overview", label: "Overview", icon: "info" },
      { id: "features", label: "Features", icon: "zap" },
      { id: "installation", label: "Installation", icon: "download" },
      { id: "github", label: "GitHub", icon: "github" },
      { id: "connect", label: "Connect", icon: "users" },
    ],
    badges: [
      { label: "AI AGENT", emoji: "🤖", variant: "filled", color: "#d500f9" },
      { label: "OPEN SOURCE · MIT", emoji: "⚡", variant: "outlined", color: "#00e676" },
      { label: "AGENT MODE", emoji: "🛠️", variant: "outlined", color: "#00e5ff" },
      { label: "8 LLM PROVIDERS", emoji: "🔗", variant: "outlined", color: "#ffab00" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "AI Agent / LLM Integration", color: "#00e5ff" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "MIT (Open Source)", color: "#00e676" },
      { label: "LLM PROVIDERS", value: "8 Providers", color: "#ffab00" },
    ],
    featuresHeadingPrefix: "Intelligent",
    featuresHeadingHighlight: "Features",
    featuresSubtitle: "Supercharge your performance testing workflow with AI-driven capabilities built natively into JMeter.",
    features: [
      {
        title: "Agent Mode",
        description: "AI autonomously edits your live test plan through 18 tools: add elements, set properties, run tests, and auto-correlate dynamic values, with confirmation-gated destructive ops. Claude & OpenAI.",
        icon: "🤖",
      },
      {
        title: "8 LLM Providers",
        description: "Chat with Claude, OpenAI, Gemini, DeepSeek, Ollama, Grok (xAI), Meta Muse, or AWS Bedrock, all inside JMeter. Model filtering hides non-chat models automatically.",
        icon: "🔗",
      },
      {
        title: "Context-Aware @Commands",
        description: "@this, @testplan, @optimize, @lint, @wrap, @code, and @usage. Each command understands your currently selected test-plan element.",
        icon: "🔍",
      },
      {
        title: "Multi-AI CLI Terminal",
        description: "Run Claude Code, OpenAI Codex, OpenCode, Antigravity, or Grok CLI in an embedded terminal that receives your open .jmx as context.",
        icon: "💻",
      },
      {
        title: "Real-Time Streaming",
        description: "Watch AI responses appear token-by-token, with a Stop button to cancel mid-response and an optional chime when the AI finishes.",
        icon: "⚡",
      },
      {
        title: "Smart JSR223 Refactoring",
        description: "Right-click in the JSR223 editor to refactor, format, or inject functions with AI: no copy-pasting between tools.",
        icon: "🧹",
      },
      {
        title: "Local & Private via Ollama",
        description: "Run fully offline with local models: zero data egress, with configurable thinking modes for reasoning models like DeepSeek R1.",
        icon: "🔒",
      },
      {
        title: "Companion Pets",
        description: "A draggable animated pet (quill, glim, peacock, or monkey) that cheers on clean runs and frowns on sampler failures.",
        icon: "🐾",
      },
    ],
    ossVsPro: [],
    installation: [
      {
        title: "Plugins Manager (Recommended)",
        description: "Open JMeter → Options → Plugins Manager → Available Plugins, search \"Feather Wand\", select it, then Apply Changes and Restart JMeter.",
        code: "# JMeter → Options → Plugins Manager → Available Plugins\n# Search \"Feather Wand\" → Apply Changes and Restart JMeter",
      },
      {
        title: "Plugins Manager CLI",
        description: "Headless and CI-friendly install via the Plugins Manager command line.",
        code: "# Linux / macOS\nbin/PluginsManagerCMD.sh install feather-wand-jmeter-ai-agent\n\n# Windows\nbin\\PluginsManagerCMD.bat install feather-wand-jmeter-ai-agent",
      },
      {
        title: "Manual JAR Install",
        description: "Download the latest JAR from the GitHub Releases page, copy it into JMeter's lib/ext directory, and restart JMeter. Feather Wand appears in the Tools menu.",
        code: "# Download from https://github.com/QAInsights/jmeter-ai/releases\ncp <downloaded>.jar $JMETER_HOME/lib/ext/\n$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Configure AI Provider",
        description: "Copy jmeter-ai-sample.properties into your user.properties, add your API key (e.g. anthropic.api.key or openai.api.key), and restart JMeter. Then pick a model from the dropdown.",
      },
    ],
    faqs: [
      {
        question: "What is Feather Wand for Apache JMeter?",
        answer: "Feather Wand is a free, MIT-licensed AI agent plugin for JMeter. Chat with 8 LLM providers to generate and analyze test plans, use context-aware @commands, run embedded AI CLI terminals (Claude Code, OpenAI Codex, and more), or enable Agent Mode to let the AI autonomously edit your test plan.",
      },
      {
        question: "Which LLMs does Feather Wand support?",
        answer: "Eight providers: Anthropic Claude, OpenAI, Google Gemini, DeepSeek, Ollama (local), Grok (xAI), Meta Muse, and AWS Bedrock via the Converse API. Non-chat models are filtered out of the dropdown automatically.",
      },
      {
        question: "What is Agent Mode in Feather Wand?",
        answer: "Agent Mode lets the AI autonomously edit your live test plan through 18 tools: reading the tree, adding and configuring elements, running tests, and detecting plus applying correlations. Destructive operations ask for confirmation, iterations are bounded, and everything is undoable with Ctrl+Z. It works with Claude and OpenAI models and is enabled with jmeter.ai.agent.enabled=true.",
      },
      {
        question: "How do I install Feather Wand?",
        answer: "The easiest way is the JMeter Plugins Manager: Options → Plugins Manager → Available Plugins → search \"Feather Wand\" → Apply Changes and Restart JMeter. For CI, use the Plugins Manager CLI: PluginsManagerCMD install feather-wand-jmeter-ai-agent. Then copy jmeter-ai-sample.properties into your user.properties and add your API key.",
      },
      {
        question: "Is Feather Wand free?",
        answer: "Yes, completely. Feather Wand is open source under the MIT license, including Agent Mode, all 8 LLM providers, the CLI terminal, and every @command. You only pay for your own LLM API usage (or nothing at all with local Ollama models).",
      },
      {
        question: "Does my test data leave my machine?",
        answer: "Not if you don't want it to. Feather Wand supports fully local deployments via Ollama, so test plans and results can stay on your machine with zero data egress.",
      },
    ],
    agentMode: {
      providersNote: "Tool calling works with Anthropic Claude and OpenAI models, the two providers with mature function-calling APIs. Other providers fall back to plain chat.",
      enableProperty: "jmeter.ai.agent.enabled=true",
      toolGroups: [
        {
          label: "Read",
          emoji: "📖",
          tools: [
            { name: "get_tree_state", description: "Full test-plan tree with names, types, enabled state" },
            { name: "get_element_config", description: "All properties of a specific element" },
            { name: "get_element_children", description: "Children of a specific element" },
            { name: "get_element_schema", description: "Property schema and allowed values for an element type" },
          ],
        },
        {
          label: "Write",
          emoji: "✏️",
          tools: [
            { name: "add_element", description: "Add a new element as a child of a parent" },
            { name: "update_element_property", description: "Set a scalar property on an element" },
            { name: "set_property_list", description: "Set a flat string-list property" },
            { name: "set_structured_property_list", description: "Set structured lists like headers and arguments" },
            { name: "delete_element", description: "Delete an element and its subtree (confirmation gated)" },
            { name: "toggle_element", description: "Enable or disable an element" },
            { name: "move_element", description: "Reparent an element (confirmation gated)" },
            { name: "duplicate_element", description: "Deep-clone an element's subtree" },
            { name: "rename_element", description: "Rename an element" },
            { name: "reorder_element", description: "Reposition an element among its siblings" },
          ],
        },
        {
          label: "Run",
          emoji: "▶️",
          tools: [
            { name: "run_test", description: "Start the test plan" },
            { name: "stop_test", description: "Stop the running test" },
            { name: "get_test_results", description: "Run in a private engine and report pass/fail with failure details" },
          ],
        },
        {
          label: "Correlation",
          emoji: "🔗",
          tools: [
            { name: "find_correlation_candidates", description: "Probe the plan and detect dynamic values needing correlation" },
            { name: "apply_correlation", description: "Add extractors and rewrite values to ${variable} (confirmation gated)" },
          ],
        },
        {
          label: "File",
          emoji: "💾",
          tools: [
            { name: "save_plan", description: "Save the test plan to a .jmx file" },
            { name: "open_plan", description: "Open a .jmx file (confirmation gated)" },
          ],
        },
      ],
      examples: [
        {
          request: "Add an HTTP Request under the Thread Group and set its path to /login",
          chain: ["get_tree_state", "add_element", "update_element_property", "get_element_config"],
        },
        {
          request: "Add a Response Assertion that checks for 200",
          chain: ["get_tree_state", "add_element", "set_property_list"],
        },
        {
          request: "Find dynamic values that need correlation",
          chain: ["find_correlation_candidates"],
        },
        {
          request: "Apply correlation for candidates 1 and 3",
          chain: ["apply_correlation"],
        },
        {
          request: "Run the test and tell me if it passed",
          chain: ["run_test", "get_test_results"],
        },
        {
          request: "Move the JSON Extractor under the first HTTP Request",
          chain: ["get_tree_state", "move_element"],
        },
      ],
      safety: [
        "Destructive operations (delete, move, open plan, apply correlation) ask for confirmation before executing.",
        "Bounded iterations: the agent stops after 8 reason-act cycles by default, configurable via jmeter.ai.agent.max.iterations.",
        "Graceful degradation: if the agent loop fails, you get a plain-text answer describing what it attempted.",
        "Every mutation is undoable with Ctrl+Z when undo.history.size > 0 in user.properties.",
      ],
    },
    socials: defaultSocials,
  },
  {
    id: "super-key",
    name: "Super Key",
    tagline: "Keyboard Shortcuts Supercharged for JMeter",
    subtitlePrefix: "LIGHTNING-FAST",
    subtitleHighlight: "KEYBOARD SHORTCUTS",
    subtitleSuffix: "FOR APACHE JMETER",
    description:
      "Super Key is the missing keyboard shortcut layer for Apache JMeter. Navigate your test plan, add elements, run tests, and manage everything, all without touching the mouse.",
    icon: "keyboard",
    color: "#ffab00",
    colorRgb: "255, 171, 0",
    github: "https://github.com/QAInsights/superkey",
    treeNodes: defaultTreeNodes,
    badges: [
      { label: "KEYBOARD FIRST", emoji: "⌨️", variant: "filled", color: "#ffab00" },
      { label: "OPEN SOURCE", emoji: "⚡", variant: "outlined", color: "#00e676" },
      { label: "PRO EDITION", emoji: "💎", variant: "outlined", color: "#d500f9" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Productivity / UX", color: "#ffab00" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "OSS + Commercial", color: "#ff5252" },
      { label: "SHORTCUTS", value: "100+ Actions", color: "#00e5ff" },
    ],
    featuresHeadingPrefix: "Productivity",
    featuresHeadingHighlight: "Unleashed",
    featuresSubtitle: "Master JMeter with keyboard-first workflows that let you move at the speed of thought.",
    features: [
      {
        title: "70+ Keyboard Shortcuts",
        description: "Comprehensive shortcut set covering every JMeter action, from element creation to test execution.",
        icon: "⌨️",
      },
      {
        title: "Command Palette",
        description: "VS Code-style command palette (Ctrl+Shift+P) to search and execute any JMeter action instantly.",
        icon: "🔎",
      },
      {
        title: "Quick Navigation",
        description: "Jump between test plan elements, tabs, and panels with Vim-inspired navigation shortcuts.",
        icon: "🧭",
      },
      {
        title: "Custom Key Bindings",
        description: "Remap any shortcut to match your preferred workflow and muscle memory.",
        icon: "⚙️",
      },
    ],
    ossVsPro: [
      { feature: "50+ Core Shortcuts", oss: true, pro: true },
      { feature: "Command Palette", oss: true, pro: true },
      { feature: "Quick Navigation", oss: true, pro: true },
      { feature: "70+ Extended Shortcuts", oss: false, pro: true },
      { feature: "Custom Key Bindings", oss: false, pro: true },
      { feature: "Multi-Keymap Profiles", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
      { feature: "Commercial License", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Plugins Manager (Recommended)",
        description: "Open JMeter → Options → Plugins Manager → Available Plugins, search \"SuperKey\", select it, then Apply Changes and Restart JMeter.",
        code: "# JMeter → Options → Plugins Manager → Available Plugins\n# Search \"SuperKey\" → Apply Changes and Restart JMeter",
      },
      {
        title: "Plugins Manager CLI",
        description: "Headless and CI-friendly install via the Plugins Manager command line.",
        code: "# Linux / macOS\nbin/PluginsManagerCMD.sh install superkey\n\n# Windows\nbin\\PluginsManagerCMD.bat install superkey",
      },
      {
        title: "Manual JAR Install",
        description: "Download the latest JAR from the GitHub Releases page, copy it into JMeter's lib/ext directory, and restart JMeter. Super Key activates automatically.",
        code: "# Download from https://github.com/QAInsights/superkey/releases\ncp <downloaded>.jar $JMETER_HOME/lib/ext/\n$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Launch Super Key",
        description: "Ctrl/Cmd + K to open the Super Key panel.",
      },
    ],
    faqs: [
      {
        question: "Does Apache JMeter have keyboard shortcuts?",
        answer: "JMeter ships with only a handful of shortcuts. Super Key adds a comprehensive keyboard layer: 50+ core shortcuts in the free edition (70+ in Pro), a VS Code-style command palette, and Vim-inspired navigation so you rarely need the mouse.",
      },
      {
        question: "How do I get a command palette in JMeter?",
        answer: "Install Super Key from the JMeter Plugins Manager (search \"SuperKey\"), restart JMeter, and press Ctrl+Shift+P. Type any action name (add a sampler, run a test, clear results) and execute it instantly.",
      },
      {
        question: "Is Super Key free?",
        answer: "Yes. The open-source edition with 50+ core shortcuts, the command palette, and quick navigation is free. The Pro edition adds extended shortcuts, custom key bindings, multi-keymap profiles, and a commercial license.",
      },
      {
        question: "How do I install Super Key?",
        answer: "Via the JMeter Plugins Manager: Options → Plugins Manager → Available Plugins → search \"SuperKey\" → Apply Changes and Restart JMeter. Or from the command line: PluginsManagerCMD install superkey.",
      },
    ],
    socials: defaultSocials,
  },
  {
    id: "readme-config",
    name: "README Config",
    tagline: "Embed Markdown documentation directly inside JMeter",
    subtitlePrefix: "LIVE",
    subtitleHighlight: "MARKDOWN DOCUMENTATION",
    subtitleSuffix: "FOR APACHE JMETER",
    description:
      "README Config adds a live Markdown documentation node to any JMeter test plan. Keep your context, runbooks, and notes right alongside the test elements they describe, with zero performance impact.",
    icon: "file-text",
    color: "#00e5ff",
    colorRgb: "0, 229, 255",
    github: "https://github.com/QAInsights/jmeter-readme-config",
    treeNodes: [
      { id: "overview", label: "Overview", icon: "info" },
      { id: "features", label: "Features", icon: "zap" },
      { id: "installation", label: "Installation", icon: "download" },
      { id: "github", label: "GitHub", icon: "github" },
      { id: "connect", label: "Connect", icon: "users" },
    ],
    badges: [
      { label: "DOCUMENTATION", emoji: "📝", variant: "filled", color: "#00e5ff" },
      { label: "FOREVER FREE", emoji: "🎁", variant: "outlined", color: "#00e676" },
      { label: "OPEN SOURCE", emoji: "⚡", variant: "outlined", color: "#00e676" },
      { label: "GFM SUPPORT", emoji: "🐙", variant: "outlined", color: "#ffab00" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Productivity / Docs", color: "#00e5ff" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "MIT (Free)", color: "#00e5ff" },
      { label: "PRICE", value: "Always Free", color: "#ffab00" },
    ],
    featuresHeadingPrefix: "Documentation",
    featuresHeadingHighlight: "Redefined",
    featuresSubtitle: "Keep your test plan documentation where it belongs: inside your test plan.",
    features: [
      {
        title: "Live Markdown Preview",
        description: "Write in the editor tab and see a live GitHub-style preview instantly in the next tab.",
        icon: "📝",
      },
      {
        title: "GFM Support",
        description: "Full support for GitHub Flavored Markdown including tables, task lists, and strikethrough.",
        icon: "🐙",
      },
      {
        title: "JMeter Deep-links",
        description: "Create clickable links that navigate and scroll to specific nodes in your JMeter test plan tree.",
        icon: "🔗",
      },
      {
        title: "Zero Perf Impact",
        description: "The element is always disabled during test runs, consuming no threads and having zero impact on metrics.",
        icon: "⚡",
      },
      {
        title: "External Links",
        description: "Clickable hyperlinks open directly in your system browser for easy access to external docs.",
        icon: "🌐",
      },
      {
        title: "Theme Aware",
        description: "The UI automatically adapts to your JMeter theme for a consistent and integrated experience.",
        icon: "🎨",
      },
    ],
    ossVsPro: [],
    installation: [
      {
        title: "Plugins Manager (Recommended)",
        description: "Open JMeter → Options → Plugins Manager → Available Plugins, search \"README Config\", select it, then Apply Changes and Restart JMeter.",
        code: "# JMeter → Options → Plugins Manager → Available Plugins\n# Search \"README Config\" → Apply Changes and Restart JMeter",
      },
      {
        title: "Plugins Manager CLI",
        description: "Headless and CI-friendly install via the Plugins Manager command line.",
        code: "# Linux / macOS\nbin/PluginsManagerCMD.sh install readme-config-element\n\n# Windows\nbin\\PluginsManagerCMD.bat install readme-config-element",
      },
      {
        title: "Manual JAR Install",
        description: "Download the latest JAR from the GitHub Releases page, copy it into JMeter's lib/ext directory, and restart JMeter.",
        code: "# Download from https://github.com/QAInsights/jmeter-readme-config/releases\ncp <downloaded>.jar $JMETER_HOME/lib/ext/\n$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Add Element",
        description: "Right-click any node → Add → Config Element → README Config Element.",
      },
    ],
    faqs: [
      {
        question: "Can I add documentation inside a JMeter test plan?",
        answer: "Yes. README Config adds a Markdown documentation node to any JMeter test plan. Write notes, runbooks, and context next to the elements they describe, with a live GitHub-style preview and clickable deep-links to test plan nodes.",
      },
      {
        question: "Does README Config affect test performance?",
        answer: "No. The element is always disabled during test runs, so it consumes no threads and has zero impact on metrics. It is purely a documentation node.",
      },
      {
        question: "Is README Config free?",
        answer: "Yes, always. README Config is free and open source under the MIT license, available on GitHub and via the JMeter Plugins Manager (plugin ID: readme-config-element).",
      },
    ],
    socials: defaultSocials,
  },
  {
    id: "jmeter-studio",
    name: "JMeter Studio",
    tagline: "Beautiful Themes for Apache JMeter",
    subtitlePrefix: "PREMIUM",
    subtitleHighlight: "THEMES & VISUAL SKINS",
    subtitleSuffix: "FOR APACHE JMETER",
    description:
      "JMeter Studio transforms the dated Java Swing UI of Apache JMeter into a beautiful, modern interface. Choose from curated dark themes, light themes, and custom color palettes that make long testing sessions genuinely pleasant.",
    icon: "palette",
    color: "#d500f9",
    colorRgb: "213, 0, 249",
    github: "https://github.com/QAInsights/jmeter-studio",
    treeNodes: defaultTreeNodes,
    badges: [
      { label: "THEMES", emoji: "🎨", variant: "filled", color: "#d500f9" },
      { label: "OPEN SOURCE", emoji: "⚡", variant: "outlined", color: "#00e676" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Themes / UI Skins", color: "#d500f9" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "Open Source", color: "#00e676" },
      { label: "THEMES", value: "10+ Included", color: "#00e5ff" },
    ],
    featuresHeadingPrefix: "Beautiful",
    featuresHeadingHighlight: "Themes",
    featuresSubtitle: "Transform your JMeter experience with professionally designed visual themes and icon packs.",
    features: [
      {
        title: "Dark Mode",
        description: "A stunning dark theme that reduces eye strain during late-night performance testing sessions.",
        icon: "🌙",
      },
      {
        title: "10+ Built-in Themes",
        description: "Choose from a curated collection of professionally designed themes: Dracula, Nord, Solarized, and more.",
        icon: "🎨",
      },
      {
        title: "Custom Theme Editor",
        description: "Create your own themes with a visual editor. Adjust colors, fonts, and spacing in real time.",
        icon: "🖌️",
      },
      {
        title: "Icon Packs",
        description: "Swap JMeter's default icons with modern, high-resolution icon packs for a fresh look.",
        icon: "🖼️",
      },
      {
        title: "Font Customization",
        description: "Use any system font or popular coding font in JMeter's editor and tree views.",
        icon: "🔤",
      },
      {
        title: "Theme Sync",
        description: "Automatically sync themes with your OS appearance: light during the day, dark at night.",
        icon: "🌗",
      },
    ],
    ossVsPro: [
      { feature: "Dark Mode", oss: true, pro: true },
      { feature: "5 Built-in Themes", oss: true, pro: true },
      { feature: "10+ Premium Themes", oss: false, pro: true },
      { feature: "Custom Theme Editor", oss: false, pro: true },
      { feature: "Icon Packs", oss: false, pro: true },
      { feature: "Font Customization", oss: true, pro: true },
      { feature: "Theme Sync (OS)", oss: false, pro: true },
      { feature: "Export & Share Themes", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Plugins Manager (Recommended)",
        description: "Open JMeter → Options → Plugins Manager → Available Plugins, search \"JMeter Studio\", select it, then Apply Changes and Restart JMeter.",
        code: "# JMeter → Options → Plugins Manager → Available Plugins\n# Search \"JMeter Studio\" → Apply Changes and Restart JMeter",
      },
      {
        title: "Plugins Manager CLI",
        description: "Headless and CI-friendly install via the Plugins Manager command line.",
        code: "# Linux / macOS\nbin/PluginsManagerCMD.sh install jmeter-studio-oss\n\n# Windows\nbin\\PluginsManagerCMD.bat install jmeter-studio-oss",
      },
      {
        title: "Manual JAR Install",
        description: "Download the latest JAR from the GitHub Releases page, copy it into JMeter's lib/ext directory, and restart JMeter.",
        code: "# Download from https://github.com/QAInsights/jmeter-studio/releases\ncp <downloaded>.jar $JMETER_HOME/lib/ext/\n$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Pick a Theme",
        description: "Open Options → Themes and select your preferred theme. Changes apply instantly.",
      },
    ],
    faqs: [
      {
        question: "Does Apache JMeter have a dark mode?",
        answer: "Not natively, but JMeter Studio adds a professionally designed dark mode to JMeter, along with 10+ curated themes (Dracula, Nord, Solarized, and more), icon packs, and font customization. Changes apply instantly from Options → Themes.",
      },
      {
        question: "How do I change JMeter's theme?",
        answer: "Install JMeter Studio from the JMeter Plugins Manager (plugin ID: jmeter-studio-oss), restart JMeter, then open Options → Themes to pick a theme. The Pro edition adds a custom theme editor and OS appearance sync.",
      },
      {
        question: "Is JMeter Studio free?",
        answer: "The open-source edition with dark mode and 5 built-in themes is free. A Pro edition adds 10+ premium themes, the custom theme editor, icon packs, and theme export/sharing.",
      },
    ],
    socials: defaultSocials,
  },
  {
    id: "prism",
    name: "Prism",
    tagline: "Multi-Tab Interface for Apache JMeter",
    subtitlePrefix: "",
    subtitleHighlight: "MULTI-TAB",
    subtitleSuffix: "SUPPORT & RESULT VISUALIZATION FOR JMETER",
    description:
      "JMeter has no native multi-tab support. Prism solves that. Open multiple test plans simultaneously in tabs, compare results side-by-side, and navigate between test suites without constantly closing and reopening files.",
    icon: "app-window",
    color: "#00e676",
    colorRgb: "0, 230, 118",
    github: "https://github.com/QAInsights/prism",
    treeNodes: defaultTreeNodes,
    badges: [
      { label: "MULTI-TAB", emoji: "🚀", variant: "filled", color: "#00e676" },
      { label: "OPEN SOURCE", emoji: "⚡", variant: "outlined", color: "#00e5ff" },
      { label: "GAME CHANGER", emoji: "🚀", variant: "outlined", color: "#ff5252" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Multi-Tab / UX", color: "#00e676" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e5ff" },
      { label: "LICENSE", value: "Open Source", color: "#00e676" },
      { label: "MAX TABS (OSS)", value: "3 concurrent", color: "#ffab00" },
    ],
    featuresHeadingPrefix: "Tab",
    featuresHeadingHighlight: "Revolution",
    featuresSubtitle: "Finally, multi-tab support for JMeter: the most requested feature, delivered.",
    features: [
      {
        title: "Multi-Tab Test Plans",
        description: "Open multiple .jmx files in separate tabs. Switch between test plans instantly without reopening.",
        icon: "📑",
      },
      {
        title: "Tab Management",
        description: "Right click to close and close all tabs.",
        icon: "🖱️",
      },
      // {
      //   title: "Drag & Drop",
      //   description: "Drag elements between tabs to copy or move test components across different test plans.",
      //   icon: "🔀",
      // },
      // {
      //   title: "Tab Management",
      //   description: "Pin, reorder, close, and restore tabs with familiar browser-like tab controls.",
      //   icon: "📌",
      // },
      // {
      //   title: "Split View",
      //   description: "View two test plans side-by-side for easy comparison and element copying.",
      //   icon: "📊",
      // },
      // {
      //   title: "Session Restore",
      //   description: "JMeter remembers your open tabs across restarts, pick up exactly where you left off.",
      //   icon: "⏪",
      // },
      // {
      //   title: "Tab Search",
      //   description: "Quickly find and switch to any open tab with fuzzy search, even with 50+ tabs open.",
      //   icon: "🔎",
      // },
    ],
    ossVsPro: [
      { feature: "Multi-Tab Support (up to 3)", oss: true, pro: true },
      { feature: "Unlimited Tabs", oss: false, pro: true },
      // { feature: "Drag & Drop Between Tabs", oss: true, pro: true },
      // { feature: "Split View", oss: false, pro: true },
      // { feature: "Session Restore", oss: false, pro: true },
      // { feature: "Tab Search", oss: true, pro: true },
      // { feature: "Tab Groups", oss: false, pro: true },
      { feature: "Tab Color Coding*", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Plugins Manager (Recommended)",
        description: "Open JMeter → Options → Plugins Manager → Available Plugins, search \"Prism\", select it, then Apply Changes and Restart JMeter.",
        code: "# JMeter → Options → Plugins Manager → Available Plugins\n# Search \"Prism\" → Apply Changes and Restart JMeter",
      },
      {
        title: "Plugins Manager CLI",
        description: "Headless and CI-friendly install via the Plugins Manager command line.",
        code: "# Linux / macOS\nbin/PluginsManagerCMD.sh install prism\n\n# Windows\nbin\\PluginsManagerCMD.bat install prism",
      },
      {
        title: "Manual JAR Install",
        description: "Download the latest JAR from the GitHub Releases page, copy it into JMeter's lib/ext directory, and restart JMeter. Prism replaces the default single-tab interface automatically.",
        code: "# Download from https://github.com/QAInsights/prism/releases\ncp <downloaded>.jar $JMETER_HOME/lib/ext/\n$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Open Multiple Tabs",
        description: "Use File > Prism in New Tab to load another test plan.",
      },
    ],
    faqs: [
      {
        question: "Can Apache JMeter open multiple test plans at once?",
        answer: "Not natively. JMeter is single-document. Prism adds browser-like tabs so you can open multiple .jmx test plans simultaneously, switch between them instantly, and compare results without closing and reopening files.",
      },
      {
        question: "How many tabs can I open with Prism?",
        answer: "The open-source edition supports up to 3 concurrent tabs. The Pro edition removes the limit entirely.",
      },
      {
        question: "How do I install Prism?",
        answer: "Via the JMeter Plugins Manager: Options → Plugins Manager → Available Plugins → search \"Prism\" → Apply Changes and Restart JMeter. Or from the command line: PluginsManagerCMD install prism.",
      },
      {
        question: "Is Prism free?",
        answer: "Yes. The open-source edition with 3 concurrent tabs is free on GitHub and via the JMeter Plugins Manager. A Pro edition adds unlimited tabs and tab color coding.",
      },
    ],
    socials: defaultSocials,
  },
  {
    id: "perftractor",
    name: "Perftractor",
    tagline: "Performance Testing Calculators",
    subtitlePrefix: "ESSENTIAL",
    subtitleHighlight: "PERFORMANCE CALCULATORS",
    subtitleSuffix: "FOR LOAD TESTING",
    description:
      "Perftractor provides essential performance testing calculators to help you accurately simulate production workload. Calculate virtual users using Little's Law, determine pacing, estimate test data requirements, and plan load generator capacity.",
    icon: "calculator",
    color: "#ff6b6b",
    colorRgb: "255, 107, 107",
    github: "https://github.com/QAInsights/perftractor",
    treeNodes: [
      { id: "overview", label: "Overview", icon: "info" },
      { id: "calculators", label: "Calculators", icon: "calculator" },
      { id: "github", label: "GitHub", icon: "github" },
      { id: "connect", label: "Connect", icon: "users" },
    ],
    badges: [
      { label: "CALCULATORS", emoji: "🧮", variant: "filled", color: "#ff6b6b" },
      { label: "FREE TOOLS", emoji: "⚡", variant: "outlined", color: "#00e676" },
      { label: "WEB BASED", emoji: "🌐", variant: "outlined", color: "#00e5ff" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Planning Tools", color: "#ff6b6b" },
      { label: "PLATFORM", value: "Web Application", color: "#00e676" },
      { label: "LICENSE", value: "Free & Open", color: "#00e5ff" },
      { label: "CALCULATORS", value: "5 Tools", color: "#ffab00" },
    ],
    featuresHeadingPrefix: "Essential",
    featuresHeadingHighlight: "Calculators",
    featuresSubtitle: "Plan your performance tests with precision using industry-standard formulas and best practices.",
    features: [
      {
        title: "Little's Law Calculator",
        description: "Calculate the number of virtual users needed based on transactions per second, response time, and think time.",
        icon: "⚖️",
      },
      {
        title: "Virtual Users Calculator",
        description: "Determine the optimal number of virtual users required to achieve your target load.",
        icon: "👥",
      },
      {
        title: "Pacing Calculator",
        description: "Calculate the required pacing time between transactions to maintain consistent load.",
        icon: "⌛",
      },
      {
        title: "Test Data Calculator",
        description: "Estimate the amount of unique test data needed for your performance test duration.",
        icon: "🧪",
      },
      {
        title: "Load Generator Calculator",
        description: "Determine how many load generators you need based on memory requirements and virtual user count.",
        icon: "🔋",
      },
      {
        title: "Network Bandwidth Calculator",
        description: "Calculate required network bandwidth based on transaction sizes and concurrent users.",
        icon: "🌐",
      },
    ],
    ossVsPro: [],
    installation: [],
    socials: defaultSocials,
  },
  {
    id: "academy",
    name: "Academy",
    tagline: "JMeter Video Tutorials on YouTube",
    subtitlePrefix: "FREE",
    subtitleHighlight: "LEARN JMETER",
    subtitleSuffix: "ON YOUTUBE",
    description: "Watch the complete JMeter tutorial playlist on YouTube from basics to advanced to AI-powered testing. Step-by-step video guides covering everything from getting started to advanced performance testing techniques.",
    icon: "graduation-cap",
    color: "#a78bfa",
    colorRgb: "167, 139, 250",
    github: "https://youtube.com/@QAInsights",
    badges: [],
    infoCards: [],
    featuresHeadingPrefix: "",
    featuresHeadingHighlight: "",
    featuresSubtitle: "",
    features: [],
    ossVsPro: [],
    installation: [],
    socials: defaultSocials,
    treeNodes: [
      { id: "playlist", label: "Learn JMeter", icon: "play-circle" },
      { id: "challenge", label: "30-Day Challenge", icon: "zap" },
      { id: "k6", label: "Learn k6", icon: "play-circle" },
      { id: "gatling", label: "Learn Gatling", icon: "play-circle" },
      { id: "locust", label: "Learn Locust", icon: "play-circle" },
      { id: "loadrunner", label: "Learn LoadRunner", icon: "play-circle" },
      { id: "performance-engineering", label: "Performance Engineering", icon: "play-circle" },
      { id: "regex", label: "Regular Expressions", icon: "play-circle" },
      { id: "vault", label: "Learn HashiCorp Vault", icon: "play-circle" },
      { id: "devtools", label: "Chrome DevTools for Performance Engineers", icon: "play-circle" },
      { id: "statistics", label: "Statistics for Performance Engineers", icon: "play-circle" },
      { id: "chaos", label: "Learn Chaos Engineering", icon: "play-circle" },
      { id: "jmeter-plugin-development", label: "JMeter Plugin Development", icon: "play-circle" },
    ],
  },
  {
    id: "prompts",
    name: "LLM",
    tagline: "Performance Engineering LLM Hub",
    subtitlePrefix: "CURATED",
    subtitleHighlight: "LLM & AI PROMPTS",
    subtitleSuffix: "FOR PERFORMANCE ENGINEERS",
    description:
      "The ultimate hub for LLM performance engineering. Access a curated library of AI prompts for JMeter and k6, along with comprehensive benchmarks and performance metrics like TTFT, TPOT, and ITL.",
    icon: "cpu",
    color: "#00e676",
    colorRgb: "0, 230, 118",
    github: "https://github.com/QAInsights",
    badges: [
      { label: "LLM", emoji: "📚", variant: "filled", color: "#00e676" },
      { label: "COPY READY", emoji: "📋", variant: "outlined", color: "#00e5ff" },
      { label: "23 CATEGORIES", emoji: "🗂️", variant: "outlined", color: "#ffab00" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "AI / Productivity", color: "#00e676" },
      { label: "PROMPTS", value: "50+ Prompts", color: "#00e5ff" },
      { label: "TOOLS", value: "JMeter · k6 · Gatling", color: "#ffab00" },
      { label: "ACCESS", value: "Free", color: "#00e676" },
    ],
    featuresHeadingPrefix: "Copy-Ready",
    featuresHeadingHighlight: "Prompts",
    featuresSubtitle: "Accelerate your performance engineering workflow with battle-tested AI prompts.",
    features: [],
    ossVsPro: [],
    installation: [],
    socials: defaultSocials,
    treeNodes: [
      { id: "prompts", label: "Browse Prompts", icon: "book-open" },
      { id: "metrics", label: "Performance Metrics", icon: "bar-chart" },
    ],
  },
  {
    id: "perf-skills",
    name: "perf-skills",
    tagline: "AI Skill for Performance Testing Engineers",
    subtitlePrefix: "TURN YOUR AI INTO A",
    subtitleHighlight: "SENIOR PERF ENGINEER",
    subtitleSuffix: "",
    description:
      "perf-skills is a token-optimized knowledge base that gives AI coding assistants deep, expert-level performance testing context on demand. Covering JMeter, k6, Gatling, Locust, Artillery, NeoLoad, LoadRunner, and OctoPerf, it helps your AI generate correct scripts, follow best practices, and debug bottlenecks without bloating its context window.",
    icon: "sparkles",
    color: "#7c3aed",
    colorRgb: "124, 58, 237",
    github: "https://github.com/QAInsights/perf-skills",
    externalUrl: "https://www.npmjs.com/package/perf-skills",
    badges: [
      { label: "AI SKILL", emoji: "⚡", variant: "filled", color: "#7c3aed" },
      { label: "8 LOAD TOOLS", emoji: "🛠️", variant: "outlined", color: "#00e5ff" },
      { label: "TOKEN-OPTIMIZED", emoji: "🧠", variant: "outlined", color: "#00e676" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "AI Skill / Knowledge Base", color: "#7c3aed" },
      { label: "TOOLS", value: "8 Load Testing Tools", color: "#00e5ff" },
      { label: "LICENSE", value: "MIT (Open Source)", color: "#00e676" },
      { label: "INSTALL", value: "npx / Plugin", color: "#ffab00" },
    ],
    featuresHeadingPrefix: "Performance Testing",
    featuresHeadingHighlight: "Skills",
    featuresSubtitle: "An opinionated, on-demand brain transplant for your AI assistant across the full load testing lifecycle.",
    features: [
      {
        title: "Multi-Tool Coverage",
        description: "Expert context for Apache JMeter, k6, Gatling, Locust, Artillery, NeoLoad, LoadRunner, and OctoPerf, all routed from a single entry point.",
        icon: "🛠️",
      },
      {
        title: "Dynamic Value Correlation",
        description: "Robust strategies for CSRF tokens, JSESSIONID, ViewState, SAML, and OAuth, with extraction rules for ASP.NET, Java, SAP, and modern SSR/SPA stacks.",
        icon: "⛓️",
      },
      {
        title: "Token-Optimized Routing",
        description: "SKILL.md is read first, then only the relevant tool and topic files are loaded, keeping your context window lean and answers precise.",
        icon: "🧠",
      },
      {
        title: "LLM Inference Benchmarking",
        description: "Benchmark vLLM, TRT-LLM, and SGLang endpoints with metrics like TTFT, TPOT, ITL, throughput, and goodput.",
        icon: "🤖",
      },
      {
        title: "SLO & Capacity Planning",
        description: "Reason about error budgets, headroom, and replica counts, and gate CI on SLO compliance before shipping.",
        icon: "📈",
      },
      {
        title: "Protocol Support",
        description: "Guidance for HTTP/REST, gRPC, GraphQL, WebSocket, SSE, JDBC, SOAP, Kafka/MQ, Citrix, and SAP protocols.",
        icon: "🔌",
      },
    ],
    ossVsPro: [],
    installation: [
      {
        title: "Install via npx",
        description: "If your tool supports npx skills, add perf-skills directly.",
        code: "npx skills add QAInsights/perf-skills",
      },
      {
        title: "Claude Code Plugin",
        description: "Install as a native Claude Code plugin so the /perf skill auto-loads on performance questions.",
        code: "/plugin marketplace add QAInsights/perf-skills\n/plugin install perf@qainsights\n/reload-plugins",
      },
      {
        title: "Windsurf (Cascade)",
        description: "Clone the repo and copy the skill directory into your Windsurf skills folder.",
        code: "git clone https://github.com/QAInsights/perf-skills.git\ncp -r perf-skills/skills/perf ~/.windsurf/skills/",
      },
      {
        title: "Cursor",
        description: "Copy SKILL.md into a project rule file at .cursor/rules/perf.mdc, or index skills/perf via @Docs.",
      },
    ],
    socials: defaultSocials,
    treeNodes: [
      { id: "overview", label: "Overview", icon: "info" },
      { id: "features", label: "Features", icon: "zap" },
      { id: "installation", label: "Installation", icon: "download" },
      { id: "github", label: "GitHub", icon: "github" },
      { id: "connect", label: "Connect", icon: "users" },
    ],
  },
  {
    id: "docs",
    name: "Docs",
    tagline: "Official JMeter.AI Documentation Hub",
    subtitlePrefix: "COMPREHENSIVE",
    subtitleHighlight: "DOCUMENTATION",
    subtitleSuffix: "FOR EVERY PLUGIN",
    description:
      "The official documentation hub for all JMeter.AI plugins. Browse API references, configuration guides, tutorials, and troubleshooting articles for Feather Wand, Super Key, Prism, and the entire suite.",
    icon: "book-open",
    color: "#a78bfa",
    colorRgb: "167, 139, 250",
    github: "https://github.com/QAInsights",
    externalUrl: "https://docs.jmeter.ai",
    badges: [
      { label: "DOCS", emoji: "📖", variant: "filled", color: "#a78bfa" },
      { label: "API REF", emoji: "🔧", variant: "outlined", color: "#00e5ff" },
    ],
    infoCards: [
      { label: "TYPE", value: "Documentation", color: "#a78bfa" },
      { label: "FORMAT", value: "Markdown / Web", color: "#00e5ff" },
      { label: "ACCESS", value: "Free", color: "#00e676" },
    ],
    featuresHeadingPrefix: "Official",
    featuresHeadingHighlight: "Documentation",
    featuresSubtitle: "Everything you need to master the JMeter.AI ecosystem.",
    features: [],
    ossVsPro: [],
    installation: [],
    socials: defaultSocials,
    treeNodes: [
      { id: "overview", label: "Overview", icon: "info" },
    ],
  },
  {
    id: "plugins",
    name: "Plugins",
    tagline: "Browse the JMeter Plugins Directory",
    subtitlePrefix: "DISCOVER & INSTALL",
    subtitleHighlight: "JMETER PLUGINS",
    subtitleSuffix: "FROM THE COMMUNITY",
    description:
      "The official JMeter plugins directory at plugins.jmeter.ai. Discover, download, and install plugins for Apache JMeter (including the entire JMeter.AI suite) in one searchable registry.",
    icon: "puzzle",
    color: "#f472b6",
    colorRgb: "244, 114, 182",
    github: "https://github.com/QAInsights",
    externalUrl: "https://plugins.jmeter.ai",
    badges: [
      { label: "PLUGINS", emoji: "🧩", variant: "filled", color: "#f472b6" },
      { label: "REGISTRY", emoji: "📦", variant: "outlined", color: "#00e5ff" },
    ],
    infoCards: [
      { label: "TYPE", value: "Plugin Registry", color: "#f472b6" },
      { label: "INSTALL", value: "1-click", color: "#00e5ff" },
      { label: "ACCESS", value: "Free", color: "#00e676" },
    ],
    featuresHeadingPrefix: "Plugin",
    featuresHeadingHighlight: "Directory",
    featuresSubtitle: "Find and install JMeter plugins from a single searchable registry.",
    features: [],
    ossVsPro: [],
    installation: [],
    socials: defaultSocials,
    treeNodes: [
      { id: "overview", label: "Overview", icon: "info" },
    ],
  },
];

export interface Theme {
  id: string;
  name: string;
  dark: boolean;
  lafClass: string;
  colors: {
    bg: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    borderLight: string;
    text: string;
    textDim: string;
    textMuted: string;
    titleBar: string;
    menuBg: string;
    toolbarBg: string;
    tabActive: string;
    tabHover: string;
    treeHover: string;
    treeActive: string;
    accent: string;
    accentDim: string;
    cyan: string;
    amber: string;
    purple: string;
    green: string;
    red: string;
    statusBg: string;
  };
  swatchColors: string[];
}

export const themes: Theme[] = [
  {
    id: "default",
    name: "JMeter Dark",
    dark: true,
    lafClass: "com.qainsights.jmeter.themes.JMeterDarkTheme",
    colors: {
      bg: "#0a0e1a", surface: "#111827", surfaceAlt: "#1a2236",
      border: "#1e293b", borderLight: "#334155",
      text: "#e2e8f0", textDim: "#94a3b8", textMuted: "#64748b",
      titleBar: "#0f172a", menuBg: "#131b2e", toolbarBg: "#0f1629",
      tabActive: "#1a2236", tabHover: "#162033",
      treeHover: "#1e293b", treeActive: "#0c4a6e",
      accent: "#00e5ff", accentDim: "#0891b2",
      cyan: "#00e5ff", amber: "#ffab00", purple: "#d500f9",
      green: "#00e676", red: "#ff5252", statusBg: "#0b1120",
    },
    swatchColors: ["#0a0e1a", "#00e5ff", "#d500f9", "#00e676"],
  },
  {
    id: "nord",
    name: "Nord",
    dark: true,
    lafClass: "com.formdev.flatlaf.intellijthemes.FlatNordIJTheme",
    colors: {
      bg: "#2e3440", surface: "#3b4252", surfaceAlt: "#434c5e",
      border: "#4c566a", borderLight: "#5e6779",
      text: "#eceff4", textDim: "#d8dee9", textMuted: "#81a1c1",
      titleBar: "#2e3440", menuBg: "#353c4a", toolbarBg: "#313845",
      tabActive: "#434c5e", tabHover: "#3e4756",
      treeHover: "#434c5e", treeActive: "#5e81ac",
      accent: "#88c0d0", accentDim: "#81a1c1",
      cyan: "#88c0d0", amber: "#ebcb8b", purple: "#b48ead",
      green: "#a3be8c", red: "#bf616a", statusBg: "#2e3440",
    },
    swatchColors: ["#2e3440", "#88c0d0", "#b48ead", "#a3be8c"],
  },
  {
    id: "gruvbox",
    name: "Gruvbox Dark",
    dark: true,
    lafClass: "com.formdev.flatlaf.intellijthemes.FlatGruvboxDarkHardIJTheme",
    colors: {
      bg: "#1d2021", surface: "#282828", surfaceAlt: "#3c3836",
      border: "#504945", borderLight: "#665c54",
      text: "#ebdbb2", textDim: "#d5c4a1", textMuted: "#a89984",
      titleBar: "#1d2021", menuBg: "#242424", toolbarBg: "#222222",
      tabActive: "#3c3836", tabHover: "#32302f",
      treeHover: "#3c3836", treeActive: "#504945",
      accent: "#fe8019", accentDim: "#d65d0e",
      cyan: "#83a598", amber: "#fabd2f", purple: "#d3869b",
      green: "#b8bb26", red: "#fb4934", statusBg: "#1d2021",
    },
    swatchColors: ["#1d2021", "#fe8019", "#d3869b", "#b8bb26"],
  },
  {
    id: "monokai-pro",
    name: "Monokai Pro",
    dark: true,
    lafClass: "com.formdev.flatlaf.intellijthemes.FlatMonokaiProIJTheme",
    colors: {
      bg: "#2d2a2e", surface: "#383539", surfaceAlt: "#403e41",
      border: "#49474c", borderLight: "#5b595e",
      text: "#fcfcfa", textDim: "#c1c0c0", textMuted: "#939293",
      titleBar: "#2d2a2e", menuBg: "#333034", toolbarBg: "#302e32",
      tabActive: "#403e41", tabHover: "#3a383c",
      treeHover: "#403e41", treeActive: "#49474c",
      accent: "#78dce8", accentDim: "#59b8c6",
      cyan: "#78dce8", amber: "#ffd866", purple: "#ab9df2",
      green: "#a9dc76", red: "#ff6188", statusBg: "#2d2a2e",
    },
    swatchColors: ["#2d2a2e", "#ff6188", "#ab9df2", "#a9dc76"],
  },
  {
    id: "dracula",
    name: "Dracula",
    dark: true,
    lafClass: "com.formdev.flatlaf.intellijthemes.FlatDraculaIJTheme",
    colors: {
      bg: "#282a36", surface: "#2c2e3a", surfaceAlt: "#343746",
      border: "#44475a", borderLight: "#565970",
      text: "#f8f8f2", textDim: "#c5c8d9", textMuted: "#6272a4",
      titleBar: "#21222c", menuBg: "#282a36", toolbarBg: "#252630",
      tabActive: "#343746", tabHover: "#2e3040",
      treeHover: "#343746", treeActive: "#44475a",
      accent: "#8be9fd", accentDim: "#6dd4e8",
      cyan: "#8be9fd", amber: "#f1fa8c", purple: "#bd93f9",
      green: "#50fa7b", red: "#ff5555", statusBg: "#21222c",
    },
    swatchColors: ["#282a36", "#bd93f9", "#ff79c6", "#50fa7b"],
  },
  {
    id: "github-dark",
    name: "GitHub Dark",
    dark: true,
    lafClass: "com.formdev.flatlaf.intellijthemes.materialthemeuilite.FlatGitHubDarkIJTheme",
    colors: {
      bg: "#0d1117", surface: "#161b22", surfaceAlt: "#1c2129",
      border: "#30363d", borderLight: "#484f58",
      text: "#e6edf3", textDim: "#b1bac4", textMuted: "#7d8590",
      titleBar: "#010409", menuBg: "#0d1117", toolbarBg: "#0b0f15",
      tabActive: "#1c2129", tabHover: "#151b23",
      treeHover: "#1c2129", treeActive: "#1f6feb",
      accent: "#58a6ff", accentDim: "#388bfd",
      cyan: "#58a6ff", amber: "#d29922", purple: "#bc8cff",
      green: "#3fb950", red: "#f85149", statusBg: "#010409",
    },
    swatchColors: ["#0d1117", "#58a6ff", "#bc8cff", "#3fb950"],
  },
  {
    id: "github-light",
    name: "GitHub Light",
    dark: false,
    lafClass: "com.formdev.flatlaf.intellijthemes.materialthemeuilite.FlatGitHubIJTheme",
    colors: {
      bg: "#ffffff", surface: "#f6f8fa", surfaceAlt: "#eef1f5",
      border: "#d1d9e0", borderLight: "#b6bfc8",
      text: "#1f2328", textDim: "#59636e", textMuted: "#818b98",
      titleBar: "#f6f8fa", menuBg: "#ffffff", toolbarBg: "#f6f8fa",
      tabActive: "#ffffff", tabHover: "#f3f5f7",
      treeHover: "#eef1f5", treeActive: "#ddf4ff",
      accent: "#0969da", accentDim: "#0550ae",
      cyan: "#0969da", amber: "#9a6700", purple: "#8250df",
      green: "#1a7f37", red: "#cf222e", statusBg: "#f6f8fa",
    },
    swatchColors: ["#ffffff", "#0969da", "#8250df", "#1a7f37"],
  },
  {
    id: "arc-dark",
    name: "Arc Dark",
    dark: true,
    lafClass: "com.formdev.flatlaf.intellijthemes.FlatArcDarkIJTheme",
    colors: {
      bg: "#2f343f", surface: "#383c4a", surfaceAlt: "#404552",
      border: "#4b5162", borderLight: "#5c6274",
      text: "#d3dae3", textDim: "#b0b8c7", textMuted: "#7c818c",
      titleBar: "#2f343f", menuBg: "#353945", toolbarBg: "#333742",
      tabActive: "#404552", tabHover: "#3a3e4b",
      treeHover: "#404552", treeActive: "#5294e2",
      accent: "#5294e2", accentDim: "#4181cb",
      cyan: "#5294e2", amber: "#f5c211", purple: "#b48ead",
      green: "#87c75f", red: "#e55353", statusBg: "#2f343f",
    },
    swatchColors: ["#2f343f", "#5294e2", "#b48ead", "#87c75f"],
  },
];

export interface JMeterElement {
  name: string;
  type: "element" | "action";
  category: string;
  icon: string;
  parent?: string;
}

export const jmeterElements: JMeterElement[] = [
  { name: "Thread Group", type: "element", category: "Threads", icon: "⚙️", parent: "Test Plan" },
  { name: "setUp Thread Group", type: "element", category: "Threads", icon: "⚙️", parent: "Test Plan" },
  { name: "tearDown Thread Group", type: "element", category: "Threads", icon: "⚙️", parent: "Test Plan" },
  { name: "Open Model Thread Group", type: "element", category: "Threads", icon: "⚙️", parent: "Test Plan" },
  { name: "HTTP Request", type: "element", category: "Samplers", icon: "🌐", parent: "Thread Group" },
  { name: "HTTP Header Manager", type: "element", category: "Config", icon: "📋", parent: "Thread Group" },
  { name: "HTTP Cookie Manager", type: "element", category: "Config", icon: "🍪", parent: "Thread Group" },
  { name: "HTTP Cache Manager", type: "element", category: "Config", icon: "💾", parent: "Thread Group" },
  { name: "HTTP Authorization Manager", type: "element", category: "Config", icon: "🔐", parent: "Thread Group" },
  { name: "Access Log Sampler", type: "element", category: "Samplers", icon: "📄", parent: "Thread Group" },
  { name: "AJP/1.3 Sampler", type: "element", category: "Samplers", icon: "🔌", parent: "Thread Group" },
  { name: "DNS Cache Manager", type: "element", category: "Config", icon: "🌍", parent: "Thread Group" },
  { name: "GraphQL HTTP Request", type: "element", category: "Samplers", icon: "📊", parent: "Thread Group" },
  { name: "HTML Link Parser", type: "element", category: "PostProcessors", icon: "🔗", parent: "Thread Group" },
  { name: "FTP Request", type: "element", category: "Samplers", icon: "📁", parent: "Thread Group" },
  { name: "JDBC Request", type: "element", category: "Samplers", icon: "🗄️", parent: "Thread Group" },
  { name: "JSR223 Sampler", type: "element", category: "Samplers", icon: "📜", parent: "Thread Group" },
  { name: "Debug Sampler", type: "element", category: "Samplers", icon: "🐛", parent: "Thread Group" },
  { name: "View Results Tree", type: "element", category: "Listeners", icon: "🌳", parent: "Thread Group" },
  { name: "View Results in Table", type: "element", category: "Listeners", icon: "📊", parent: "Thread Group" },
  { name: "Summary Report", type: "element", category: "Listeners", icon: "📈", parent: "Thread Group" },
  { name: "Aggregate Report", type: "element", category: "Listeners", icon: "📉", parent: "Thread Group" },
  { name: "Graph Results", type: "element", category: "Listeners", icon: "📈", parent: "Thread Group" },
  { name: "Response Assertion", type: "element", category: "Assertions", icon: "✅", parent: "Thread Group" },
  { name: "JSON Assertion", type: "element", category: "Assertions", icon: "✅", parent: "Thread Group" },
  { name: "Duration Assertion", type: "element", category: "Assertions", icon: "⏱️", parent: "Thread Group" },
  { name: "Constant Timer", type: "element", category: "Timers", icon: "⏳", parent: "Thread Group" },
  { name: "Gaussian Random Timer", type: "element", category: "Timers", icon: "⏳", parent: "Thread Group" },
  { name: "Uniform Random Timer", type: "element", category: "Timers", icon: "⏳", parent: "Thread Group" },
  { name: "CSV Data Set Config", type: "element", category: "Config", icon: "📋", parent: "Thread Group" },
  { name: "User Defined Variables", type: "element", category: "Config", icon: "📋", parent: "Test Plan" },
  { name: "Loop Controller", type: "element", category: "Controllers", icon: "🔁", parent: "Thread Group" },
  { name: "If Controller", type: "element", category: "Controllers", icon: "❓", parent: "Thread Group" },
  { name: "While Controller", type: "element", category: "Controllers", icon: "🔄", parent: "Thread Group" },
  { name: "Transaction Controller", type: "element", category: "Controllers", icon: "📦", parent: "Thread Group" },
  { name: "Runtime Controller", type: "element", category: "Controllers", icon: "⏱️", parent: "Thread Group" },
  { name: "Regular Expression Extractor", type: "element", category: "PostProcessors", icon: "🔍", parent: "Thread Group" },
  { name: "JSON Extractor", type: "element", category: "PostProcessors", icon: "🔍", parent: "Thread Group" },
  { name: "BeanShell PreProcessor", type: "element", category: "PreProcessors", icon: "📜", parent: "Thread Group" },
  { name: "JSR223 PreProcessor", type: "element", category: "PreProcessors", icon: "📜", parent: "Thread Group" },
  { name: "JSR223 PostProcessor", type: "element", category: "PostProcessors", icon: "📜", parent: "Thread Group" },
  { name: "README Config Element", type: "element", category: "Config", icon: "📝", parent: "Thread Group" },
  // Actions
  { name: "Action: Run Tg", type: "action", category: "Actions", icon: "▶️" },
  { name: "Action: Run Tg No Timers", type: "action", category: "Actions", icon: "▶️" },
  { name: "Action: Save Before Run", type: "action", category: "Actions", icon: "💾" },
  { name: "Action: Stop", type: "action", category: "Actions", icon: "⏹️" },
  { name: "Action: Stop Thread", type: "action", category: "Actions", icon: "⏹️" },
  { name: "Action: Remote Stop", type: "action", category: "Actions", icon: "⏹️" },
  { name: "Action: Remote Stop All", type: "action", category: "Actions", icon: "⏹️" },
  { name: "Action: Thread Dump", type: "action", category: "Actions", icon: "📋" },
];

export const playlistConfig = {
  playlist: {
    emoji: "🎓",
    label: "QAINSIGHTS",
    title: "Learn ",
    highlight: "JMeter",
    description: "Free step-by-step JMeter tutorial series from basics to advanced to AI-powered testing. New videos are added regularly and appear here automatically.",
    playlistId: "PLJ9A48W0kpRIjLkZ32Do9yDZXnnm7_uj_",
    slug: "jmeter-tutorials",
    subtitle: "JMeter Performance Testing Series",
  },
  k6: {
    emoji: "🚀",
    label: "K6",
    title: "k6",
    highlight: "Series",
    description: "Modern load testing with k6. Learn how to use this powerful open-source tool for performance testing.",
    playlistId: "PLJ9A48W0kpRJKmVeurt7ltKfrOdr8ZBdt",
    slug: "k6-series",
    subtitle: "k6 Load Testing Series",
  },
  "performance-engineering": {
    emoji: "⚡",
    label: "PERFORMANCE",
    title: "Performance Engineering",
    highlight: "Series",
    description: "Comprehensive performance engineering concepts, methodologies, and best practices for modern applications.",
    playlistId: "PLJ9A48W0kpRJl6I8ijICDNQD5NFQeHN4X",
    slug: "performance-engineering",
    subtitle: "Performance Engineering Series",
  },
  regex: {
    emoji: "🔍",
    label: "REGEX",
    title: "Regular",
    highlight: "Expressions",
    description: "Master regular expressions for pattern matching, data extraction, and text processing in performance testing.",
    playlistId: "PLJ9A48W0kpRLorIGHOM7g2OUsO2de3ERm",
    slug: "regular-expressions",
    subtitle: "Regular Expressions Series",
  },
  locust: {
    emoji: "🦗",
    label: "LOCUST",
    title: "Learn",
    highlight: "Locust",
    description: "Python-based load testing framework. Learn how to write scalable performance tests with Locust.",
    playlistId: "PLJ9A48W0kpRKMCzJARCObgJs3SinOewp5",
    slug: "learn-locust",
    subtitle: "Learn Locust Series",
  },
  loadrunner: {
    emoji: "🎯",
    label: "LOADRUNNER",
    title: "Learn",
    highlight: "LoadRunner",
    description: "Enterprise performance testing with LoadRunner. Master scripts, scenarios, and analysis.",
    playlistId: "PLJ9A48W0kpRIiVf8W7jMvf6Ao-naX3Ari",
    slug: "learn-loadrunner",
    subtitle: "Learn LoadRunner Series",
  },
  devtools: {
    emoji: "🔧",
    label: "DEVTOOLS",
    title: "Chrome",
    highlight: "DevTools",
    description: "Master Chrome DevTools for performance analysis, debugging, and optimization of web applications.",
    playlistId: "PLJ9A48W0kpRJk0YNqzyofhPQS1pt_5bUF",
    slug: "chrome-devtools",
    subtitle: "Chrome DevTools Series",
  },
  gatling: {
    emoji: "⚡",
    label: "GATLING",
    title: "Learn",
    highlight: "Gatling",
    description: "High-performance load testing with Gatling. Learn Scala-based performance testing framework.",
    playlistId: "PLJ9A48W0kpRJE6s8I1MjWm-z8BGbUYNCw",
    slug: "learn-gatling",
    subtitle: "Learn Gatling Series",
  },
  statistics: {
    emoji: "📊",
    label: "STATISTICS",
    title: "Statistics for",
    highlight: "Performance Engineers",
    description: "Essential statistical concepts for performance testing analysis, interpretation, and reporting.",
    playlistId: "PLJ9A48W0kpRJl6I8ijICDNQD5NFQeHN4X",
    slug: "statistics-performance",
    subtitle: "Statistics for Performance Engineers",
  },
  chaos: {
    emoji: "🌪️",
    label: "CHAOS",
    title: "Learn",
    highlight: "Chaos Engineering",
    description: "Master chaos engineering principles and practices to build resilient, fault-tolerant systems.",
    playlistId: "PLJ9A48W0kpRKyBBmwOz6oSn4s3A90HHCj",
    slug: "chaos-engineering",
    subtitle: "Learn Chaos Engineering Series",
  },
  vault: {
    emoji: "🔐",
    label: "VAULT",
    title: "Learn",
    highlight: "HashiCorp Vault",
    description: "Master secrets management with HashiCorp Vault. Learn how to secure, store, and control access to tokens, passwords, certificates, and encryption keys.",
    playlistId: "PLJ9A48W0kpRLkV9GrtzNhiJSpwJMVZQTk",
    slug: "learn-vault",
    subtitle: "Learn HashiCorp Vault",
  },
  "jmeter-plugin-development": {
    emoji: "🔌",
    label: "JMETER PLUGINS",
    title: "JMeter Plugin",
    highlight: "Development",
    description: "Learn how to build custom JMeter plugins from scratch. Step-by-step series covering plugin architecture, samplers, listeners, config elements, and publishing to the JMeter Plugins Marketplace.",
    playlistId: "PLJ9A48W0kpRL2tA1e0jpBU4yJZKjRteaz",
    slug: "jmeter-plugin-development",
    subtitle: "JMeter Plugin Development Series",
  },
};

export const siteConfig = {
  title: "JMeter.AI - Performance Intelligence Suite",
  description: "AI-powered plugins and learning resources for Apache JMeter. Feather Wand, Super Key, README Config, JMeter Studio, Prism, Perftractor, a 30-Day Performance Testing Challenge, LLM benchmarks, and a free Academy. Supercharge your performance testing workflow.",
  url: "https://jmeter.ai",
  author: "NaveenKumar Namachivayam",
  authorUrl: "https://qainsights.com",
  menuItems: ["File", "Edit", "Search", "Run", "Options", "Tools", "Help"],
};

/* ===== Graphify homepage data ===== */

export interface InstallCodeBlock {
  title: string;
  code: string;
}

export interface InstallMethod {
  id: string;
  label: string;
  description: string;
  blocks: InstallCodeBlock[];
}

export const installMethods: InstallMethod[] = [
  {
    id: "plugins-manager",
    label: "Plugins Manager",
    description: "The recommended way: install straight from the JMeter Plugins Manager UI.",
    blocks: [
      {
        title: "Open Plugins Manager",
        code: "# JMeter → Options → Plugins Manager → Available Plugins",
      },
      {
        title: "Search & install",
        code: '# Search "Feather Wand" → Apply Changes and Restart JMeter',
      },
    ],
  },
  {
    id: "cli",
    label: "CLI",
    description: "Install via the JMeter Plugins Manager command line (headless & CI friendly).",
    blocks: [
      {
        title: "Linux / macOS",
        code: "bin/PluginsManagerCMD.sh install feather-wand-jmeter-ai-agent",
      },
      {
        title: "Windows",
        code: "bin\\PluginsManagerCMD.bat install feather-wand-jmeter-ai-agent",
      },
    ],
  },
  {
    id: "jar",
    label: "Direct JAR",
    description: "Drop the latest release JAR into JMeter's lib/ext directory.",
    blocks: [
      {
        title: "Download the latest release",
        code: "# Grab the latest JAR from GitHub Releases\n# https://github.com/QAInsights/jmeter-ai/releases",
      },
      {
        title: "Copy into JMeter & restart",
        code: "cp <downloaded>.jar $JMETER_HOME/lib/ext/\n$JMETER_HOME/bin/jmeter",
      },
    ],
  },
];
