import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include user authentication, shopping cart, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Stripe', 'Node.js'],
    date: '2024-01-15',
    category: 'web',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    content: `
# E-Commerce Platform

A comprehensive e-commerce solution built with modern web technologies.

## Features

- **User Authentication**: Secure login and registration system
- **Product Catalog**: Browse and search products with advanced filtering
- **Shopping Cart**: Add, remove, and modify cart items
- **Payment Processing**: Secure payments with Stripe integration
- **Order Management**: Track orders and order history
- **Admin Dashboard**: Manage products, users, and orders

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Payment**: Stripe API
- **Authentication**: JWT tokens
- **Deployment**: Vercel & Railway

## Challenges & Solutions

Building this platform presented several interesting challenges:

1. **State Management**: Implemented Redux Toolkit for complex state management
2. **Performance**: Used React.memo and useMemo for optimization
3. **Security**: Implemented proper authentication and authorization
4. **Payment Integration**: Handled various payment scenarios and edge cases

The result is a robust, scalable e-commerce platform that can handle real-world traffic and transactions.
    `
  },
  {
    id: 2,
    title: 'Task Management Mobile App',
    description: 'A React Native mobile application for task management with offline support, push notifications, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
    date: '2023-12-10',
    category: 'mobile',
    githubUrl: 'https://github.com',
    content: `
# Task Management Mobile App

A powerful mobile application for personal and team task management.

## Key Features

- **Cross-Platform**: Works on both iOS and Android
- **Offline Support**: Works without internet connection
- **Real-time Sync**: Instant updates across all devices
- **Team Collaboration**: Share tasks and projects with team members
- **Push Notifications**: Never miss a deadline
- **Dark/Light Mode**: Beautiful themes for any preference

## Technical Implementation

The app is built using React Native with Expo, providing:

- **State Management**: Redux with Redux Persist for offline capabilities
- **Backend**: Firebase for real-time database and authentication
- **Notifications**: Expo Notifications for cross-platform push notifications
- **Storage**: AsyncStorage for local data persistence

## User Experience

The app focuses on simplicity and efficiency:

1. **Intuitive Design**: Clean, modern interface following platform guidelines
2. **Quick Actions**: Swipe gestures for common actions
3. **Smart Sorting**: AI-powered task prioritization
4. **Progress Tracking**: Visual progress indicators and analytics

This project showcases modern mobile development practices and delivers a production-ready application.
    `
  },
  {
    id: 3,
    title: 'Understanding Modern CSS Grid',
    description: 'A comprehensive guide to CSS Grid layout system, covering everything from basic concepts to advanced techniques with practical examples.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    tags: ['CSS', 'Web Design', 'Frontend', 'Tutorial'],
    date: '2024-02-20',
    category: 'blog',
    content: `
# Understanding Modern CSS Grid

CSS Grid has revolutionized how we approach web layouts. In this comprehensive guide, we'll explore everything you need to know about CSS Grid.

## What is CSS Grid?

CSS Grid is a two-dimensional layout system that allows you to create complex responsive layouts with ease. Unlike Flexbox, which is primarily one-dimensional, Grid excels at handling both rows and columns simultaneously.

## Basic Concepts

### Grid Container and Grid Items

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}
\`\`\`

### Grid Lines and Tracks

Grid lines are the dividing lines that make up the structure of the grid. Grid tracks are the spaces between grid lines.

## Advanced Techniques

### Named Grid Lines

\`\`\`css
.advanced-grid {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
}
\`\`\`

### Grid Areas

Grid areas provide a powerful way to name and position elements:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
\`\`\`

## Practical Examples

Let's build a responsive card layout:

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

This creates a responsive grid that automatically adjusts the number of columns based on available space.

## Browser Support and Fallbacks

CSS Grid has excellent modern browser support. For older browsers, you can provide fallbacks:

\`\`\`css
.grid-container {
  /* Flexbox fallback */
  display: flex;
  flex-wrap: wrap;
  
  /* Grid enhancement */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
\`\`\`

## Conclusion

CSS Grid is an incredibly powerful tool that simplifies complex layouts. By mastering its concepts and techniques, you can create more maintainable and responsive web designs.

The key is to start simple and gradually incorporate more advanced features as you become comfortable with the basics.
    `
  },
  {
    id: 4,
    title: 'Brand Identity Design System',
    description: 'A complete brand identity and design system for a tech startup, including logo design, color palette, typography, and component library.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    tags: ['UI/UX', 'Branding', 'Design Systems', 'Figma'],
    date: '2023-11-30',
    category: 'design',
    content: `
# Brand Identity Design System

Creating a cohesive brand identity and design system for a technology startup from concept to implementation.

## Project Overview

This project involved developing a complete brand identity for a fintech startup, including visual identity, design principles, and a comprehensive component library.

## Brand Strategy

### Brand Positioning
- **Mission**: Democratizing financial services through technology
- **Values**: Trust, Innovation, Accessibility, Transparency
- **Personality**: Professional yet approachable, innovative, reliable

### Target Audience
- Tech-savvy millennials and Gen Z
- Small business owners
- Financial professionals seeking modern tools

## Visual Identity

### Logo Design
The logo combines geometric precision with organic curves, representing the balance between technology and human needs. The mark works across all scales and contexts.

### Color Palette
- **Primary Blue**: #2563EB - Trust and professionalism
- **Accent Green**: #10B981 - Growth and prosperity
- **Supporting Grays**: #F8FAFC to #1E293B - Hierarchy and balance

### Typography
- **Headings**: Inter - Modern, legible, tech-forward
- **Body**: System fonts - Performance and accessibility focused

## Design System

### Component Library
Built in Figma with auto-layout and variants:

1. **Buttons**: Primary, secondary, ghost, and disabled states
2. **Form Elements**: Inputs, selects, checkboxes with validation states
3. **Cards**: Various layouts for different content types
4. **Navigation**: Headers, sidebars, and mobile menus

### Design Tokens
- Consistent spacing scale (4px base unit)
- Semantic color naming system
- Typography scale with clear hierarchy
- Shadow and border radius standards

## Implementation

### Development Handoff
- Figma to code workflow
- CSS custom properties for design tokens
- Component documentation with Storybook
- Automated design token sync

### Results
The design system reduced development time by 40% and ensured consistency across all touchpoints. The brand identity helped the startup secure Series A funding and establish market presence.

## Key Learnings

1. **Start with principles**: Clear design principles guide all decisions
2. **Think systems**: Every component should work within the larger system
3. **Document everything**: Good documentation ensures adoption
4. **Iterate based on usage**: Real-world feedback improves the system

This project demonstrates the power of systematic design thinking and its impact on both user experience and business outcomes.
    `
  },
  {
    id: 5,
    title: 'Building Accessible Web Components',
    description: 'A deep dive into creating accessible web components using modern HTML, CSS, and JavaScript while following WCAG guidelines.',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=600&fit=crop',
    tags: ['Accessibility', 'JavaScript', 'WCAG', 'Web Standards'],
    date: '2024-01-30',
    category: 'blog',
    content: `
# Building Accessible Web Components

Creating truly accessible web components requires understanding both technical implementation and user needs. Here's a comprehensive guide to building inclusive web experiences.

## Why Accessibility Matters

Web accessibility isn't just about compliance—it's about creating inclusive experiences for all users. When done right, accessible design benefits everyone.

### The Business Case
- **Larger audience**: 15% of the global population has some form of disability
- **Better SEO**: Semantic HTML improves search rankings
- **Improved UX**: Accessible design is often better design
- **Legal compliance**: Avoid potential lawsuits and penalties

## WCAG Guidelines Overview

The Web Content Accessibility Guidelines (WCAG) are organized around four principles:

1. **Perceivable**: Information must be presentable in ways users can perceive
2. **Operable**: Interface components must be operable by all users
3. **Understandable**: Information and UI operation must be understandable
4. **Robust**: Content must be robust enough for various assistive technologies

## Building Accessible Components

### Button Component

\`\`\`html
<button 
  type="button"
  class="btn btn--primary"
  aria-describedby="help-text"
  disabled={isLoading}
>
  {isLoading ? (
    <>
      <span aria-hidden="true">⏳</span>
      <span class="sr-only">Loading...</span>
      Processing
    </>
  ) : (
    'Submit Form'
  )}
</button>
\`\`\`

Key considerations:
- Clear, descriptive text
- Proper button type
- Loading states with screen reader feedback
- Adequate contrast ratios

### Modal Dialog

\`\`\`javascript
class AccessibleModal {
  constructor(trigger, modal) {
    this.trigger = trigger;
    this.modal = modal;
    this.previousFocus = null;
    this.init();
  }
  
  init() {
    this.trigger.addEventListener('click', this.open.bind(this));
    this.modal.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  
  open() {
    this.previousFocus = document.activeElement;
    this.modal.setAttribute('aria-hidden', 'false');
    this.modal.querySelector('[autofocus], button, input').focus();
    document.body.classList.add('modal-open');
  }
  
  close() {
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    this.previousFocus.focus();
  }
  
  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.close();
    }
    // Trap focus within modal
    if (e.key === 'Tab') {
      this.trapFocus(e);
    }
  }
}
\`\`\`

### Form Validation

\`\`\`html
<div class="form-group">
  <label for="email" class="form-label">
    Email Address
    <span aria-label="required">*</span>
  </label>
  <input 
    type="email"
    id="email"
    class="form-input"
    aria-describedby="email-help email-error"
    aria-invalid="false"
    required
  />
  <div id="email-help" class="form-help">
    We'll never share your email with anyone else.
  </div>
  <div id="email-error" class="form-error" role="alert">
    <!-- Error message appears here -->
  </div>
</div>
\`\`\`

## Testing for Accessibility

### Automated Testing
- **axe-core**: Industry-standard accessibility testing engine
- **Lighthouse**: Built into Chrome DevTools
- **WAVE**: Web accessibility evaluation tool

### Manual Testing
1. **Keyboard navigation**: Can you use the site with only a keyboard?
2. **Screen reader testing**: Use NVDA, JAWS, or VoiceOver
3. **Color contrast**: Ensure sufficient contrast ratios
4. **Zoom testing**: Test at 200% zoom level

### Testing Checklist
- [ ] All images have alt text
- [ ] Headings follow logical hierarchy
- [ ] Forms have proper labels
- [ ] Focus indicators are visible
- [ ] Color isn't the only way to convey information
- [ ] Content is readable at 200% zoom

## Common Pitfalls to Avoid

1. **Placeholder-only labels**: Always provide proper labels
2. **Generic link text**: Avoid "click here" or "read more"
3. **Auto-playing media**: Provide controls for users
4. **Keyboard traps**: Ensure all interactive elements are reachable
5. **Missing focus management**: Handle focus properly in SPAs

## The Future of Accessibility

Emerging technologies and standards:
- **Web Components**: Building accessible custom elements
- **CSS Container Queries**: Better responsive accessibility
- **Accessibility Object Model**: Programmatic accessibility tree manipulation

## Conclusion

Building accessible web components requires intention and practice, but the result is better experiences for everyone. Start with semantic HTML, enhance progressively, and always test with real users.

Remember: accessibility is not a checklist—it's a mindset that puts users first.
    `
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (!category) return projects;
  return projects.filter(project => project.category === category);
};

export const searchProjects = (query: string): Project[] => {
  if (!query) return projects;
  
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getCategories = (): string[] => {
  return Array.from(new Set(projects.map(project => project.category)));
};