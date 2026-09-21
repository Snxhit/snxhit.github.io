export const projectCategories = [
  {
    title: "Open Source Contributions",
    key: "open-source",
    projects: [
      {
        slug: "rust",
        name: "Rust",
        repo: "https://github.com/Snxhit/rust",
        live: "",
        stack: ["Rust"],
        summary: "Open-source contributions to Rust, the memory-safe systems language.",
        tagline: "OSS contribution — rust-lang/rust.",
        status: "Active",
        overview:
          "A fork of rust-lang/rust kept for open-source contributions — working with the core Rust compiler codebase.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "rust-clippy",
        name: "Rust Clippy",
        repo: "https://github.com/Snxhit/rust-clippy",
        live: "",
        stack: ["Rust"],
        summary: "Open-source contributions to Clippy, the official Rust linter.",
        tagline: "OSS contribution — rust-lang/rust-clippy.",
        status: "Active",
        overview:
          "A fork of rust-lang/rust-clippy kept for open-source contributions — a collection of lints that catch common mistakes and improve Rust code.",
        highlights: [],
        architecture: [],
      },
    ],
  },
  {
    title: "Languages & Tooling",
    key: "languages-tooling",
    projects: [
      {
        slug: "lamentable",
        name: "Lamentable",
        repo: "https://github.com/Snxhit/Lamentable",
        live: "",
        stack: ["Rust"],
        summary: "Lamentable is a programming language made with Rust.",
        tagline: "A programming language made with Rust.",
        status: "Active",
        overview:
          "Lamentable is a custom programming language implemented in Rust — a hands-on exploration of lexing, parsing, and evaluation.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "mellow",
        name: "Mellow",
        repo: "https://github.com/Snxhit/Mellow",
        live: "",
        stack: ["Go"],
        summary: "A music programming language.",
        tagline: "Compose music in code.",
        status: "Active",
        overview:
          "Mellow is a domain-specific programming language for music written in Go — define notes, sequences, and compositions as code.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "vcs",
        name: "VCS",
        repo: "https://github.com/Snxhit/FOSS-Recruitment-2026",
        live: "",
        stack: ["Rust"],
        summary:
          "VCS — a version control system, basically a toy git that takes snapshots of the working directory.",
        tagline: "Toy git that snapshots the working directory.",
        status: "Complete",
        overview:
          "Built for the FOSS Club recruitment challenge, VCS is a toy version control system in Rust that takes snapshots of the working directory, mirroring the core behavior of git in a small, readable codebase.",
        highlights: [],
        architecture: [],
      },
    ],
  },
  {
    title: "Graphics & Rendering",
    key: "graphics-rendering",
    projects: [
      {
        slug: "quaint-shaders",
        name: "Quaint-Shaders",
        repo: "https://github.com/Snxhit/Quaint-Shaders",
        live: "",
        stack: ["GLSL"],
        summary: "A Minecraft shader pack — grotesque but cozy.",
        tagline: "Grotesque-but-cozy Minecraft shaders.",
        status: "Active",
        overview:
          "Quaint-Shaders is a Minecraft shader pack written in GLSL that pushes the game into a moody, grotesque-but-cozy visual style with custom color grading and atmosphere.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "raycaster",
        name: "Raycaster",
        repo: "https://github.com/Snxhit/raycaster",
        live: "",
        stack: ["Rust"],
        summary: "A Wolfenstein 3D-style raycaster engine written in Rust.",
        tagline: "Wolfenstein 3D-style rendering in Rust.",
        status: "Complete",
        overview:
          "A raycaster engine in the spirit of Wolfenstein 3D, written in Rust — textured columns, distance-based rendering, and a first-person walkthrough.",
        highlights: [],
        architecture: [],
      },
    ],
  },
  {
    title: "Applications & Networking",
    key: "applications-networking",
    projects: [
      {
        slug: "lantern",
        name: "Lantern",
        repo: "https://github.com/Snxhit/Lantern-API",
        live: "",
        stack: ["TypeScript", "JavaScript"],
        summary: "A chatting platform with a TypeScript API and a JavaScript web client.",
        tagline: "Chat API + web client.",
        status: "Complete",
        overview:
          "Lantern is a messaging platform split into two repos: Lantern-API, a chatting API written in TypeScript, and Lantern-Web, the web client for the Lantern messaging API.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "forlornmud",
        name: "ForlornMUD",
        repo: "https://github.com/Snxhit/ForlornMUD",
        live: "",
        stack: ["Go"],
        summary:
          "A simple MUD (Multi-User Dungeon) engine written in Go, with a WebSocket bridge and browser client.",
        tagline: "MUD engine + web bridge + browser client.",
        status: "Complete",
        overview:
          "ForlornMUD is a simple Multi-User Dungeon engine written in Go. It is complemented by its dependency projects: ForlornWebsocketBridge, a Go WebSocket bridge that pipes the MUD to the web, and ForlornClientWeb, a browser-based client with an in-editor authoring tool.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "saturnine",
        name: "Saturnine",
        repo: "",
        live: "",
        stack: ["Rust"],
        summary: "An alternative to the world wide web — a custom protocol like HTTP, built on top of TCP.",
        tagline: "Reimagining the web, one protocol at a time.",
        status: "Active",
        overview:
          "Saturnine is an alternative to the world wide web built from first principles. Instead of bolting onto existing web standards, it defines its own protocol — inspired by HTTP but built directly on TCP — for how devices discover each other and exchange content.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "elegiac-crawler",
        name: "Elegiac Crawler",
        repo: "",
        live: "",
        stack: ["Rust"],
        summary: "A browser written in Rust for Saturnine.",
        tagline: "A native browsing client for Saturnine.",
        status: "Active",
        overview:
          "Elegiac Crawler is a browser written in Rust that speaks the Saturnine protocol — rendering pages served over the custom TCP-based protocol instead of HTTP. It is the window into the Saturnine web.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "gov-procurement-portal",
        name: "Government Procurement Portal",
        repo: "https://github.com/Snxhit/SIH-Prototype-26136",
        live: "https://sih-prototype-26136.vercel.app",
        stack: ["TypeScript", "Next.js", "Supabase"],
        summary:
          "A portal to match govt department problem statements with startups that can solve them.",
        tagline: "Smart India Hackathon prototype.",
        status: "Active",
        overview:
          "Built for Smart India Hackathon (prototype 26136), this Next.js and Supabase portal lets government departments publish problem statements and makes it easy for startups to discover and respond to the ones they can solve.",
        highlights: [],
        architecture: [],
      },
    ],
  },
  {
    title: "Games & Simulations",
    key: "games-simulations",
    projects: [
      {
        slug: "sentient",
        name: "Sentient",
        repo: "https://github.com/Snxhit/Sentient",
        live: "",
        stack: ["JavaScript"],
        summary: "A simulation of the wonderful world.",
        tagline: "World, AI, and terrain simulation.",
        status: "Complete",
        overview:
          "Sentient is a JavaScript simulation exploring terrain generation, world-building, and AI — a sandbox for simulating an interactive world.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "shapelite",
        name: "Shapelite",
        repo: "https://github.com/Snxhit/Shapelite",
        live: "",
        stack: ["Lua", "LÖVE"],
        summary: "A roguelite made with LÖVE where everything is composed of basic shapes.",
        tagline: "Shape-composed roguelite in LÖVE.",
        status: "On hold",
        overview:
          "Shapelite is a roguelite built in LÖVE (Love2D) where every entity is composed of basic shapes — a minimal, geometric approach to game art and level design.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "grinshot",
        name: "GrinShot",
        repo: "https://github.com/Snxhit/GrinShot",
        live: "",
        stack: ["Lua"],
        summary: "A game where you, a slime, shoot ragdolls.",
        tagline: "Slime-ragdoll shooter.",
        status: "Complete",
        overview:
          "GrinShot is a game in which you play a slime shooting ragdolls — an early physics-driven shooting game built in Lua.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "tbag",
        name: "TBAG",
        repo: "https://github.com/Snxhit/TBAG",
        live: "",
        stack: ["Python"],
        summary: "An open-source console-based game written in Python.",
        tagline: "Console-based game in Python.",
        status: "Complete",
        overview:
          "TBAG is an open-source, console-based game created with Python — text-driven gameplay built for the terminal.",
        highlights: [],
        architecture: [],
      },
      {
        slug: "enchanting-reimagined",
        name: "Enchanting-Reimagined",
        repo: "https://github.com/Snxhit/Enchanting-Reimagined",
        live: "",
        stack: ["Java"],
        summary: "A Minecraft mod that revamps the enchantment system.",
        tagline: "Minecraft enchantment revamp mod.",
        status: "Dropped",
        overview:
          "Enchanting-Reimagined is a Minecraft mod written in Java that overhauls the enchantment system, reworking how players discover, combine, and apply enchantments.",
        highlights: [],
        architecture: [],
      },
    ],
  },
];

export const allProjects = projectCategories.flatMap((category) =>
  category.projects.map((project) => ({
    ...project,
    category: {
      title: category.title,
      key: category.key,
    },
  })),
);

export const projectsBySlug = Object.fromEntries(
  allProjects.map((project) => [project.slug, project]),
);