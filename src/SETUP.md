# 🚀 Quick Setup Guide

Follow these steps to get your portfolio live in under 10 minutes!

## ✅ Pre-Deployment Checklist

Before deploying, update your personal information:

### 1. Access Admin Panel
Press **`Ctrl + Shift + A`** on your keyboard

### 2. Update Contact Information
- ✏️ Change name to yours
- 📧 Update email address
- 📱 Update phone number
- 🌐 Update social media links
- 🖼️ Upload your profile photo (use a photo hosting service like Imgur, Cloudinary, or even Google Drive)

### 3. Update Projects
- 📝 Edit project titles and descriptions
- 🖼️ Upload project screenshots/images
- ⭐ Mark your top 3 projects as "Featured"
- 🗑️ Delete sample projects you don't need

### 4. Update Experience
- 💼 Add/edit your work experience
- ✨ Update achievements and highlights
- 📅 Ensure dates are correct

### 5. Update Education & Skills
- 🎓 Update your degree information
- 💻 Add your actual skills
- 🏆 Add your certifications

### 6. Save Everything
Click **"Save Changes"** button in the admin panel

---

## 📤 GitHub Setup (5 minutes)

### Step 1: Create GitHub Account
If you don't have one: [github.com/join](https://github.com/join)

### Step 2: Create New Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or any name you like)
3. Description: "My UX/UI Designer Portfolio"
4. Choose **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize this repository with a README"
6. Click **"Create repository"**

### Step 3: Push Your Code

Open terminal/command prompt in your project folder:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: My portfolio website"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ **Your code is now on GitHub!**

---

## 🌐 Deploy to Vercel (Recommended - 3 minutes)

### Why Vercel?
- ✅ Free forever for personal projects
- ✅ Automatic deployments on every push
- ✅ Free HTTPS/SSL
- ✅ Global CDN (fast worldwide)
- ✅ Custom domain support

### Steps:

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign up** with your GitHub account

3. **Import your repository**
   - Click "Add New..." → "Project"
   - Find your `portfolio` repository
   - Click "Import"

4. **Configure** (usually auto-detected)
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy!**
   - Click "Deploy"
   - Wait 1-2 minutes
   - 🎉 **Your site is live!**

6. **Copy your URL**
   - You'll get: `https://your-portfolio-xxx.vercel.app`
   - Share this URL on your resume, LinkedIn, etc.

### Add Custom Domain (Optional)

1. Buy domain from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), etc.
2. In Vercel: Project Settings → Domains
3. Add your domain (e.g., `ajaykumar.design`)
4. Update DNS as instructed
5. Wait for SSL certificate (automatic, ~5 minutes)

---

## 🔄 Making Updates

### From Admin Panel (No Code)

1. Press **Ctrl+Shift+A** to open admin
2. Make your changes
3. Click "Save Changes"
4. **Export JSON** (backup your data)
5. To deploy changes: (see below)

### Deploy Updates

#### Method 1: Push to GitHub (Recommended)
```bash
git add .
git commit -m "Update portfolio content"
git push
```
Vercel will automatically deploy in 1-2 minutes!

#### Method 2: Direct Upload to Vercel
1. Run `npm run build`
2. In Vercel dashboard: Deployments → Upload `dist` folder

---

## 📱 Alternative: Deploy to Netlify

### Steps:

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up** with GitHub
3. **Add new site** → Import from Git
4. **Select** your repository
5. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy!**

---

## 🔐 Upload Your Resume PDF

### Option 1: Google Drive (Free, Easy)

1. Upload PDF to Google Drive
2. Right-click → "Get link" → "Anyone with the link can view"
3. Copy the sharing link
4. Admin Panel → Contact tab → Resume PDF URL
5. Paste: `https://drive.google.com/file/d/YOUR_FILE_ID/view`

### Option 2: Dropbox

1. Upload to Dropbox
2. Get public link
3. Replace `dl=0` with `dl=1` in the URL
4. Paste in admin panel

### Option 3: Host on Your Vercel Site

1. Create `/public/resume.pdf` in your project
2. Add your PDF there
3. Resume PDF URL: `/resume.pdf`
4. Commit and push to GitHub

---

## 🖼️ Upload Profile Photo

### Option 1: Imgur (Free, No Account Needed)

1. Go to [imgur.com/upload](https://imgur.com/upload)
2. Upload your photo
3. Right-click on image → "Copy image address"
4. Paste URL in Admin Panel → Contact → Profile Image URL

### Option 2: Cloudinary (Professional)

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Upload image
3. Copy public URL
4. Paste in admin panel

### Option 3: GitHub Repository

1. Add image to `/public/images/profile.jpg`
2. Commit and push
3. Profile Image URL: `/images/profile.jpg`

---

## 📊 Add Analytics (Optional)

### Google Analytics

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create account/property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Vercel**
   - Project Settings → Environment Variables
   - Add: `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Redeploy

3. **Install Package**
```bash
npm install react-ga4
```

4. **Initialize in `main.tsx`**
```typescript
import ReactGA from 'react-ga4';

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID || '');
ReactGA.send('pageview');
```

---

## ✅ Post-Deployment Checklist

- [ ] Portfolio is live and accessible
- [ ] All personal information is updated
- [ ] Profile photo is loading correctly
- [ ] Projects are showing with images
- [ ] Resume PDF downloads correctly
- [ ] Social media links work
- [ ] Mobile responsive (test on phone)
- [ ] Admin panel accessible (Ctrl+Shift+A)
- [ ] Exported JSON backup saved locally

---

## 🎯 Share Your Portfolio

Add your new portfolio URL to:

- ✅ LinkedIn profile
- ✅ GitHub profile README
- ✅ Email signature
- ✅ Resume/CV
- ✅ Twitter/X bio
- ✅ Business cards
- ✅ Job applications

---

## 🆘 Common Issues

### "npm: command not found"
**Solution**: Install Node.js from [nodejs.org](https://nodejs.org)

### Git errors
**Solution**: Install Git from [git-scm.com](https://git-scm.com)

### Build fails on Vercel/Netlify
**Solution**: 
1. Check build logs
2. Ensure `package.json` has all dependencies
3. Try locally: `npm run build`

### Images not loading
**Solution**: 
- Use direct image URLs (not Google Drive preview links)
- Ensure URLs start with `https://`
- Test URLs in browser first

### Admin panel won't open
**Solution**: 
- Hard refresh: Ctrl+Shift+R
- Clear browser cache
- Try different browser

---

## 🎓 Learning Resources

### Want to customize further?

- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React**: [react.dev](https://react.dev)
- **TypeScript**: [typescriptlang.org](https://typescriptlang.org)
- **Shadcn UI**: [ui.shadcn.com](https://ui.shadcn.com)

---

## 💡 Pro Tips

1. **Regular Backups**: Export JSON weekly
2. **Test Changes Locally**: Run `npm run dev` before pushing
3. **Optimize Images**: Use compressed images for faster loading
4. **SEO**: Update page title and meta description in `index.html`
5. **Performance**: Test with [PageSpeed Insights](https://pagespeed.web.dev)

---

## 🎉 You're Done!

Your professional portfolio is now live! 🚀

**Questions?** Check:
- [README.md](./README.md) - Detailed documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide

---

**Need help?** Open an issue on GitHub or reach out!

Good luck with your job search! 💼✨
