# 🎨 Professional UX/UI Designer Portfolio

A modern, responsive portfolio website with an integrated admin panel for easy content management. Built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=600&fit=crop)

---

## ✨ Features

### 📄 **Resume/Home Page**
- Professional hero section with profile photo
- Stats dashboard (projects, clients, satisfaction)
- Featured and additional projects showcase
- Work experience timeline
- Skills & certifications
- Auto-scrolling client logos carousel
- Auto-scrolling testimonials carousel
- Beyond design (hobbies) section
- Downloadable resume PDF

### 💼 **Portfolio Page** (`/portfolio`)
- Detailed project case studies
- Featured projects with full descriptions
- Impact metrics and deliverables
- Tags and categories
- Expandable project sections
- Direct links to live projects

### ⚙️ **Admin Panel** (Secret: `Ctrl + Shift + A`)
- **Contact Management**: Update name, email, phone, social links, profile image
- **Project Editor**: Add/edit/delete projects, mark as featured
- **Experience Manager**: Manage work history and achievements
- **Education & Certifications**: Update degrees and certifications
- **Skills Editor**: Modify skill categories and items
- **Client Manager**: Update client logos and names
- **Testimonials Editor**: Add testimonials with author info and photos
- **File Upload**: Direct upload from computer for images, logos, PDFs
- **Data Export/Import**: Backup and restore all content as JSON

### 🎯 **Built for**
- UX/UI Designers
- Product Designers
- Design Consultants
- Creative Professionals

---

## 🚀 Quick Start

### Deploy in 3 Steps:

1. **Clone or Download** this repository
2. **Push to GitHub** (see [QUICK-DEPLOY.md](./QUICK-DEPLOY.md))
3. **Deploy to Vercel** (one-click, free forever)

**Detailed guides:**
- 📖 [QUICK-DEPLOY.md](./QUICK-DEPLOY.md) - Fast deployment guide
- 🔧 [GITHUB-SETUP.md](./GITHUB-SETUP.md) - GitHub setup steps
- 🌐 [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment options

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Storage**: LocalStorage (with export/import)
- **Deployment**: Vercel / Netlify / GitHub Pages

---

## 📂 Project Structure

```
portfolio-website/
├── /components/
│   ├── Resume.tsx              # Home/Resume page
│   ├── Portfolio.tsx           # Portfolio page with projects
│   ├── AdminPanel.tsx          # Content management panel
│   └── /ui/                    # Shadcn UI components
├── /data/
│   └── portfolio-data.ts       # Default data structure
├── /hooks/
│   └── usePortfolioData.ts     # LocalStorage data hook
├── /styles/
│   └── globals.css             # Global styles & Tailwind
├── App.tsx                     # Main router component
├── .gitignore                  # Git ignore rules
└── README.md                   # You are here
```

---

## 🎮 Usage

### Access Admin Panel:

**Keyboard Shortcut**: `Ctrl + Shift + A` (Windows/Linux) or `Cmd + Shift + A` (Mac)

Press this shortcut from anywhere on your portfolio to open the admin panel.

### Update Content:

1. Open admin panel
2. Navigate through tabs:
   - Contact, Projects, Experience, Education
   - Skills, Clients, Testimonials
3. Make changes
4. Click **Save Changes**
5. Click **Preview** to see updates

### Export/Import Data:

**Export**: Download JSON backup of all your content
```
Admin Panel → Export Data → Save JSON file
```

**Import**: Restore from previously exported JSON
```
Admin Panel → Import Data → Upload JSON file
```

---

## 🌐 Routing

- **`/`** - Home/Resume page
- **`/portfolio`** - Portfolio with detailed projects
- **`Ctrl+Shift+A`** - Admin panel (accessible from any page)

---

## 🎨 Customization

### Update Colors:

Edit `/styles/globals.css`:

```css
@theme {
  --color-primary: #4f46e5;     /* Indigo */
  --color-secondary: #9333ea;   /* Purple */
}
```

### Add Projects:

Use admin panel or edit `/data/portfolio-data.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  company: 'Company',
  featured: true,
  summary: 'Brief description',
  impact: 'Key results',
  tags: ['Tag1', 'Tag2']
}
```

### Update Profile Photo:

Admin Panel → Contact → Profile Image → Upload from Computer

### Update Resume PDF:

Admin Panel → Contact → Resume PDF → Upload PDF from Computer

---

## 📱 Responsive Design

- ✅ **Mobile**: Optimized for 360px+
- ✅ **Tablet**: Responsive layouts for iPad/tablets
- ✅ **Desktop**: Beautiful on large screens
- ✅ **Print**: Resume can be printed cleanly

---

## 🔐 Data Storage

### Current: LocalStorage
- Stored in browser
- Persists across sessions
- Backed up via Export/Import

### Future: Backend Integration
Upgrade to persistent storage:
- **Supabase**: Free PostgreSQL database
- **Notion API**: Manage content in Notion
- **Firebase**: Real-time database
- **Custom API**: Your own backend

See [NOTION-INTEGRATION.md](./NOTION-INTEGRATION.md) for Notion setup.

---

## 🚀 Deployment Options

### Vercel (Recommended)
- Free for personal projects
- Auto-deploy on git push
- Custom domain support
- 1-minute setup

### Netlify (Alternative)
- Free tier available
- Drag-and-drop deployment
- Form handling built-in

### GitHub Pages (Free Forever)
- Host directly from GitHub
- Workflow included
- Perfect for open-source portfolios

**Full deployment guides**: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🎯 Deployment Checklist

Before going live:

- [ ] Update all personal information
- [ ] Add profile photo
- [ ] Add all projects
- [ ] Update work experience
- [ ] Add testimonials
- [ ] Upload resume PDF
- [ ] Test all contact links
- [ ] Test on mobile devices
- [ ] Export data backup
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)

---

## 🔧 Development

### Local Development:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:5173
```

### Build for Production:

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Git Workflow:

```bash
# Make changes
git add .
git commit -m "Update: [description]"
git push

# Auto-deploys to Vercel/Netlify!
```

---

## 📊 Features Breakdown

| Feature | Home | Portfolio | Admin |
|---------|------|-----------|-------|
| Hero Section | ✅ | ❌ | ❌ |
| Stats Dashboard | ✅ | ❌ | ❌ |
| Featured Projects | ✅ | ✅ | ✅ |
| Project Details | Limited | ✅ | ✅ |
| Experience Timeline | ✅ | ❌ | ✅ |
| Skills Grid | ✅ | ❌ | ✅ |
| Client Carousel | ✅ | ❌ | ✅ |
| Testimonials | ✅ | ❌ | ✅ |
| Content Editing | ❌ | ❌ | ✅ |
| File Upload | ❌ | ❌ | ✅ |
| Export/Import | ❌ | ❌ | ✅ |

---

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork for your own use
- Customize the design
- Add new features
- Share with others

---

## 📄 License

Free to use for personal portfolios. No attribution required.

---

## 🆘 Support & Documentation

- [QUICK-DEPLOY.md](./QUICK-DEPLOY.md) - Fast deployment guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment options
- [GITHUB-SETUP.md](./GITHUB-SETUP.md) - GitHub repository setup
- [NOTION-INTEGRATION.md](./NOTION-INTEGRATION.md) - Notion CMS integration
- [PROJECT-OVERVIEW.md](./PROJECT-OVERVIEW.md) - Technical overview

---

## 🎉 Success Stories

Built for designers by designers. Perfect for:
- ✅ Job applications
- ✅ Freelance work
- ✅ Design competitions
- ✅ Networking events
- ✅ Client presentations

---

## 💡 Pro Tips

### For Job Applications:
Add portfolio link to:
- Resume header
- LinkedIn profile
- Cover letters
- Email signatures

### For Recruiters:
Highlight in intro email:
> "I've prepared a comprehensive portfolio showcasing relevant work: [link]"

### For Networking:
Include on business cards and LinkedIn posts about projects.

---

## 🌟 Credits

- **Design System**: Tailwind CSS + Shadcn/ui
- **Icons**: Lucide React
- **Images**: Unsplash (replace with your own)
- **Fonts**: System fonts for performance

---

## 📞 Questions?

Open an issue or check the documentation files for detailed guides.

---

**🚀 Ready to deploy? Start with [QUICK-DEPLOY.md](./QUICK-DEPLOY.md)**

**Built with ❤️ - Now go showcase your amazing design work to the world!** ✨