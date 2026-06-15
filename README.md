# EcoFolio (MyPortfolio)

A responsive, eco-themed portfolio site built with **HTML, CSS, and vanilla JavaScript**. It includes pages for **Home, About, Skills, Projects, and Contact** with smooth UI interactions, animations, and a projects filter.

---

## Features

- 🌿 Eco-themed UI (custom navigation, backgrounds, decorative elements)
- 📱 Responsive mobile navigation
- 🎞️ Scroll-based animations (IntersectionObserver)
- 🧩 Projects filtering (category buttons)
- ✉️ Contact form UI validation + simulated submit success

---

## Project Structure

- `index.html` - Home page
- `about.html` - About page
- `skills.html` - Skills page
- `projects.html` - Projects page (filterable)
- `contact.html` - Contact page (form)
- `css/` - Page styles and shared styling
  - `global.css`, `navbar.css`
  - `home.css`, `about.css`, `skills.css`, `projects.css`, `contact.css`
- `js/main.js` - Site interactions (menu, animations, filter, form)

---

## How to Run

This is a static website.

1. Open any file directly in your browser (e.g., `index.html`).
2. For best results, use a simple local server:

```bash
# from the project folder
# then open the displayed URL
python -m http.server 5500
```

---

## JavaScript Highlights (`js/main.js`)

- `initMobileMenu()` - toggles the mobile navbar and closes it on outside click/link click
- `initScrollAnimations()` - adds animation classes when elements enter the viewport
- `initProjectFilter()` - shows/hides `.project-card` based on `data-filter` / `data-category`
- `initFormValidation()` - input focus/blur styles + HTML5 validity handling
- `initSmoothScroll()` - smooth scrolling for in-page anchors

---

## Notes

- Some project links are placeholders (`#`)—replace them with your real GitHub/live URLs.
- Social links in the footer are currently set to `#`—update them with your profiles.

---

## Credits

Designed with a nature-inspired theme: 🌱🍃🌿

---

## License

Add your preferred license here (misslazy).
