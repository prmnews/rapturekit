# Product Requirements Document: Purchase Page

## Document Information
- **Feature**: Purchase Pre-Made USB Keychain Page
- **Version**: 1.0
- **Date**: December 10, 2024
- **Status**: Completed
- **Author**: Development Team

---

## Executive Summary

A new static marketing page that introduces visitors to the option of purchasing pre-made physical USB keychain Rapture Kits from our ministry partner, Keychain Rapture Kit. This page serves as a bridge between our free downloadable kit and a convenient purchase option for those who prefer a ready-to-share physical product.

---

## Business Objectives

### Primary Goals
1. Provide an alternative path for users who don't want to create their own USB drives
2. Drive traffic to the Keychain Rapture Kit partner store
3. Increase distribution of the Rapture Kit through multiple channels
4. Maintain clear separation between free and paid options

### Success Metrics
- Page views and engagement on `/purchase`
- Click-through rate to Keychain Rapture Kit store
- User feedback on purchase option awareness
- Maintained conversion on free download option

---

## User Stories

### As a site visitor
- I want to see an option to purchase a pre-made USB drive, so I don't have to create one myself
- I want to understand what I'm getting in the physical product before I commit to purchase
- I want to easily navigate to the store to complete my purchase
- I want the option to still download the free kit if I prefer

### As a ministry partner
- I want clear messaging that this is a separate website operated by a ministry partner
- I want prominent call-to-action directing users to the store
- I want the page to maintain visual consistency with the main Rapture Kit brand

---

## Technical Requirements

### Page Structure

#### Route
- **Endpoint**: `/purchase`
- **Type**: Static page (SSG)
- **Framework**: Next.js 15.2.6

#### Layout
1. **Header Section**
   - Page title: "Purchase Pre-Made USB Drive"
   - Subtitle: "Get a physical USB keychain Rapture Kit ready to share"
   - Burgundy/yellow color scheme (consistent with site theme)

2. **Two-Column Content Section**
   - **Left Column**:
     - "Ready-to-Share USB Keychain" heading
     - Partnership introduction paragraph
     - "What You Get" feature box with bullet points:
       - Professional keychain USB drive
       - Pre-loaded with complete Rapture Kit content
       - Durable and portable design
       - Ready to give as a gift or emergency resource
       - Perfect for witnessing and outreach
   
   - **Right Column**:
     - Screenshot/image of keychain product (`/public/keychain.png`)
     - Ministry partner disclaimer note

3. **Centered CTA Section (Second Row)**
   - Primary button: "Visit Keychain Rapture Kit Store"
   - Secondary text: "Prefer to make your own? You can still download the free kit"

#### Responsive Design
- **Desktop**: Side-by-side two-column layout + centered CTA row below
- **Tablet**: Two columns stacked, centered CTA
- **Mobile**: Fully stacked vertical layout with image first

### Navigation Integration

#### Desktop Menu
- Added to "FAQs" dropdown menu
- Position: After "Make Your Own", before "Frequently Asked Questions"
- Label: "Purchase Pre-Made"
- Description: "Order a physical USB keychain Rapture Kit ready to share."

#### Mobile Menu
- Added to FAQs section in mobile sheet
- Same positioning as desktop

#### Home Page Hero
- Added third button in hero section
- Position: After "Overview" and "Download" buttons
- Label: "Purchase"
- Routes to: `/purchase`

### Component Architecture

#### Components Used
- `ThemeToggle` - Dark/light mode toggle
- `MainNav` - Navigation menu
- `ThemeLogo` - Site logo
- `RaptureButton` - Custom button component with burgundy variant
- Next.js `Image` - Optimized image rendering
- Next.js `Link` - Client-side navigation

#### Styling Approach
- Tailwind CSS utility classes
- Responsive grid system
- Dark mode support via `dark:` variant
- Custom burgundy color palette
- Consistent spacing and typography

### External Integration

#### Partner Link
- **URL**: https://keychainrapturekit.com
- **Target**: `_blank` (new tab)
- **Rel**: `noopener noreferrer` (security best practice)
- **Disclaimer**: Clear messaging about separate website and secure processing

---

## Design Requirements

### Visual Design

#### Color Palette
- Primary: Burgundy (#800020)
- Primary Dark Mode: Yellow (#facc15)
- Background: Muted gray/white with theme support
- Text: Standard foreground with muted variants

#### Typography
- Heading: 3xl/4xl/5xl responsive font sizes
- Body: lg for primary content
- Small print: sm for disclaimers
- Font weight: Bold for headings, regular for body

#### Spacing
- Page padding: Container with responsive padding (px-4/6/8)
- Section spacing: mb-12 for major sections
- Content gaps: gap-12 for columns, space-y-6 for vertical stacks

#### Button Design
- Background: Burgundy (#800020)
- Hover state: Darker burgundy (#600010)
- Padding: 4rem horizontal (64px), 1.5rem vertical (24px)
- Font size: text-lg (18px)
- Border radius: rounded-md
- Shadow: Standard shadow with hover elevation

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where appropriate

---

## Content Requirements

### Copy Guidelines

#### Tone
- Friendly and helpful
- Clear and direct
- Ministry-focused
- Transparent about partnership

#### Key Messages
1. Convenience: "Don't have time to create your own USB drives?"
2. Partnership: "We've partnered with Keychain Rapture Kit"
3. Value proposition: Professional, pre-loaded, ready-to-share
4. Transparency: Separate website disclaimer
5. Alternative option: Free download still available

#### SEO
- Title: "Purchase Physical USB Drive | Rapture Kit"
- Meta description: "Get a pre-made physical USB keychain Rapture Kit ready to share with your loved ones."

---

## Implementation Details

### File Structure
```
src/
  app/
    purchase/
      page.tsx          # Main purchase page component
  components/
    main-nav.tsx        # Updated with purchase link
public/
  keychain.png          # Product screenshot
```

### Key Technical Decisions

#### Button Padding Override
- **Challenge**: Default `size: "lg"` applies `px-6` which was too tight
- **Solution**: Used `!px-16 !py-6` with important flag to override defaults
- **Rationale**: Longer button text needed more breathing room without affecting other buttons

#### Layout Strategy
- **Challenge**: Balance content height between columns
- **Solution**: Moved CTA elements to centered second row
- **Rationale**: Better visual hierarchy and prominence for primary action

#### Responsive Strategy
- **Mobile First**: Image displayed first (order-first md:order-last)
- **Progressive Enhancement**: Columns stack on mobile, side-by-side on desktop
- **Breakpoint**: md (768px) for column transition

---

## Testing & Quality Assurance

### Testing Performed
- ✅ Local build verification (Next.js build)
- ✅ TypeScript compilation
- ✅ ESLint validation
- ✅ Responsive layout testing (mobile/tablet/desktop)
- ✅ Dark mode compatibility
- ✅ Navigation integration
- ✅ External link functionality
- ✅ Cross-browser testing

### CI/CD Pipeline
- Automated build validation via GitHub Actions
- TypeScript type checking
- Linting checks
- Build artifact generation

---

## Deployment

### Deployment Strategy
- **Method**: Git push to main branch
- **Hosting**: Static site generation (SSG)
- **CDN**: Vercel/Next.js deployment platform
- **Build Time**: Static page, no runtime dependencies

### Rollout Plan
1. Feature development completed
2. Local testing and iteration
3. Commit to main branch
4. CI/CD pipeline validation
5. Automatic deployment to production
6. Post-deployment verification

---

## Future Enhancements

### Potential Improvements
1. **Analytics Integration**
   - Track button click-through rates
   - Monitor page engagement metrics
   - A/B test button placement and copy

2. **Enhanced Content**
   - Video walkthrough of product
   - Customer testimonials
   - Product comparison table (DIY vs. Pre-made)

3. **Performance Optimization**
   - Image optimization (WebP format)
   - Lazy loading for below-fold content
   - Preconnect to partner domain

4. **Conversion Optimization**
   - Trust badges/security indicators
   - Urgency messaging (if appropriate)
   - FAQ section specific to purchasing

---

## Risks & Mitigation

### Identified Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Partner site downtime | High | Low | Clear disclaimer, maintain free option |
| User confusion about pricing | Medium | Medium | Explicit messaging about external site |
| Cannibalization of free downloads | Medium | Low | Maintain prominent free option, different value props |
| Brand inconsistency | Low | Low | Partner uses aligned branding and messaging |

---

## Dependencies

### External Dependencies
- Keychain Rapture Kit website (https://keychainrapturekit.com)
- Product screenshot/image asset
- Ministry partner relationship and agreement

### Internal Dependencies
- Next.js framework (v15.2.6)
- Tailwind CSS (v4.0.13)
- RaptureButton component
- MainNav component
- Site theme system

---

## Maintenance & Support

### Ongoing Maintenance
- Monitor partner website availability
- Update product screenshot as needed
- Review and update copy based on user feedback
- Maintain link integrity

### Content Updates
- Product image refresh (as needed)
- Copy refinements based on analytics
- Pricing or offer updates from partner (coordinate externally)

---

## Appendix

### Key Files Modified
1. `src/app/purchase/page.tsx` - Main page component
2. `src/components/main-nav.tsx` - Navigation updates (desktop & mobile)
3. `src/app/page.tsx` - Home page hero button addition
4. `public/keychain.png` - Product screenshot

### Commit History
1. Initial purchase page creation with 2-column layout
2. Navigation menu integration (desktop & mobile)
3. Home page button addition
4. Layout balance improvements (move content to second row)
5. Button centering and padding fixes
6. CSS conflict resolution with !important overrides

### Related Documentation
- [CI/CD Pipeline Documentation](/.github/workflows/ci.yml)
- [Component Library](../src/components/)
- [Design System](../src/app/globals.css)

---

## Sign-off

### Approval
- [x] Development Team - Completed
- [x] Build Validation - Passed
- [x] Local Testing - Verified
- [x] Deployment - Live

### Notes
All requirements met. Feature deployed successfully with full responsive support and proper navigation integration. Button styling conflicts resolved through CSS specificity management.

