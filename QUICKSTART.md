# nijojo.com - Quick Start Guide

## 🚀 Run Locally

```bash
# Start development server
npm run dev
# Visit: http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Update Content (Priority Order)

### 1. Replace Nijo Johny's Info
**File**: `src/config/site.ts`
- Update bio (line 17)
- Add personal photo to `public/images/nijo-johny.jpg`
- Update email (line 19)
- Add social media links (lines 22-24)

### 2. Update Universal Tax Content
**File**: `src/config/businesses/universal-tax.ts`
- Search for `[PLACEHOLDER]` and replace with actual content
- Add real services (starting line 10)
- Update contact info (lines 31-35)
- Add logo to `public/images/universal-tax-logo.png`

### 3. Update Insurance Content
**File**: `src/config/businesses/insurance.ts`
- Search for `[PLACEHOLDER]` and replace with actual content
- Add real services (starting line 10)
- Update contact info (lines 43-47)
- Add logo to `public/images/insurance-logo.png`

### 4. Add Malayalam Translations
**File**: `src/i18n/ui.ts`
- Replace `[ML]` prefixes with actual Malayalam text (lines 23-35)

### 5. Add Images
Upload to `public/images/`:
- `nijo-johny.jpg` - Personal photo
- `og-default.jpg` - Social sharing image (1200×630px)
- `emithram-logo.png`
- `universal-tax-logo.png`
- `insurance-logo.png`

## 🌐 Deploy to GitHub Pages

```bash
# Commit changes
git add .
git commit -m "Update site content"
git push origin main

# GitHub Actions will automatically build and deploy
# Check: https://github.com/YOUR_USERNAME/nijojo/actions
```

## 🔍 Test Checklist

Before deploying, verify:
- [ ] Homepage loads at `/`
- [ ] Malayalam homepage at `/ml`
- [ ] All 3 business pages load (emithram, universal-tax, insurance)
- [ ] Service detail pages load (click any service)
- [ ] Language switcher works
- [ ] WhatsApp buttons work
- [ ] Phone links work
- [ ] Facebook feed shows on e-Mithram page only
- [ ] Google Maps shows on e-Mithram contact section
- [ ] Sitemap accessible at `/sitemap.xml`

## ⚙️ Add a New Service to e-Mithram

**File**: `src/config/businesses/emithram.ts`

Add to the `services` array (around line 10):
```typescript
{
  slug: 'new-service-name',
  title: 'Service Title',
  description: 'Brief description for the card',
  icon: '🔧', // Pick an emoji
  detailContent: 'Detailed description for the service page'
}
```

Rebuild: `npm run build`

## 🆕 Add a New Business

1. Create: `src/config/businesses/new-business.ts` (copy from emithram.ts)
2. Edit: `src/utils/getBusinessConfig.ts` - add to `businessConfigs` object
3. Edit: `src/config/site.ts` - add to `businesses` array
4. Rebuild: `npm run build`

Routes auto-generate:
- `/new-business` (English)
- `/ml/new-business` (Malayalam)
- `/new-business/services/[slug]` (all services)

## 🎨 Change Colors

**File**: `tailwind.config.mjs`

Update the `colors` section (lines 6-17):
```javascript
primary: {
  DEFAULT: '#282C6D', // Change this
  light: '#3a3f8f',
  dark: '#1a1d4a',
},
```

## 📞 Support

- Implementation docs: `IMPLEMENTATION.md`
- Legacy reference: `legacy-code/` directory
- Astro docs: https://docs.astro.build

## ✅ Production Checklist

Before going live:
- [ ] Replace all `[PLACEHOLDER]` text
- [ ] Add all images to `public/images/`
- [ ] Test on mobile, tablet, desktop
- [ ] Verify all contact forms/links work
- [ ] Configure DNS for nijojo.com
- [ ] Enable GitHub Pages in repo settings
- [ ] Test deployed site
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)

---

**Current Status**: ✅ Fully functional, ready for content updates
**Next Step**: Update placeholder content and deploy
