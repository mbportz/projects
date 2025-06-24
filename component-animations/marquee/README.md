# Marquee Component Animation

This project demonstrates a simple horizontal marquee animation using HTML and CSS.

## How It Works

- The marquee is created using an unordered list (`<ul>`) with the class `marquee` in [index.html](index.html).
- Each scrolling item is a list item (`<li>`) with classes `item` and `itemN` (where N is the item's index).
- The marquee container uses a CSS mask to fade the edges, creating a smooth entry and exit effect for the items.
- Each `.item` is absolutely positioned and animated to scroll from right to left using the `scrollLeft` keyframes defined in [styles.css](styles.css).
- The `animation-delay` for each item is calculated using the CSS variable `--item-index` to stagger their movement, so they appear evenly spaced.

## Customization

- To change the number of items, add or remove `<li>` elements in the `.marquee` list in [index.html](index.html).
- To adjust the speed, modify the `animation-duration` property in the `.item` CSS rule in [styles.css](styles.css).
- To change the item width, update the `width` property in the `.item` CSS rule and adjust the `left` property and keyframes accordingly.

## Files

- [index.html](index.html): Contains the HTML structure for the marquee.
- [styles.css](styles.css): Contains all the styles and animation logic.
- [README.md](README.md): This documentation.

## Example

```html
<ul class="marquee">
   <li class="item item1"></li>
   <li class="item item2"></li>
   <li class="item item3"></li>
   <!-- Add more items as needed -->
</ul>
```

```css
.marquee {
  position: relative;
  width: 600px;
  height: 60px;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  background: #f0f0f0;
  margin: 2rem auto;
  padding: 0;
  list-style: none;
}

.item {
  position: absolute;
  top: 0;
  width: 120px;
  height: 60px;
  background: red;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 8px;
  animation: scrollLeft 6s linear infinite;
  /* Use a CSS variable for staggered delay */
  animation-delay: calc(var(--item-index, 0) * 2s);
}

/* Example for 3 items */
.item1 { --item-index: 0; left: 0; }
.item2 { --item-index: 1; left: 120px; }
.item3 { --item-index: 2; left: 240px; }

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-600px);
  }
}
```