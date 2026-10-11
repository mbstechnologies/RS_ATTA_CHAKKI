# RS Atta Chakki (आर. एस. आटा चक्की) 🌾

> **100% Shuddh Pathar Chakki Atta & Fresh Flour Ordering Web Application**  
> Pure, traditional, cold-pressed stone ground wheat flour with instant WhatsApp pre-booking and store pickup in Lucknow.

---

## 🌟 Key Features

- **🌾 Traditional Stone Grinding Showcase**: Interactive 3-stage milling process slider explaining grain intake, low-RPM cold stone milling, and hygienic packaging.
- **📱 WhatsApp Direct Pre-Booking**: Customers can customize their flour type, pack size (1 kg, 5 kg, 10 kg), and generate an instant WhatsApp booking link for store pickup.
- **🏪 Store Pickup Flow**: Tailored for authentic local chakki experience — customers pre-book and collect fresh, warm, aromatic flour with zero waiting.
- **🎨 Premium Visual Experience**: Warm earth-tone palette (`#4A2C11`, `#D59B2D`, `#2E7D46`, `#FEFCE8`), custom SVG illustrations (traditional chakki stone mill), responsive glassmorphic cards, and Framer Motion reveal animations.
- **📍 Lucknow Localized**: Showcases physical store presence, customer trust, and real operational highlights across Lucknow (Chatta Mill Chauraha, Madiyava, Jankipuram).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lucide Icons](https://lucide.dev/)
- **3D Graphics & Visuals**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)

---

## 📁 Project Structure

```text
AATA_CHAKKI/
├── frontend/
│   ├── public/                 # Static images, brand logo, and illustrations
│   ├── src/
│   │   ├── components/
│   │   │   ├── animations/     # Framer motion reveal wrappers
│   │   │   ├── common/         # Headings, custom SVG icons (ChakkiStoneIcon, etc.)
│   │   │   ├── layout/         # Header, MobileNav, Footer
│   │   │   ├── products/       # Product grid & size selector cards
│   │   │   └── three/          # 3D chakki & milling stage sliders
│   │   ├── data/               # Product catalogue & site configuration
│   │   ├── pages/              # Home, About, Products, Process, Contact
│   │   ├── utils/              # WhatsApp link generator & input validators
│   │   ├── App.jsx             # Route definitions & layout wrappers
│   │   └── main.jsx            # Application entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Local Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## ⚡ Deploy to Vercel

### Method 1: Via GitHub (Recommended)
1. Push this repository to your GitHub account (`git push origin main`).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New...** → **Project** and select this repository.
4. Vercel will automatically detect `vercel.json` and build settings.
5. Click **Deploy**. Your site will be live within 1 minute!

### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from terminal.

---

## 📞 Business & Contact Information

- **Brand**: RS Atta Chakki
- **Location**: Lucknow, Uttar Pradesh
- **Speciality**: 100% MP Sharbati Wheat Atta, Multigrain Atta, Chana Dal Besan, Rice Flour.
- **Ordering**: WhatsApp Instant Pre-Booking with Store Pickup.
