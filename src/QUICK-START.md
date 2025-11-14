# ⚡ Quick Start - Get Live in 10 Minutes

Follow these steps to get your portfolio live ASAP!

---

## ✅ Step 1: Update Your Content (3 minutes)

### Press `Ctrl + Shift + A` to open admin panel

Update these tabs in order:

1. **Contact Tab**
   - Your name
   - Your email
   - Your phone
   - Your social links
   - Profile image URL
   - Resume PDF URL

2. **Projects Tab**
   - Delete sample projects
   - Add your real projects
   - Mark top 3 as "Featured"

3. **Experience Tab**
   - Update with your work history

4. **Save Changes**
   - Click "Save" button
   - Click "Export" (backup)

---

## ✅ Step 2: Push to GitHub (3 minutes)

```bash
# In your project folder terminal:

# 1. Initialize git
git init

# 2. Add files
git add .

# 3. First commit
git commit -m "Initial commit: My portfolio"

# 4. Create repo on GitHub
# Go to: github.com/new
# Name it: portfolio
# Don't initialize with anything
# Click "Create repository"

# 5. Connect and push (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**✅ Code is now on GitHub!**

---

## ✅ Step 3: Deploy to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Use GitHub
3. Click "Add New..." → "Project"
4. Select your `portfolio` repository
5. Click "Import"
6. Click "Deploy"
7. Wait ~90 seconds
8. **🎉 Your site is LIVE!**

Copy your URL: `https://portfolio-xxx.vercel.app`

---

## ✅ Step 4: Share (1 minute)

Add your new portfolio URL to:
- LinkedIn profile
- Resume/CV
- Email signature
- GitHub profile

---

## 🎯 That's It!

Your portfolio is now:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Auto-deploys on every update
- ✅ Free to host

---

## 🔄 Making Updates Later

### Update Content:
1. Press `Ctrl + Shift + A`
2. Edit in admin panel
3. Save changes
4. Export JSON (backup)

### Deploy Updates:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel auto-deploys in 2 minutes!

---

## 🆘 Stuck?

### Can't access admin panel?
- Press `Ctrl + Shift + A` (or `Cmd + Shift + A` on Mac)
- Refresh page first

### Git commands not working?
- Install Git: [git-scm.com/downloads](https://git-scm.com/downloads)
- Restart terminal

### GitHub authentication?
- Create Personal Access Token: [github.com/settings/tokens](https://github.com/settings/tokens)
- Use token as password

### Build failing?
```bash
npm install
npm run build
```

---

## 📚 Detailed Guides

- Full setup: [SETUP.md](./SETUP.md)
- GitHub help: [GITHUB-SETUP.md](./GITHUB-SETUP.md)
- Deployment: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Everything: [README.md](./README.md)

---

## 💡 Quick Tips

### Upload Profile Photo
1. Upload to [imgur.com/upload](https://imgur.com/upload)
2. Copy image URL
3. Admin Panel → Contact → Profile Image URL

### Upload Resume PDF
1. Upload to Google Drive
2. Right-click → Get shareable link
3. Admin Panel → Contact → Resume PDF URL

### Custom Domain
1. Buy domain (Namecheap, GoDaddy)
2. Vercel → Settings → Domains
3. Follow DNS instructions

---

**⏱️ Total Time: ~10 minutes**

**✅ Result: Professional portfolio live online!**

---

🎉 **Congratulations!** Your portfolio is live!

Now share it with the world! 🚀
