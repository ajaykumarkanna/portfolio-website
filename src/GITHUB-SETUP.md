# 🚀 GitHub Repository Setup - Complete Guide

This guide will help you push your portfolio to GitHub in 3 simple steps.

---

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ [Git installed](https://git-scm.com/downloads) - Check with `git --version`
- ✅ [GitHub account](https://github.com/join) - Free to create
- ✅ Terminal/Command Prompt access

---

## 🎯 Step 1: Create GitHub Repository

### Via GitHub Website

1. **Go to GitHub**: [github.com/new](https://github.com/new)

2. **Fill in repository details**:
   ```
   Repository name: portfolio-website
   Description: My Professional UX/UI Designer Portfolio
   Visibility: ○ Public  ● Private (your choice)
   
   ⚠️ DO NOT check these:
   ☐ Add a README file
   ☐ Add .gitignore
   ☐ Choose a license
   ```

3. **Click "Create repository"**

4. **Copy the repository URL** shown on the next page:
   ```
   https://github.com/YOUR_USERNAME/portfolio-website.git
   ```
   Keep this handy!

---

## 🎯 Step 2: Initialize Git Locally

Open your terminal/command prompt in your project folder:

### On Windows:
1. Navigate to project folder in File Explorer
2. Type `cmd` in the address bar
3. Press Enter

### On Mac/Linux:
1. Open Terminal
2. Navigate: `cd /path/to/your/portfolio-website`

### Initialize Git

Run these commands one by one:

```bash
# 1. Initialize git repository
git init

# 2. Check git status (you should see all your files)
git status

# 3. Add all files to staging
git add .

# 4. Commit files
git commit -m "Initial commit: Portfolio website with admin panel"

# 5. Rename branch to main (modern standard)
git branch -M main
```

---

## 🎯 Step 3: Push to GitHub

```bash
# 1. Add GitHub as remote origin
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 2. Push your code to GitHub
git push -u origin main
```

### First-Time Push Authentication

GitHub will ask for credentials:

#### Option A: Personal Access Token (Recommended)

1. **Generate token**:
   - Go to [github.com/settings/tokens](https://github.com/settings/tokens)
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: "Portfolio Website Access"
   - Select scopes: ✅ `repo`
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Use token as password**:
   ```
   Username: your-github-username
   Password: paste-your-token-here
   ```

#### Option B: GitHub CLI (Easiest)

```bash
# Install GitHub CLI
# Windows (via winget): winget install GitHub.cli
# Mac (via Homebrew): brew install gh
# Linux: See https://cli.github.com/

# Authenticate
gh auth login

# Follow the prompts (choose HTTPS, login via browser)
```

---

## ✅ Verify Success

1. **Refresh your GitHub repository page**
2. **You should see all your files!** 🎉

Your repository is now live at:
```
https://github.com/YOUR_USERNAME/portfolio-website
```

---

## 🔄 Future Updates

After making changes to your portfolio:

```bash
# 1. Check what changed
git status

# 2. Add changes
git add .

# 3. Commit with descriptive message
git commit -m "Update: Added new project to portfolio"

# 4. Push to GitHub
git push
```

---

## 🌐 Next: Deploy Your Website

Now that your code is on GitHub, deploy it:

### Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select your `portfolio-website` repository
5. Click "Import"
6. Click "Deploy"
7. Wait 2 minutes → **Your site is live!** 🚀

Your URL will be: `https://portfolio-website-xxxxx.vercel.app`

### Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub → Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

---

## 🎨 Enable GitHub Pages (Free Hosting)

Host directly on GitHub (free forever):

### Enable Pages

1. Go to repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Source: **GitHub Actions**
5. The workflow file is already in your repo (`.github/workflows/deploy.yml`)
6. Push any change to trigger deployment:
   ```bash
   git commit --allow-empty -m "Trigger GitHub Pages"
   git push
   ```
7. Wait 2-3 minutes
8. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/portfolio-website
   ```

### Custom Domain on GitHub Pages

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In GitHub repo Settings → Pages → Custom domain
3. Enter your domain: `www.yourname.com`
4. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
5. Wait for DNS propagation (5-60 minutes)
6. ✅ Enable "Enforce HTTPS"

---

## 🔧 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

### Error: "Permission denied"
- Check your GitHub username is correct
- Regenerate Personal Access Token
- Make sure token has `repo` scope

### Error: "git: command not found"
- Install Git: [git-scm.com/downloads](https://git-scm.com/downloads)
- Restart terminal after installation

### Error: "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```

### Can't remember GitHub password
- Use Personal Access Token (not your GitHub password)
- Generate new token: [github.com/settings/tokens](https://github.com/settings/tokens)

---

## 📚 Git Commands Cheat Sheet

```bash
# Check status
git status

# Add all files
git add .

# Add specific file
git add filename.txt

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout branch-name

# Merge branch
git merge branch-name

# Discard local changes
git checkout -- filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

## 🎓 Learn More

### Git Resources
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

### Video Tutorials
- [Git & GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [GitHub Pages Tutorial](https://www.youtube.com/watch?v=QyFcl_Fba-k)

---

## 💡 Pro Tips

1. **Commit Often**: Make small, frequent commits with clear messages
2. **Use Branches**: Create branches for big changes (`git checkout -b feature-name`)
3. **Write Good Commit Messages**: 
   ```
   ✅ "Add: New project to portfolio"
   ✅ "Fix: Contact form validation bug"
   ✅ "Update: Profile photo and bio"
   ❌ "Update"
   ❌ "Changes"
   ❌ "asdfasdf"
   ```
4. **Pull Before Push**: Always `git pull` before `git push` when working from multiple devices
5. **Use .gitignore**: Never commit sensitive data (passwords, API keys, etc.)

---

## 🎉 Success!

Your portfolio is now:
- ✅ Backed up on GitHub
- ✅ Version controlled
- ✅ Ready to deploy
- ✅ Shareable with employers

**Next Steps:**
1. Read [SETUP.md](./SETUP.md) for deployment guide
2. Access admin panel (Ctrl+Shift+A) to update content
3. Share your live portfolio URL!

---

**Questions?** Open an issue on GitHub or check [README.md](./README.md)

**Good luck with your portfolio!** 🚀✨
