# Animated Card Border with CSS

This project demonstrates a pure CSS animated glowing border effect around a card using modern CSS features, including CSS custom properties and conic gradients.

---

## 🔧 Features

- Fully animated rotating border.
- Glowing blur effect.
- Pure CSS solution (no JavaScript).
- Modern CSS custom properties with `@property` declaration.
- Smooth, infinite loop animation.

---

## 🌎 Live Demo

The card stays centered with a rotating animated border that glows softly around it.

---

## 🖌️ How It Works

### 1. Layout

- The card container (`#card`) is centered on the page using Flexbox.
- The actual animated border is created using the `::before` and `::after` pseudo-elements.

### 2. Animated Border

- The border uses a `conic-gradient` background image.
- A CSS custom property `--angle` controls the rotation angle.
- The `@property` rule declares `--angle` as an animatable property.
- The `@keyframes spin` animation rotates the angle from `0deg` to `360deg` continuously.

### 3. Glowing Effect

- The `::before` pseudo-element adds a blur (`filter: blur(1.5rem)`) to create a glow effect behind the main border.
- Both pseudo-elements are positioned behind the card content using `z-index: -1`.

---

## 🌐 Browser Support

- `@property` is an experimental feature and supported only in modern browsers (Chrome 111+, Edge, etc.).
- Without `@property`, the animation may still work but may not be as smooth or properly interpolated.

---

## 📃 Code Snippet

```css
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin {
  from { --angle: 0deg; }
  to { --angle: 360deg; }
}

#card::after, #card::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--angle), transparent 80%, blue);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 1rem;
  animation: 3s spin linear infinite;
}

#card::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}
```

---

## 📖 Customization

You can easily customize:

- **Gradient colors**
- **Animation speed (duration)**
- **Blur strength**
- **Card size and shape**

---

Enjoy building beautiful animated card borders with pure CSS!

