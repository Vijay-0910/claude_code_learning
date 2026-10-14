/* Shared left sidebar for every lesson page.
   Add a new page: append one entry to PAGES. Every page that includes
   <script src="nav.js"></script> picks it up. */
(function () {
  var PAGES = [
    { group: "Start", file: "index.html", title: "Learning Hub", sections: [] },
    { group: "Start", file: "lesson-00-ai-basics.html", title: "0 · AI Basics (start here)", sections: [
      ["picture", "Big picture"], ["model", "Model"], ["token", "Token"], ["context", "Context window"],
      ["prompt", "Prompt"], ["generate", "How it answers"], ["limits", "Limits"], ["family", "Claude models"],
      ["api", "API & SDK"], ["tool", "Tool"], ["agent", "Agent"], ["more", "More words"], ["quiz", "Quiz"]
    ] },
    { group: "Start", file: "practice-lab.html", title: "Practice Lab (57 tasks)", sections: [
      ["rules", "Rules"], ["setup", "Setup"], ["p0", "Phase 0 · Basics"], ["p1", "Phase 1 · Claude Code"],
      ["p2", "Phase 2 · API & Models"], ["p3", "Phase 3 · Prompts & Tools"], ["p4", "Phase 4 · MCP & Agents"],
      ["p5", "Phase 5 · Security & Evals"], ["p6", "Phase 6 · Ecosystem"], ["p7", "Phase 7 · Capstone"]
    ] },
    { group: "Overview", file: "ai-coding-path.html", title: "AI Coding Master Path", sections: [
      ["core", "Start here"], ["l0", "L0 · Terminal + Git"], ["l1", "L1 · First session"],
      ["l2", "L2 · CLAUDE.md & prompts"], ["l3", "L3 · Workflow"], ["l4", "L4 · Automation"],
      ["l5", "L5 · Codex, Cursor, Gemini"], ["l6", "L6 · Interview Q&A"],
      ["cheat", "Cheat sheet"], ["revise", "Flashcards"]
    ] },
    { group: "Claude Code", file: "lesson-01-terminal.html", title: "1 · Terminal Basics", sections: [
      ["why", "Why"], ["paths", "Paths"], ["pwd", "pwd"], ["ls", "ls"], ["cd", "cd"],
      ["mkdir", "mkdir"], ["cat", "cat"], ["keys", "Shortcuts"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude Code", file: "lesson-02-claude-code-basics.html", title: "2 · Claude Code Basics", sections: [
      ["why", "Why"], ["start", "Start a session"], ["input", "@  !  /"], ["modes", "Permission modes"],
      ["slash", "Slash commands"], ["keys", "Keyboard"], ["flags", "CLI flags"], ["prompt", "Prompts"],
      ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude Code", file: "lesson-03-claude-code-advanced.html", title: "3 · Claude Code Advanced", sections: [
      ["map", "Which tool when"], ["memory", "CLAUDE.md"], ["settings", "Settings"], ["skills", "Skills"],
      ["agents", "Subagents"], ["hooks", "Hooks"], ["mcp", "MCP"], ["plugins", "Plugins"],
      ["headless", "Headless & SDK"], ["more", "Rewind & worktrees"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude Code", file: "lesson-13-claude-code-extras.html", title: "13 · Claude Code Extras", sections: [
      ["why", "Why"], ["gha", "GitHub Actions"], ["ide", "IDE"], ["ui", "Status line & style"], ["bg", "Background sessions"],
      ["cloud", "Cloud & remote"], ["wt", "Worktrees"], ["review", "Review commands"], ["safety", "Auto mode & sandbox"],
      ["model", "Model & cost"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Certification", file: "ccdvf-roadmap.html", title: "CCDV-F Roadmap", sections: [
      ["facts", "Exam facts"], ["shock", "Big insight"], ["domains", "8 domains"], ["order", "Study order"], ["sources", "Sources"]
    ] },
    { group: "Claude API", file: "lesson-04-claude-api-101.html", title: "4 · Claude API 101", sections: [
      ["why", "Why"], ["auth", "API key"], ["first", "First call"], ["response", "Response"], ["multiturn", "Multi-turn"],
      ["stream", "Streaming"], ["vision", "Images & PDF"], ["files", "Files & citations"], ["errors", "Errors"],
      ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-05-models-cost.html", title: "5 · Models & Cost", sections: [
      ["why", "Why"], ["models", "Models"], ["choose", "Choosing"], ["tokens", "Tokens"], ["thinking", "Thinking & effort"],
      ["caching", "Caching"], ["batch", "Batch"], ["count", "Count & Models API"], ["fast", "Fast mode"], ["cloud", "Cloud"],
      ["costtask", "Cost per task"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-06-prompt-context.html", title: "6 · Prompt & Context", sections: [
      ["why", "Why"], ["clear", "Clear prompts"], ["placement", "System vs user"], ["xml", "XML tags"], ["shots", "Few-shot"],
      ["structured", "Structured output"], ["validate", "Validation"], ["sanitize", "Untrusted input"], ["context", "Context budget"],
      ["manage", "Prune & compact"], ["iterate", "Iterate"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-07-tool-use.html", title: "7 · Tool Use", sections: [
      ["why", "Why"], ["define", "Define a tool"], ["loop", "Manual loop"], ["parallel", "Parallel & errors"],
      ["choice", "tool_choice & strict"], ["runner", "Tool Runner"], ["server", "Server tools"], ["clientserver", "Client vs server"],
      ["approval", "Approval"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-08-mcp-server.html", title: "8 · Build an MCP Server", sections: [
      ["why", "Why"], ["arch", "Architecture"], ["primitives", "Primitives"], ["transports", "Transports"], ["build", "Build"],
      ["test", "Test & connect"], ["connector", "API connector"], ["security", "Security"], ["choose", "Skill vs MCP"],
      ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-09-agents.html", title: "9 · Agents & Workflows", sections: [
      ["why", "Why"], ["decide", "Agent venumaa?"], ["patterns", "5 patterns"], ["approaches", "4 approaches"], ["loop", "Tool Runner"],
      ["sdk", "Agent SDK"], ["managed", "Managed Agents"], ["multi", "Subagents"], ["control", "Hooks & memory"],
      ["frameworks", "Frameworks"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-10-security.html", title: "10 · Security & Safety", sections: [
      ["why", "Why"], ["injection", "Prompt injection"], ["untrusted", "Untrusted input"], ["pii", "PII & leakage"], ["auth", "Auth"],
      ["layers", "Guardrail layers"], ["privilege", "Least privilege"], ["claudecode", "Claude Code safety"], ["secrets", "Secrets"],
      ["refusal", "Refusals"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-11-evals-debugging.html", title: "11 · Evals & Debugging", sections: [
      ["why", "Why evals"], ["build", "Eval set"], ["grading", "Grading"], ["runner", "Runner"], ["regression", "Regression"],
      ["errors", "Error types"], ["handling", "Error handling"], ["stop", "stop_reason"], ["isolate", "Isolate bugs"],
      ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Claude API", file: "lesson-12-claude-ecosystem.html", title: "12 · Claude Ecosystem", sections: [
      ["map", "Map"], ["claudeai", "claude.ai"], ["desktop", "Desktop"], ["chrome", "Chrome"], ["code", "Claude Code"],
      ["platform", "Dev Platform"], ["cloud", "Cloud"], ["choose", "Which one?"], ["instructions", "Instructions"],
      ["hygiene", "Session hygiene"], ["practice", "Practice"], ["quiz", "Quiz"]
    ] },
    { group: "Exam", file: "lesson-14-capstone-mock-exam.html", title: "14 · Capstone & Mock Exam", sections: [
      ["why", "Why"], ["spec", "Capstone spec"], ["arch", "Architecture"], ["milestones", "Milestones"], ["done", "Done checklist"],
      ["exam", "Mock exam (30 Qs)"], ["tips", "Exam tips"]
    ] }
  ];

  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here.indexOf(".html") === -1) here = "index.html";

  var css = [
    ".snav{position:fixed;top:0;bottom:0;left:0;width:272px;z-index:40;background:var(--surface);border-right:1px solid var(--line);",
    "display:flex;flex-direction:column;font-family:var(--body);font-size:.9rem;line-height:1.4;",
    "padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);padding-left:env(safe-area-inset-left,0px)}",
    ".snav-head{padding:18px 18px 12px;border-bottom:1px solid var(--line)}",
    ".snav-head a{font-family:var(--display);font-weight:800;font-size:1.15rem;color:var(--fg);text-decoration:none}",
    ".snav-head p{margin:2px 0 0;color:var(--muted);font-size:.78rem}",
    ".snav-body{overflow-y:auto;padding:8px 10px 24px;flex:1}",
    ".snav-group{font-family:var(--mono);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:14px 8px 4px}",
    ".snav-page{display:flex;align-items:center;gap:2px}",
    ".snav-page a{flex:1;min-width:0;display:block;padding:7px 8px;border-radius:7px;color:var(--fg);text-decoration:none;font-weight:600}",
    ".snav-page a:hover{background:var(--sunk)}",
    ".snav-page.current a{background:var(--accent-soft);color:var(--accent)}",
    ".snav-tog{flex:none;width:28px;height:28px;border:0;background:transparent;color:var(--muted);border-radius:6px;cursor:pointer;font-size:.8rem}",
    ".snav-tog:hover{background:var(--sunk);color:var(--fg)}",
    ".snav-tog[aria-expanded=true]{transform:rotate(90deg)}",
    ".snav-secs{list-style:none;margin:2px 0 6px 12px;padding:0 0 0 8px;border-left:1px solid var(--line)}",
    ".snav-secs a{display:block;padding:4px 8px;border-radius:6px;color:var(--muted);text-decoration:none;font-size:.84rem}",
    ".snav-secs a:hover{color:var(--fg);background:var(--sunk)}",
    ".snav-secs a.active{color:var(--accent);font-weight:600;background:var(--accent-soft)}",
    ".snav-btn{display:none;position:fixed;z-index:41;right:calc(16px + env(safe-area-inset-right,0px));bottom:calc(16px + env(safe-area-inset-bottom,0px));",
    "font:600 .9rem var(--body);padding:10px 16px;border-radius:999px;border:1px solid var(--line);background:var(--fg);color:var(--bg);cursor:pointer;box-shadow:0 4px 14px #0003}",
    ".snav-shade{position:fixed;inset:0;z-index:39;background:#0006}",
    "@media (min-width:1100px){body.has-snav{padding-left:272px}body.has-snav nav.toc{display:none}}",
    "@media (max-width:1099px){.snav{transform:translateX(-100%);transition:transform .2s ease;box-shadow:4px 0 20px #0003}",
    ".snav.open{transform:none}.snav-btn{display:block}}",
    "@media (prefers-reduced-motion:reduce){.snav{transition:none}}"
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text) n.textContent = text;
    return n;
  }

  var nav = el("nav", { "class": "snav", id: "snav", "aria-label": "All lessons" });
  var head = el("div", { "class": "snav-head" });
  head.appendChild(el("a", { href: "index.html" }, "Learn Claude Code"));
  head.appendChild(el("p", {}, "Tanglish · CCDV-F track"));
  nav.appendChild(head);

  var body = el("div", { "class": "snav-body" });
  var lastGroup = "";
  var sectionLinks = [];

  PAGES.forEach(function (p, i) {
    if (p.group !== lastGroup) {
      body.appendChild(el("div", { "class": "snav-group" }, p.group));
      lastGroup = p.group;
    }
    var isHere = p.file.toLowerCase() === here;
    var row = el("div", { "class": "snav-page" + (isHere ? " current" : "") });
    var link = el("a", { href: isHere ? "#" : p.file }, p.title);
    if (isHere) {
      link.setAttribute("aria-current", "page");
      link.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0 }); close(); });
    }
    row.appendChild(link);
    body.appendChild(row);

    if (!p.sections.length) return;
    var listId = "snav-secs-" + i;
    var tog = el("button", { "class": "snav-tog", type: "button", "aria-expanded": String(isHere), "aria-controls": listId, "aria-label": "Show sections of " + p.title }, "▶");
    row.appendChild(tog);

    var list = el("ul", { "class": "snav-secs", id: listId });
    list.hidden = !isHere;
    p.sections.forEach(function (s) {
      var li = el("li");
      var a = el("a", { href: (isHere ? "" : p.file) + "#" + s[0] }, s[1]);
      if (isHere) {
        a.dataset.target = s[0];
        sectionLinks.push(a);
      }
      a.addEventListener("click", close);
      li.appendChild(a);
      list.appendChild(li);
    });
    body.appendChild(list);

    tog.addEventListener("click", function () {
      list.hidden = !list.hidden;
      tog.setAttribute("aria-expanded", String(!list.hidden));
    });
  });

  nav.appendChild(body);

  var btn = el("button", { "class": "snav-btn", type: "button", "aria-controls": "snav", "aria-expanded": "false" }, "☰ Menu");
  var shade = el("div", { "class": "snav-shade" });
  shade.hidden = true;

  function open() { nav.classList.add("open"); shade.hidden = false; btn.setAttribute("aria-expanded", "true"); }
  function close() { nav.classList.remove("open"); shade.hidden = true; btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", function () { nav.classList.contains("open") ? close() : open(); });
  shade.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

  document.body.classList.add("has-snav");
  document.body.appendChild(shade);
  document.body.appendChild(nav);
  document.body.appendChild(btn);

  // Highlight the section currently on screen.
  var targets = sectionLinks
    .map(function (a) { return document.getElementById(a.dataset.target); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && targets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        sectionLinks.forEach(function (a) { a.classList.toggle("active", a.dataset.target === en.target.id); });
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  }

  // Arriving from another page with #section: make sure we land on it.
  if (location.hash.length > 1) {
    var t = document.getElementById(location.hash.slice(1));
    if (t) setTimeout(function () { t.scrollIntoView(); }, 0);
  }
})();
