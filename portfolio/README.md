# Portfolio Website

This is a personal portfolio website project built with HTML, SCSS (Sass), and JavaScript. The project uses modular SCSS for styling, with a structure that separates variables, components, and sections for maintainability and scalability.

## Features

- Responsive design for desktop and mobile
- Modular SCSS with variables and partials
- Live Sass compilation with VS Code integration
- Modern layout and navigation
- Easy to customize and extend

## Project Structure

```
portfolio/
├── index.html
├── styles/
│   ├── scss/
│   │   ├── main.scss
│   │   ├── _abstracts.scss
│   │   ├── _components.scss
│   │   └── _sections.scss
│   └── css/
│       └── main.css
├── scripts/
│   └── main.js
├── images/
│   └── ...
└── README.md
```

- **scss/**: Source SCSS files (main entry: `main.scss`)
- **css/**: Compiled CSS output (generated automatically)
- **scripts/**: JavaScript files
- **images/**: Project images and assets

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for CLI Sass, optional)
- [VS Code](https://code.visualstudio.com/) (recommended)
- [Live Sass Compiler extension](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) for VS Code

### Installation

1. **Clone or download this repository.**
2. **Open the project folder in VS Code.**

### Running the Project

#### Using Live Sass Compiler (Recommended)

1. **Install the Live Sass Compiler extension** in VS Code.
2. **Check your `.vscode/settings.json`** (or global settings) for the following configuration:
    ```json
    "liveSassCompile.settings.formats": [
      {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "/styles/css"
      }
    ]
    ```
3. **Click "Watch Sass"** at the bottom of VS Code.
4. **Edit and save any `.scss` file** (e.g., `main.scss`). The compiled CSS will appear in `styles/css/main.css`.
5. **Open `index.html`** in your browser to view the site.

#### Using Sass CLI (Alternative)

If you prefer using the command line:

```sh
sass --watch styles/scss/main.scss:styles/css/main.css
```

This will watch for changes in your SCSS and output CSS to the correct folder.

## Customization

- **Edit SCSS variables** in `scss/_abstracts.scss` to change colors, fonts, and other design tokens.
- **Add or modify components** in `scss/_components.scss`.
- **Update content** in `index.html` and images in the `images/` folder.

## Troubleshooting

- If CSS is not updating, make sure Live Sass Compiler is running and your settings are correct.
- If you delete the generated CSS, simply save your SCSS file again or restart the watcher to regenerate it.

## License

This project is for personal and educational use. Feel free to customize and extend it for your own portfolio!
