# Design Guidelines: Professional Portfolio for Ashin Tom Sebastian

## Design Approach

**Selected Approach:** Reference-Based with System Foundation
- Primary inspiration: Minimal professional portfolios (Notion careers pages, Linear's team pages)
- Supporting system: Material Design principles for subtle depth and hierarchy
- Aesthetic: Clean, professional, calming - think soft corporate with personality

**Core Principle:** Professional restraint with strategic visual moments. This is an entry-level professional's portfolio, so credibility and clarity trump flashiness.

## Typography

**Font System:**
- Headings: Inter (600-700 weight) - Modern, professional, highly legible
- Body: Inter (400-500 weight) - Maintains consistency
- Accent/Special: Optional Georgia for personal statement to add warmth

**Hierarchy:**
- Hero Name: text-5xl md:text-7xl, font-bold, letter-tight
- Section Titles: text-3xl md:text-4xl, font-semibold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Labels/Meta: text-sm, font-medium, tracking-wide

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Element gaps: gap-6, gap-8, gap-12

**Grid Structure:**
- Container: max-w-6xl mx-auto px-6
- Two-column sections: grid md:grid-cols-2 gap-12
- Card grids: grid md:grid-cols-2 lg:grid-cols-3 gap-6

## Component Library

### Navigation
- Fixed top navigation with blur backdrop
- Logo/Name (left), Resume download button + Contact CTA (right)
- Smooth scroll to sections
- Height: h-16 md:h-20

### Hero Section
- Full viewport height: min-h-screen flex items-center
- Two-column layout: Photo (left 40%) + Content (right 60%)
- Professional photo: Circular frame (w-64 h-64 md:w-80 h-80), subtle shadow
- Animated gradient background: Soft blues/grays transitioning gently
- Hero content: Name, title, animated typing effect for tagline, dual CTAs (View Work + Download Resume)

### Content Sections Structure
1. **About/Summary**: Single column, centered, max-w-3xl, large readable text
2. **Skills**: Card-based grid (2 columns), icons + labels, subtle hover lift
3. **Experience/Internship**: Timeline layout with connecting line, cards for each role
4. **Achievements**: Badge/card grid (3 columns), date + title + description
5. **Education**: Timeline or stacked cards, institution logos as placeholders
6. **Languages**: Horizontal pill layout with proficiency indicators (4 bars or visual representation)

### Cards
- Background: Subtle off-white/light gray with soft shadow
- Border radius: rounded-xl
- Padding: p-6 md:p-8
- Hover state: Subtle lift (transform translateY(-2px)) + shadow increase
- Transition: All 300ms ease

### Buttons
**Primary (Resume Download, Contact):**
- Solid background with blur when on images
- Padding: px-8 py-3
- Rounded: rounded-full
- Font: font-semibold text-base

**Secondary (Navigation links):**
- Text-only with underline animation on hover
- Subtle color transition

### Footer
- Simple, centered layout
- Contact info (email, phone) with icons
- Social links (if applicable)
- Copyright notice
- Padding: py-12

## Animations & Interactions

**Page Load:**
- Hero elements: Staggered fade-up (name → title → description → buttons) with 100ms delays
- Photo: Fade-in with subtle scale (0.95 → 1)

**Scroll Animations:**
- Section headers: Fade-up when entering viewport
- Cards: Staggered fade-up in grids (50ms delay between items)
- Use Intersection Observer pattern, trigger once

**Micro-interactions:**
- Card hover: Lift + shadow (described above)
- Button hover: Slight scale (1.02) + brightness increase
- Resume download: Brief scale pulse on click
- Smooth scroll between sections (scroll-behavior: smooth)

**Constraint:** Keep animations subtle and professional. Total animation duration for any element: max 400ms.

## Images

**Hero Image:**
- Use provided professional photo (attached_assets/photo_1762786987596.jpeg)
- Treatment: Circular crop, subtle border, soft shadow
- Position: Left side of hero section

**Background:**
- Subtle gradient mesh background in hero (soft blues, grays, whites)
- Sectioned backgrounds: Alternate between white and very light gray for visual separation

**Icons:**
- Use Heroicons for consistency throughout
- Skills: Document, Chart, Lightbulb icons
- Contact: Envelope, Phone, Map icons
- Social: Brand icons as needed

## Resume Download

- Prominent "Download Resume" button in navigation and hero
- File: attached_assets/ASHIN TOM SEBASTIAN Resume_1762786987598.pdf
- Download interaction: Brief loading state → success confirmation

## Mild Theme Specifications

**Primary Palette (Soft, Professional):**
- Base: Soft blue-gray tones
- Avoid high contrast or vibrant colors
- Use opacity and subtle gradients for depth

**Suggested Direction:**
- Background: Warm whites to cool light grays
- Text: Soft charcoal (not pure black)
- Accents: Muted blues or teals
- Cards: Off-white with subtle shadows

This creates a calming, professional atmosphere suitable for a data/marketing professional's portfolio while maintaining visual interest and excellent readability.