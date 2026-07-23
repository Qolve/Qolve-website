# Qolve Website

The official website for **Qolve** — built with React, Vite, and Tailwind CSS, deployed on Vercel.

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| [React](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |
| [Vercel](https://vercel.com/) | Hosting & deployment |

## 📁 Project Structure

```
Qolve-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── App.jsx          # Root application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vercel.json          # Vercel deployment config
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Qolve/Qolve-website.git
cd Qolve-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌍 Deployment

This project is deployed automatically via **Vercel**. Any push to the `main` branch triggers a new deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

© Qolve. All rights reserved.
