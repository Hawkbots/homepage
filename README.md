# HawkBots // FRC Team 4619 — Homepage

The website for Ocean View High School's FIRST Robotics Competition team.

This guide assumes you have never worked on a website before. Follow the steps in order the first time; after that you only need [Making a change](#making-a-change).

## How the site works

The whole site is four files. There is nothing to install, compile, or build.

| File | What it is |
|------|------------|
| `index.html` | All the words, links, and pictures on the page. Most edits happen here. |
| `styles.css` | Colors, fonts, and layout. The team colors are near the top (`--red`, `--gold`, …). |
| `script.js` | Small effects: the mobile menu, sections fading in as you scroll, and the title "glitch". |
| `assets/logo.png` | The team logo (also the little icon in the browser tab). |

The site is hosted for free by **GitHub Pages**. GitHub watches the `main` branch of this repository, and whenever it changes, it republishes the website automatically.

> **Important:** anything pushed to `main` goes live for the whole world within a few minutes. There is no "draft" or "staging" copy. Always preview your change on your own computer first (see step 3 below).

## One-time setup

### 1. Get access to the repository

You need a free [GitHub account](https://github.com/signup). Ask a team lead or mentor to add your account to the **Hawkbots** organization with write access to the `homepage` repository. Without this you can look at the code but you can't publish changes.

### 2. Install the tools

- **Git**, which tracks changes and sends them to GitHub. Download it from [git-scm.com](https://git-scm.com/downloads). On a Mac you can also open Terminal and run `git --version`; if Git is missing, macOS will offer to install it.
- **A text editor.** [Visual Studio Code](https://code.visualstudio.com/) is a good free choice. (Word or Google Docs won't work; they add hidden formatting.)
- **A web browser** for previewing. Any modern one is fine.
- **Optional: Claude Code**, an AI assistant that can make edits for you (see [Using Claude Code](#using-claude-code)). Installation instructions are at [docs.claude.com](https://docs.claude.com/en/docs/claude-code/overview).

### 3. Let Git sign in to GitHub

The simplest way is the [GitHub CLI](https://cli.github.com/). After installing it, open a terminal and run:

```sh
gh auth login
```

Pick **GitHub.com**, then **HTTPS**, then **Login with a web browser**, and follow the prompts. (If you already use SSH keys with GitHub, that works too.)

### 4. Download a copy of the site

In a terminal, go to the folder where you keep projects and run:

```sh
git clone https://github.com/Hawkbots/homepage.git
cd homepage
```

You now have your own copy of the site in a folder called `homepage`.

> **What's a terminal?** It's the text window where you type commands. On Mac, open the **Terminal** app. On Windows, use **Git Bash** (installed along with Git). In VS Code, choose **Terminal → New Terminal** from the menu.

## Making a change

Do these steps every time you want to update the site.

### 1. Get the latest version

Someone else may have changed the site since you last worked on it. From inside the `homepage` folder, run:

```sh
git pull
```

### 2. Edit the files

Open the `homepage` folder in your editor and make your changes, usually in `index.html`, then save.

Some parts of the page still contain placeholder text in square brackets, like `[TEAM EMAIL]` or `[ROBOT NAME]`. To list them all, run:

```sh
grep -n "\[" index.html
```

When you replace a placeholder, search for any other copies of it too. `[TEAM EMAIL]`, for example, appears in more than one place.

### 3. Preview it on your computer

Double-click `index.html` to open it in your browser. After every edit, save the file and refresh the browser to see the change. Check that:

- your change looks right,
- nothing else on the page broke,
- it still looks good on a phone. Make the browser window narrow, or use your browser's device preview (in Chrome, press F12 and click the phone icon).

### 4. Publish it

When you're happy with the change, run these three commands:

```sh
git add -A
git commit -m "Describe what you changed, e.g. Add 2027 season results"
git push
```

- `git add -A` gathers up all your changes.
- `git commit -m "..."` saves them as a snapshot with a short note about what you did.
- `git push` sends the snapshot to GitHub. **This is the step that publishes the site.**

### 5. Check the live site

Wait a few minutes, then open the live site and refresh. If you don't see your change yet, try a hard refresh (**Ctrl+Shift+R** on Windows, **Cmd+Shift+R** on Mac), since browsers sometimes show an old saved copy.

To watch the publishing progress, open the repository on GitHub and click the **Actions** tab. A green check means the site is live; a red X means something went wrong.

## Using Claude Code

Claude Code is an AI assistant that runs in your terminal and can read and edit the files for you. Start it from inside the `homepage` folder:

```sh
claude
```

Then describe what you want in plain English, for example:

- "Add our 2027 regional results to the season log."
- "Replace the [TEAM EMAIL] placeholders with hawkbots@example.com."
- "Make the sponsor section look better on phones."

Things to know:

- Claude reads `CLAUDE.md` in this folder, which explains how the site is put together, so you don't have to.
- Claude may ask your permission before it edits files or runs commands. Read what it's about to do before you approve it.
- **Claude can commit and push for you, and pushing publishes the site.** Preview the change in your browser (step 3 above) before you tell it to push.

## If something goes wrong

- **`git push` is rejected and mentions "fetch first" or "non-fast-forward":** someone else pushed a change while you were working. Run `git pull`, preview again, then `git push`.
- **`git push` says "permission denied" or "403":** your GitHub account doesn't have write access yet (see setup step 1), or you aren't signed in (setup step 3).
- **You published a mistake:** fix it and push again; the site updates in a few minutes. Every past version is saved in Git, so nothing is ever truly lost. Ask a mentor (or Claude) for help undoing a change.
