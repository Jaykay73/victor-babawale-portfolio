# Babawale Victor Ayomide — Embedded Systems Engineer Portfolio

> **"I build systems where software meets hardware."**

A production-quality personal engineering portfolio website designed with the **Industrial Futurism** aesthetic—combining laboratory instrumentation, PCB traces, deterministic state machines, interactive telemetry simulation, and authentic physical hardware storytelling.

---

## 🚀 Live Demo & Development

### Prerequisites
- Node.js 18+ (Tested on Node.js v24.11)
- npm 9+

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Server accessible at http://localhost:3000

# 3. Build for production
npm run build

# 4. Run production server
npm run start
```

---

## 🛠️ Tech Stack & Design System

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Design Palette**:
  - `Canvas Background`: `#07111F` (Deep Navy instrument canvas)
  - `Chassis Surface`: `#0D1B2A` (Secondary equipment chassis)
  - `Elevated Surface`: `#102338` (Active modules & instrument panels)
  - `Border / Trace Grid`: `#1E334A` (Subtle 1px schematic grid)
  - `Engineering Accent`: `#22D3EE` (Cyan status LEDs, active bus paths, telemetry highlights)
  - `Warm Accent`: `#D89B4A` (Copper project markers, hardware pins, editorial details)
  - `Primary Text`: `#F4F7FA` (High-contrast technical white)
  - `Secondary Text`: `#94A3B8` (Muted technical slate)
- **Typography**: Inter (Editorial sans-serif) + JetBrains Mono (Technical monospace)
- **Icons**: Lucide React + Custom SVG Circuit Traces

---

## 📑 Portfolio Narrative & Key Components

1. **Navigation (`src/components/Navbar.tsx`)**:
   - Monospace header `VICTOR.B // SYS_001`.
   - Sticky backdrop blur navigation with active section tracker.
   - Quick PDF Resume download action and responsive mobile drawer.

2. **Hero (`src/components/Hero.tsx`)**:
   - Editorial headline *"I BUILD SYSTEMS WHERE SOFTWARE MEETS HARDWARE."*
   - Featured portrait: Victor in traditional white attire (`Class of 2026`).
   - Technical coordinate markings (`LOC: 08°29'N 04°32'E`), status LED, and core stack strip (`C/C++`, `FreeRTOS`, `Microcontrollers`, `IoT`, `Hardware Integration`).
   - Direct CTAs: `[VIEW ENGINEERING WORK]` and `[DOWNLOAD CV]`.

3. **Engineering Focus (`src/components/EngineeringFocus.tsx`)**:
   - `01 / SIGNAL`: Input stages, hardware debouncing, opto-isolation, DC-DC regulation.
   - `02 / CONTROL`: Deterministic firmware, FreeRTOS scheduling, multi-phase analytics.
   - `03 / RELIABILITY`: Testing and debugging protocols, network auditing, inverter performance.

4. **Featured Project 01: Mini Smart Grid (`src/components/MiniSmartGridCaseStudy.tsx`)**:
   - Comprehensive case study breakdown based strictly on CV.
   - **Interactive System Architecture Schematic (`SmartGridArchitectureDiagram.tsx`)**: Clickable bus nodes with animated signal paths.
   - **Interactive Telemetry Panel (`TelemetryPanel.tsx`)**: Real-time simulated voltages (Phases A, B, C) with interactive dynamic load shedding toggle.
   - **Physical Hardware Prototype Gallery**: High-resolution photos of the physical benchtop test rig, transformer, transmission lines, and opto-isolated relay enclosures.

5. **Project 02: Password Controlled Lock (`src/components/PasswordLockCaseStudy.tsx`)**:
   - Embedded access controller case study.
   - **Hardware Keypad & LCD Emulator (`LockStateMachine.tsx`)**: Interactive 4x4 matrix keypad input, 16x2 character LCD feedback, and electronic solenoid lock actuation demonstration.

6. **Engineering Progression (`src/components/ExperienceProgression.tsx`)**:
   - Continuous timeline: `POWER (Solar)` &rarr; `INFRASTRUCTURE (Network)` &rarr; `EMBEDDED SYSTEMS (Autokontrol)`.
   - Verified deliverables and documentation roles.

7. **Systems Capabilities (`src/components/SystemsCapabilities.tsx`)**:
   - 3-tier functional taxonomy: Software/Firmware &rarr; MCU Core Architecture &rarr; Hardware/Power/Network Peripherals.
   - Verified University of Ilorin Computer Engineering coursework.

8. **About & Personal Dimension (`src/components/AboutSection.tsx`)**:
   - Grounded biographical narrative paired with outdoor portrait.

9. **Leadership & Stewardship (`src/components/LeadershipSection.tsx`)**:
   - Vice President & Programs Coordinator of CACSA Unilorin (400+ students).
   - Interactive modal lightbox displaying verified awards and certificates of service.

10. **Editorial Moment (`src/components/EditorialMoment.tsx`)**:
    - Full-bleed break featuring Victor's portrait with sunglasses and the core engineering philosophy statement.

11. **Contact & Console (`src/components/ContactSection.tsx`)**:
    - Direct communication terminal with one-click copy email button, direct `mailto:`, phone, and location.

---

## 📂 Asset Structure

```
public/
├── assets/
│   ├── victor-hero.jpg          # Primary Class of 2026 portrait
│   ├── victor-about.jpg         # Secondary biographical portrait
│   ├── victor-editorial.jpg     # Editorial philosophy portrait
│   ├── smart-grid-live.jpg      # Physical Smart Grid test rig (Power ON)
│   ├── smart-grid-rig.jpg       # Mini-grid chassis & substation structure
│   └── awards/
│       ├── award-most-influential.jpg   # CACSA Award of Recognition
│       ├── award-leadership.jpg          # CACSA Leadership Excellence
│       └── certificate-service.jpg       # CACSA Certificate of Service
└── Babawale_Victor_Resume.pdf  # Direct PDF CV download
```

---

## 🔒 Compliance & Integrity Note

All biographical, academic, technical, and historical career information on this site is strictly derived from the provided curriculum vitae (`Babawale_Victor.pdf`) and authentic project assets. No client names, project results, certifications, or technologies have been fabricated.
