# ⚡ Quick Command Reference

Copy-paste these commands for fast deployment!

---

## 🚀 GitHub + Vercel Deployment (5 Minutes)

### Step 1: Create GitHub Repo

Go to: https://github.com/new

- Repository name: `portfolio-website`
- Description: `Professional UX/UI Designer Portfolio`
- Visibility: Public or Private (your choice)
- ⚠️ DO NOT check: README, .gitignore, license
- Click "Create repository"

---

### Step 2: Push Code to GitHub

**Open terminal in your project folder** and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional portfolio with admin panel"

# Rename to main branch
git branch -M main

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

---

### Step 3: Deploy to Vercel

**Option A: Via Website (Easiest)**

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select `portfolio-website`
5. Click "Deploy"
6. **Done!** ✨

**Option B: Via CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

---

## 🔄 Future Updates

After making changes:

```bash
# Check changes
git status

# Add changes
git add .

# Commit with message
git commit -m "Update: [describe your changes]"

# Push to GitHub (auto-deploys!)
git push
```

---

## 📝 Development Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## 🔧 Useful Git Commands

```bash
# View commit history
git log

# Check current branch
git branch

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# Pull latest changes
git pull

# Clone repository
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
```

---

## 🆘 Fix Common Issues

### "Remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
```

### "Updates were rejected"

```bash
git pull origin main --rebase
git push origin main
```

### "Nothing to commit"

```bash
git add .
git commit -m "Your commit message"
```

### Reset to last commit

```bash
# Keep changes
git reset --soft HEAD~1

# Discard changes
git reset --hard HEAD~1
```

---

## 📊 Deployment URLs

After deployment, your portfolio will be at:

**Vercel**: `https://portfolio-website-xxxxx.vercel.app`
**Netlify**: `https://portfolio-website-xxxxx.netlify.app`
**GitHub Pages**: `https://YOUR_USERNAME.github.io/portfolio-website`

---

## 🎮 Admin Panel

**Access**: Press `Ctrl + Shift + A` (Windows/Linux) or `Cmd + Shift + A` (Mac)

**Works on**: Any page of your portfolio

---

## 🌐 Routes

- **Home**: `/` or just your domain
- **Portfolio**: `/portfolio`
- **Admin**: `Ctrl+Shift+A` keyboard shortcut

---

## 💾 Backup Data

**Export**:
1. Open Admin Panel (`Ctrl+Shift+A`)
2. Click "Export Data"
3. Save JSON file

**Import**:
1. Open Admin Panel
2. Click "Import Data"
3. Upload JSON file

---

## 🎯 One-Command Deploy

If you use GitHub Desktop:

1. Download: https://desktop.github.com
2. File → Add Local Repository
3. Publish to GitHub
4. Go to vercel.com → Import → Deploy

**That's it!** 🎉

---

## 📱 Test Your Site

### Checklist:

```bash
# Home page
open https://your-site.vercel.app/

# Portfolio page
open https://your-site.vercel.app/portfolio

# Test admin panel
# Press Ctrl+Shift+A on the site

# Test on mobile
# Open on your phone
```

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repos**: https://github.com/YOUR_USERNAME
- **Netlify Dashboard**: https://app.netlify.com
- **GitHub Desktop**: https://desktop.github.com

---

## 🚀 Complete Deploy Script

**Copy-paste this entire block:**

```bash
# 1. Initialize and commit
git init
git add .
git commit -m "Initial commit: Professional UX/UI portfolio"
git branch -M main

# 2. Add remote (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 3. Push
git push -u origin main

# 4. Now go to vercel.com and import your repo!
echo "✅ Code pushed to GitHub!"
echo "🌐 Next: Go to vercel.com to deploy"
```

**Don't forget** to replace `YOUR_USERNAME` with your actual GitHub username!

---

## 💡 Pro Tip

**Bookmark these commands** for quick reference!

Add this to your terminal profile:

```bash
# Quick deploy alias
alias deploy="git add . && git commit -m 'Update' && git push"

# Usage:
deploy
```

---

## ✨ That's All You Need!

Three simple steps:
1. `git push` → Push to GitHub
2. Go to `vercel.com` → Import repo
3. Click "Deploy" → **Live!** 🎉

**Good luck!** 🚀
