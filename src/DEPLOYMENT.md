# Portfolio Deployment Guide

## 🚀 GitHub Setup & Deployment

### Step 1: Initialize Git Repository

```bash
# Initialize git in your project folder
git init

# Create a .gitignore file
echo "node_modules/
.DS_Store
dist/
.env
.env.local" > .gitignore

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website with admin panel"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in top-right → "New repository"
3. Name it: `portfolio-website` (or your preferred name)
4. Keep it **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push your code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `portfolio-website` repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

---

## 🔧 Alternative Deployment Options

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Your site will be available at: `https://YOUR_USERNAME.github.io/portfolio-website`

---

## 📝 Managing Portfolio Content

### Admin Panel Access

**Secret Shortcut**: Press `Ctrl + Shift + A` (Windows/Linux) or `Cmd + Shift + A` (Mac) from anywhere on your portfolio to access the admin panel.

### Features:

1. **Contact Information**: Update name, email, phone, social links, profile image
2. **Projects**: Add, edit, delete projects; mark as featured
3. **Experience**: Manage work history
4. **Education**: Update degrees and certifications
5. **Skills & Hobbies**: Modify skill categories and hobbies
6. **Clients & Testimonials**: Update client list and testimonials
7. **Export/Import**: Download/upload portfolio data as JSON

### Data Storage

- **Local**: Data is saved to `localStorage` in your browser
- **Export**: Download JSON backup of all your data
- **Import**: Upload previously exported JSON to restore data

### For Production Use (Future Enhancement)

To make data persistent across devices, integrate with:

1. **Notion API**: Connect to Notion database
2. **Supabase**: Use Supabase as backend
3. **Firebase**: Store data in Firestore
4. **Custom API**: Build your own backend

---

## 🔐 Security Notes

### Protecting Admin Panel

For production, consider adding authentication:

```typescript
// Example: Password protection
const ADMIN_PASSWORD = 'your-secret-password';

// In AdminPanel.tsx, add a login check
const [authenticated, setAuthenticated] = useState(false);

if (!authenticated) {
  return <LoginForm onLogin={() => setAuthenticated(true)} />;
}
```

### Environment Variables

For sensitive data (API keys, passwords):

1. Create `.env` file:
```
VITE_ADMIN_PASSWORD=your_password_here
VITE_API_KEY=your_api_key_here
```

2. Access in code:
```typescript
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;
```

3. Add to Vercel/Netlify dashboard under "Environment Variables"

---

## 📊 Analytics Integration

### Google Analytics

```bash
npm install react-ga4
```

```typescript
// In main.tsx or App.tsx
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');
ReactGA.send('pageview');
```

---

## 🔄 Continuous Deployment

Once connected to Vercel/Netlify:

1. Make changes to your code
2. Commit: `git add . && git commit -m "Update content"`
3. Push: `git push`
4. Your site automatically redeploys! ✨

---

## 📱 Custom Domain

### On Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `ajaykumar.com`)
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### On Netlify:

1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS
4. SSL is automatic

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod
```

---

## 📦 Project Structure

```
portfolio-website/
├── /components/
│   ├── AdminPanel.tsx       # Content management panel
│   ├── Resume.tsx           # Resume page
│   ├── Portfolio.tsx        # Portfolio page
│   └── /ui/                 # Shadcn UI components
├── /data/
│   └── portfolio-data.ts    # Centralized data store
├── /styles/
│   └── globals.css          # Global styles
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── package.json
```

---

## 🎯 Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel/Netlify
3. ✅ Access admin panel (Ctrl+Shift+A)
4. ✅ Update your content
5. ✅ Add custom domain (optional)
6. ✅ Set up analytics (optional)
7. ✅ Share your portfolio!

---

## 🆘 Troubleshooting

### Build Fails

- Check `package.json` for correct dependencies
- Ensure all imports are correct
- Run `npm install` to update dependencies

### Admin Panel Not Working

- Make sure you're pressing the correct keyboard shortcut
- Check browser console for errors
- Clear localStorage and refresh

### Images Not Loading

- Verify image URLs are accessible
- Check for CORS issues
- Use HTTPS URLs for production

---

## 📧 Support

For issues or questions:
- Check the code comments
- Review this documentation
- Open an issue on GitHub

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Shadcn UI**
