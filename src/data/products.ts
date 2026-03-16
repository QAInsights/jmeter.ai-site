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
  badges: Badge[];
  infoCards: InfoCard[];
  featuresHeadingPrefix: string;
  featuresHeadingHighlight: string;
  featuresSubtitle: string;
  features: Feature[];
  ossVsPro: ComparisonRow[];
  installation: InstallStep[];
  socials: Social[];
  treeNodes: TreeNode[];
}

export interface TreeNode {
  id: string;
  label: string;
  icon: string;
  children?: TreeNode[];
}

const defaultSocials: Social[] = [
  { name: "GitHub", url: "https://github.com/QAInsights", icon: "github" },
  { name: "Twitter / X", url: "https://twitter.com/QAInsights", icon: "twitter" },
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
    tagline: "AI-Powered Test Generation for JMeter",
    subtitlePrefix: "AI-POWERED INTELLIGENCE FOR",
    subtitleHighlight: "APACHE JMETER",
    subtitleSuffix: "",
    description:
      "Feather Wand brings the power of Large Language Models directly into your JMeter workflow. Generate test scripts, analyze results, and get AI-guided recommendations — all without leaving your performance testing environment.",
    icon: "wand-sparkles",
    color: "#00e5ff",
    colorRgb: "0, 229, 255",
    github: "https://github.com/QAInsights/jmeter-ai",
    treeNodes: defaultTreeNodes,
    badges: [
      { label: "AI POWERED", emoji: "🤖", variant: "filled", color: "#d500f9" },
      { label: "OPEN SOURCE", emoji: "⚡", variant: "outlined", color: "#00e676" },
      { label: "PRO EDITION", emoji: "💎", variant: "outlined", color: "#ffab00" },
      { label: "LATEST", emoji: "💻", variant: "outlined", color: "#3d8bfd" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "AI / LLM Integration", color: "#00e5ff" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "OSS + Commercial", color: "#ff5252" },
      { label: "STATUS", value: "Active", color: "#00e676" },
    ],
    featuresHeadingPrefix: "Intelligent",
    featuresHeadingHighlight: "Features",
    featuresSubtitle: "Supercharge your performance testing workflow with AI-driven capabilities built natively into JMeter.",
    features: [
      {
        title: "AI Script Generation",
        description: "Describe your test scenario in plain English. Feather Wand generates complete JMeter test plans instantly.",
        icon: "🤖",
      },
      {
        title: "Smart Result Analysis",
        description: "Automatically analyze test results and surface insights, anomalies, and performance bottlenecks.",
        icon: "🔍",
      },
      {
        title: "Test Recommendations",
        description: "Get AI-powered suggestions to optimize thread counts, ramp-up periods, and think times.",
        icon: "💡",
      },
      {
        title: "Multi-LLM Support",
        description: "Connect to OpenAI, Anthropic Claude, Ollama, or any OpenAI-compatible endpoint.",
        icon: "🔗",
      },
      {
        title: "Natural Language Assertions",
        description: "Write response assertions in natural language. AI translates them into proper JMeter validators.",
        icon: "📝",
      },
      {
        title: "Context-Aware Help",
        description: "Right-click any element to get AI help contextually. From samplers to listeners — help is one click away.",
        icon: "⚡",
      },
    ],
    ossVsPro: [
      { feature: "Natural Language Test Generation", oss: true, pro: true },
      { feature: "Script Debugging", oss: true, pro: true },
      { feature: "Multi-LLM Support", oss: "3 providers", pro: "All providers" },
      { feature: "Context-Aware Suggestions", oss: true, pro: true },
      { feature: "Batch Test Generation", oss: false, pro: true },
      { feature: "Custom Prompt Templates", oss: false, pro: true },
      { feature: "Team Shared Prompts", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
      { feature: "Commercial License", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Download the JAR",
        description: "Grab the latest release from GitHub Releases page.",
        code: "# Download from GitHub Releases\ncurl -L -o jmeter-ai.jar https://github.com/QAInsights/jmeter-ai/releases/latest",
      },
      {
        title: "Copy to JMeter",
        description: "Place the JAR file into your JMeter lib/ext directory.",
        code: "cp jmeter-ai.jar $JMETER_HOME/lib/ext/",
      },
      {
        title: "Restart JMeter",
        description: "Restart JMeter and find Feather Wand in the Tools menu.",
        code: "# Launch JMeter\n$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Configure AI Provider",
        description: "Set your API key and preferred LLM provider in Feather Wand settings.",
      },
    ],
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
      "Super Key is the missing keyboard shortcut layer for Apache JMeter. Navigate your test plan, add elements, run tests, and manage everything — all without touching the mouse.",
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
        title: "100+ Keyboard Shortcuts",
        description: "Comprehensive shortcut set covering every JMeter action — from element creation to test execution.",
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
      {
        title: "Shortcut Cheatsheet",
        description: "Built-in overlay showing all available shortcuts contextual to your current view.",
        icon: "📋",
      },
      {
        title: "Macro Recording",
        description: "Record and replay sequences of actions as reusable keyboard macros.",
        icon: "🔁",
      },
    ],
    ossVsPro: [
      { feature: "50+ Core Shortcuts", oss: true, pro: true },
      { feature: "Command Palette", oss: true, pro: true },
      { feature: "Quick Navigation", oss: true, pro: true },
      { feature: "100+ Extended Shortcuts", oss: false, pro: true },
      { feature: "Custom Key Bindings", oss: false, pro: true },
      { feature: "Macro Recording & Playback", oss: false, pro: true },
      { feature: "Multi-Keymap Profiles", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
      { feature: "Commercial License", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Download the JAR",
        description: "Grab the latest release from GitHub Releases page.",
        code: "curl -L -o superkey.jar https://github.com/QAInsights/superkey/releases/latest",
      },
      {
        title: "Copy to JMeter",
        description: "Place the JAR file into your JMeter lib/ext directory.",
        code: "cp superkey.jar $JMETER_HOME/lib/ext/",
      },
      {
        title: "Restart JMeter",
        description: "Restart JMeter — Super Key activates automatically.",
        code: "$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Open Cheatsheet",
        description: "Press Ctrl+Shift+? to see all available shortcuts.",
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
      { label: "PRO EDITION", emoji: "💎", variant: "outlined", color: "#ff5252" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Themes / UI Skins", color: "#d500f9" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "OSS + Commercial", color: "#ff5252" },
      { label: "THEMES", value: "20+ Included", color: "#00e5ff" },
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
        title: "20+ Built-in Themes",
        description: "Choose from a curated collection of professionally designed themes — Dracula, Nord, Solarized, and more.",
        icon: "🎨",
      },
      {
        title: "Custom Theme Editor",
        description: "Create your own themes with a visual editor — adjust colors, fonts, and spacing in real time.",
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
        description: "Automatically sync themes with your OS appearance — light during the day, dark at night.",
        icon: "🌗",
      },
    ],
    ossVsPro: [
      { feature: "Dark Mode", oss: true, pro: true },
      { feature: "5 Built-in Themes", oss: true, pro: true },
      { feature: "20+ Premium Themes", oss: false, pro: true },
      { feature: "Custom Theme Editor", oss: false, pro: true },
      { feature: "Icon Packs", oss: false, pro: true },
      { feature: "Font Customization", oss: true, pro: true },
      { feature: "Theme Sync (OS)", oss: false, pro: true },
      { feature: "Export & Share Themes", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Download the JAR",
        description: "Grab the latest release from GitHub Releases page.",
        code: "curl -L -o jmeter-studio.jar https://github.com/QAInsights/jmeter-studio/releases/latest",
      },
      {
        title: "Copy to JMeter",
        description: "Place the JAR file into your JMeter lib/ext directory.",
        code: "cp jmeter-studio.jar $JMETER_HOME/lib/ext/",
      },
      {
        title: "Restart JMeter",
        description: "Restart JMeter and access themes via Options → Theme.",
        code: "$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Pick a Theme",
        description: "Open Options → Themes and select your preferred theme. Changes apply instantly.",
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
      "JMeter has no native multi-tab support — Prism solves that. Open multiple test plans simultaneously in tabs, compare results side-by-side, and navigate between test suites without constantly closing and reopening files.",
    icon: "app-window",
    color: "#00e676",
    colorRgb: "0, 230, 118",
    github: "https://github.com/QAInsights/prism",
    treeNodes: defaultTreeNodes,
    badges: [
      { label: "MULTI-TAB", emoji: "🚀", variant: "filled", color: "#00e676" },
      { label: "OPEN SOURCE", emoji: "⚡", variant: "outlined", color: "#00e5ff" },
      { label: "PRO EDITION", emoji: "💎", variant: "outlined", color: "#ffab00" },
      { label: "GAME CHANGER", emoji: "🚀", variant: "outlined", color: "#ff5252" },
    ],
    infoCards: [
      { label: "CATEGORY", value: "Multi-Tab / UX", color: "#00e676" },
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e676" },
      { label: "LICENSE", value: "OSS + Commercial", color: "#ff5252" },
      { label: "MAX TABS (OSS)", value: "3 concurrent", color: "#00e5ff" },
    ],
    featuresHeadingPrefix: "Tab",
    featuresHeadingHighlight: "Revolution",
    featuresSubtitle: "Finally, multi-tab support for JMeter — the most requested feature, delivered.",
    features: [
      {
        title: "Multi-Tab Test Plans",
        description: "Open multiple .jmx files in separate tabs — switch between test plans instantly without reopening.",
        icon: "📑",
      },
      {
        title: "Drag & Drop",
        description: "Drag elements between tabs to copy or move test components across different test plans.",
        icon: "🔀",
      },
      {
        title: "Tab Management",
        description: "Pin, reorder, close, and restore tabs with familiar browser-like tab controls.",
        icon: "📌",
      },
      {
        title: "Split View",
        description: "View two test plans side-by-side for easy comparison and element copying.",
        icon: "📊",
      },
      {
        title: "Session Restore",
        description: "JMeter remembers your open tabs across restarts — pick up exactly where you left off.",
        icon: "⏪",
      },
      {
        title: "Tab Search",
        description: "Quickly find and switch to any open tab with fuzzy search — even with 50+ tabs open.",
        icon: "🔎",
      },
    ],
    ossVsPro: [
      { feature: "Multi-Tab Support (up to 5)", oss: true, pro: true },
      { feature: "Unlimited Tabs", oss: false, pro: true },
      { feature: "Drag & Drop Between Tabs", oss: true, pro: true },
      { feature: "Split View", oss: false, pro: true },
      { feature: "Session Restore", oss: false, pro: true },
      { feature: "Tab Search", oss: true, pro: true },
      { feature: "Tab Groups", oss: false, pro: true },
      { feature: "Tab Color Coding", oss: false, pro: true },
      { feature: "Priority Support", oss: false, pro: true },
    ],
    installation: [
      {
        title: "Download the JAR",
        description: "Grab the latest release from GitHub Releases page.",
        code: "curl -L -o prism.jar https://github.com/QAInsights/prism/releases/latest",
      },
      {
        title: "Copy to JMeter",
        description: "Place the JAR file into your JMeter lib/ext directory.",
        code: "cp prism.jar $JMETER_HOME/lib/ext/",
      },
      {
        title: "Restart JMeter",
        description: "Restart JMeter — Prism replaces the default single-tab interface automatically.",
        code: "$JMETER_HOME/bin/jmeter",
      },
      {
        title: "Open Multiple Tabs",
        description: "Use Ctrl+T to open a new tab, or File → Open in New Tab to load another test plan.",
      },
    ],
    socials: defaultSocials,
  },
];

export const siteConfig = {
  title: "JMeter.AI",
  version: "0.0.1",
  description: "AI-Powered Tools & Plugins for Apache JMeter — Supercharge your performance testing workflow.",
  url: "https://jmeter.ai",
  author: "QAInsights",
  authorUrl: "https://qainsights.com",
  menuItems: ["File", "Edit", "Search", "Run", "Options", "Tools", "Help"],
};
