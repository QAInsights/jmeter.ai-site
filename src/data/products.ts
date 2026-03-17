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
      { label: "PLATFORM", value: "Apache JMeter Plugin", color: "#00e5ff" },
      { label: "LICENSE", value: "OSS + Commercial", color: "#ff5252" },
      { label: "MAX TABS (OSS)", value: "3 concurrent", color: "#ffab00" },
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

export const siteConfig = {
  title: "JMeter.AI - Performance Intelligence Suite",
  version: "0.0.1",
  description: "AI-Powered Tools & Plugins for Apache JMeter — Supercharge your performance testing workflow.",
  url: "https://jmeter.ai",
  author: "QAInsights",
  authorUrl: "https://qainsights.com",
  menuItems: ["File", "Edit", "Search", "Run", "Options", "Tools", "Help"],
};
