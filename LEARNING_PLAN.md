# AI Coding Tools — Learning Plan

**Start date:** 2026-10-13
**Goal:** Claude Code, Codex, Cursor, Gemini CLI — ellathukkum common fundamentals kathukkanum,
interview-la confident-ah pesanum.

---

## Level 0 — Foundation (Terminal + Git)
_Why: AI pala files-ah orey nerathula maathum. Git illana thirumba poga mudiyaadhu._
- [ ] Terminal basics: `pwd`, `ls`, `cd`, `mkdir`, `cat`
- [ ] `git init`, `git status`, `git add`, `git commit`
- [ ] `git diff` — enna maaruchu nu paakuradhu
- [ ] `git log`, `git checkout .` / `git restore` — undo pannuradhu
- [ ] `git branch`, `git checkout -b` — experiment-ku thani branch

## Level 1 — Claude Code Basics
- [ ] `claude` start pannuradhu, first prompt
- [ ] Permission modes (default / accept edits / plan) — Shift+Tab
- [ ] `@file` mention — specific file-ah point pannuradhu
- [ ] `/clear`, `/help`, `/init` commands
- [ ] Practice: `todo-api` — GET /todos + test

## Level 2 — Context
- [ ] Context window na enna, yen long chat-la quality kuraiyum
- [ ] `CLAUDE.md` ezhudhuradhu (commands, rules, conventions)
- [ ] Nalla prompt structure: Goal + Location + Constraints + Done criteria
- [ ] Practice: vague prompt vs clear prompt — result compare

## Level 3 — Workflow (Plan → Small steps → Verify → Review)
- [ ] Plan mode use panni feature plan pannuradhu
- [ ] Chinna steps + ovvoru step-kkum commit
- [ ] Tests vachu verify (agentic loop: edit → test → fix)
- [ ] Code review checklist: security, edge cases, hallucinated APIs, duplicate code
- [ ] Practice: bug fix (failing test first) + puthu feature full cycle

## Level 4 — Advanced Claude Code
- [ ] Custom slash commands / skills
- [ ] Hooks (e.g., edit pannadhum auto format / lint)
- [ ] MCP servers — external tools connect pannuradhu (GitHub, DB, browser)
- [ ] Subagents — parallel / focused tasks
- [ ] Git worktrees — pala tasks orey nerathula
- [ ] Headless mode (`claude -p`) — scripts / CI-la use pannuradhu

## Level 5 — Other Tools (Same fundamentals)
- [ ] Codex CLI — `AGENTS.md`, adhe task-ah pannuradhu
- [ ] Cursor — rules, agent mode (Ctrl+I), inline edit (Ctrl+K)
- [ ] Gemini CLI — install, `GEMINI.md`
- [ ] Moonu tool-um compare: plan quality, code quality, rules follow pannucha

## Level 6 — Interview Prep
- [ ] "Vibe coding vs AI-assisted engineering" — explain pannuradhu
- [ ] Unga workflow-ah 2 nimishathula solluradhu
- [ ] Sondha project-la irundhu 2 real examples ready pannuradhu
- [ ] Mock interview (Claude interviewer-ah kekkum)

## Level 7 — CCDV-F Certification (Claude Certified Developer – Foundations)
_Why: Exam-la Claude Code 3.1% mattum. Core = Claude API + agents + MCP (Python/TypeScript). Roadmap: `ccdvf-roadmap.html`_
- [ ] Claude API 101: Messages API, system prompt, tokens, models, streaming
- [ ] Prompt & context engineering: few-shot, structured output, validation
- [ ] Tool use: function-calling loop, error handling
- [ ] MCP server build (tools, resources, prompts, stdio)
- [ ] Cost & performance: prompt caching, Batch API, thinking/effort, model selection
- [ ] Agents: Agent SDK, workflow vs agent, subagents, memory
- [ ] Security: prompt injection, secrets, least privilege, guardrails
- [ ] Capstone app + mock exam

---

## Lesson pages (browser-la open pannunga)
**Main hub (left menu-la ellaa pages + sections):** `index.html` → https://claude.ai/artifact/5jasSKNsw1GYWL2qZB3CFb
Puthu page add pannina `nav.js`-la `PAGES` list-la oru entry + hub-la oru card serkkanum, apram hub-ah republish.

| File | Topic | Standalone link |
|---|---|---|
| `lesson-00-ai-basics.html` | **Start here:** model, token, context window, tool, agent basics | (hub-la) |
| `practice-lab.html` | **57 practice tasks** (Setup → Capstone), progress tick | (hub-la) |
| `ai-coding-path.html` | AI Coding Master Path (overview, L0–L6, flashcards) | (hub-la) |
| `lesson-01-terminal.html` | Terminal basics (reference) | https://claude.ai/artifact/L7mRQHq7kJhcNxrya23wLJ |
| `lesson-02-claude-code-basics.html` | Level 1: Claude Code basics | https://claude.ai/artifact/T4qPdXwx5kCNFaQ2SNww6S |
| `lesson-03-claude-code-advanced.html` | Level 4: Skills, Subagents, Hooks, MCP, Plugins, headless | https://claude.ai/artifact/1ZMcu3A17gKXaN2tYpjQUG |
| `ccdvf-roadmap.html` | CCDV-F exam domains + study order | https://claude.ai/artifact/Ljkcvvfyu1Z2ZvW2dYM9XY |
| `lesson-04-claude-api-101.html` | Claude API 101 | (hub-la) |
| `lesson-05-models-cost.html` | Models & cost: thinking, effort, caching, batch | (hub-la) |
| `lesson-06-prompt-context.html` | Prompt & context engineering | (hub-la) |
| `lesson-07-tool-use.html` | Tool use | (hub-la) |
| `lesson-08-mcp-server.html` | Build an MCP server | (hub-la) |
| `lesson-09-agents.html` | Agents & workflows, Agent SDK, Managed Agents | (hub-la) |
| `lesson-10-security.html` | Security & safety | (hub-la) |
| `lesson-11-evals-debugging.html` | Evals & debugging | (hub-la) |
| `lesson-12-claude-ecosystem.html` | Claude ecosystem (surfaces, cloud) | (hub-la) |
| `lesson-13-claude-code-extras.html` | Claude Code extras (GH Actions, IDE, cloud, worktrees) | (hub-la) |
| `lesson-14-capstone-mock-exam.html` | Capstone + 30-question mock exam | (hub-la) |

---

## Notes
- 2026-10-14: Student wants Claude Code + CCDV-F certification level. Lessons HTML pages-aa create pannanum (pazhaiya pages delete pannaadhe). Next: lesson-02 practice (todo-api) → lesson-03 practice → Claude API 101.
- 2026-10-14: Lessons 04–14 added (TypeScript, CCDV-F mapped). Order: 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10 → 11 → 12 → 13 → 14 mock exam.
_Ovvoru lesson-la kathukitta mukkiyamaana points inga add aagum._
