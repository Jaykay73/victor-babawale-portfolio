export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  domain: "EMBEDDED" | "INFRASTRUCTURE" | "POWER";
  domainLabel: string;
  simpleTakeaway: string;
  responsibilities: string[];
  techFocus: string[];
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  institution: string;
  period: string;
  communitySize: string;
  simpleSummary: string;
  achievements: string[];
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  nonTechnicalSummary: {
    problem: string;
    solution: string;
    impact: string;
  };
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  firmware: string;
  architecture: {
    inputs: string[];
    core: string[];
    outputs: string[];
    interfaces: string[];
  };
  image?: string;
  secondaryImage?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  citation: string;
  image: string;
}

export const PROFILE = {
  name: "Babawale Victor Ayomide",
  shortName: "Victor Babawale",
  brandHandle: "VICTOR.B",
  title: "Embedded Systems Engineer",
  tagline: "I build systems where software meets hardware.",
  heroSummary:
    "I am an Embedded Systems Engineer focused on firmware, microcontrollers, IoT, hardware integration, and reliable real-world physical systems.",
  contact: {
    email: "victorbabawale65@gmail.com",
    phone: "+234 808-606-2579",
    location: "Lagos / Ilorin, Nigeria",
    cvPath: "/Babawale_Victor_Resume.pdf",
  },
  education: {
    institution: "University of Ilorin, Nigeria",
    degree: "Bachelor of Engineering, Computer Engineering",
    period: "2021 – 2026",
    coursework: [
      "Microcontroller System Architecture & Interfacing",
      "Computer Organization & Architecture",
      "Embedded C / C++ Programming",
      "Embedded Software Testing & Verification",
    ],
  },
  coreCompetencies: [
    {
      code: "01",
      name: "SIGNAL",
      heading: "Hardware Interfacing & Signal Integrity",
      summary:
        "I design physical input stages with hardware debouncing, electrical isolation, and stable voltage regulation so that signals from the physical world enter the processor cleanly and accurately.",
    },
    {
      code: "02",
      name: "CONTROL",
      heading: "Deterministic Firmware & RTOS",
      summary:
        "I write reliable C/C++ code running on FreeRTOS and bare-metal microcontrollers to execute time-critical tasks, safety rules, and automated hardware control without lagging or freezing.",
    },
    {
      code: "03",
      name: "RELIABILITY",
      heading: "Testing, Power & Infrastructure",
      summary:
        "I draft rigorous testing and debugging protocols to catch bugs before deployment, audit physical network cables, and verify electrical power systems under real load conditions.",
    },
  ],
};

export const PROJECTS: ProjectData[] = [
  {
    id: "mini-smart-grid",
    number: "01",
    title: "Mini Smart Grid",
    subtitle: "Real-Time Power Monitoring & Automatic Blackout Prevention",
    category: "IoT-Enabled Embedded Power Infrastructure",
    nonTechnicalSummary: {
      problem:
        "When too many appliances or businesses use electricity at the same time, power transformers can overload and fail, causing widespread blackouts and expensive equipment damage.",
      solution:
        "I built an intelligent mini-grid system that continuously monitors electricity across three phases. If power demand rises too high, it automatically and safely turns off non-essential sections to prevent the entire system from crashing.",
      impact:
        "Keeps critical power running, protects expensive electrical equipment from burning out, and lets technicians monitor power usage both on an on-site screen and through an online dashboard.",
    },
    description:
      "I architected an IoT-enabled smart mini-grid system with dual telemetry interfaces, leveraging a localized GLCD and a remote web dashboard for real-time monitoring and user feedback. I engineered robust hardware-to-microcontroller interfaces using opto-isolated relay drivers and custom DC-DC voltage regulation to ensure safety when switching high-power loads. I programmed C/C++ firmware on FreeRTOS to handle multi-phase power analytics, continuously evaluating real-time demand against safety thresholds to execute dynamic load shedding across independent phase relays.",
    highlights: [
      "I architected dual telemetry interfaces featuring a localized screen and an online dashboard so power status can be viewed on-site and remotely.",
      "I engineered protective electrical isolation (opto-isolated drivers) and custom power regulation to protect sensitive microchips when controlling high-voltage electricity.",
      "I programmed C/C++ firmware on FreeRTOS that monitors power across 3 phases in real time and automatically turns off overloaded sections before a blackout occurs.",
    ],
    specs: [
      { label: "Core Operating System", value: "FreeRTOS (Real-Time OS)" },
      { label: "Programming Languages", value: "Embedded C / C++" },
      { label: "Hardware Safety", value: "Opto-Isolated Protection" },
      { label: "Power Regulation", value: "Custom DC-DC Voltage Stage" },
      { label: "Monitoring Interfaces", value: "Dual: On-site Display + Web Dashboard" },
      { label: "Primary Function", value: "Automatic Multi-Phase Load Shedding" },
    ],
    firmware: "FreeRTOS / C++ Preemptive Real-Time Task Scheduler",
    architecture: {
      inputs: ["3-Phase Power Supply (Phases A, B, C)", "Voltage & Current Sensors", "Safety Limit Settings"],
      core: ["Microcontroller Processing Unit", "FreeRTOS Task Scheduler", "Power Analytics Algorithm"],
      outputs: ["Opto-Isolated Switch Relays", "Independent Phase Appliances", "Emergency High-Power Cutoff"],
      interfaces: ["On-Site Graphic LCD Screen", "Remote Online IoT Dashboard"],
    },
    image: "/assets/smart-grid-live.jpg",
    secondaryImage: "/assets/smart-grid-rig.jpg",
  },
  {
    id: "password-controlled-lock",
    number: "02",
    title: "Password Controlled Lock",
    subtitle: "Electronic Security Access System with Keypad & LCD Display",
    category: "Embedded Security & Hardware Interfacing",
    nonTechnicalSummary: {
      problem:
        "Traditional mechanical keys can easily be lost or duplicated, while low-quality electronic keypads often register duplicate keystrokes or freeze when buttons are pressed.",
      solution:
        "I designed and built an embedded electronic door lock. Users enter a secret PIN on a physical keypad, an LCD screen provides instant feedback, and the system electronically actuates the lock only when the code matches.",
      impact:
        "Provides keyless digital security with electronic filtering (debouncing) that guarantees every button press registers cleanly without glitches.",
    },
    description:
      "I designed and built an embedded security system featuring a key-based keypad input interface and an LCD display for real-time user feedback. I integrated hardware components with proper signal conditioning and debouncing to ensure clean button detection. I developed firmware in C/C++ to process user input, compare security codes against stored values, and actuate the electronic locking mechanism.",
    highlights: [
      "I designed and built an embedded security system with a tactile keypad and an LCD screen for clear, instant feedback.",
      "I implemented hardware signal conditioning and debouncing to prevent false triggers and ensure each button press registers accurately.",
      "I developed firmware in C/C++ that securely checks entered PINs and sends an electrical pulse to open the lock when correct.",
    ],
    specs: [
      { label: "User Input", value: "4x4 Matrix Keypad" },
      { label: "Button Filtering", value: "Hardware Debouncing & RC Filter" },
      { label: "User Feedback", value: "Real-Time 16x2 Character LCD" },
      { label: "Firmware Logic", value: "Embedded C / C++ State Machine" },
      { label: "Physical Actuator", value: "Electronic Solenoid / Relay Lock" },
      { label: "Security Verification", value: "PIN Comparison Logic" },
    ],
    firmware: "Bare-Metal C/C++ Deterministic State Machine",
    architecture: {
      inputs: ["Keypad Matrix Lines", "Hardware Debounce Circuit", "Signal Filtering"],
      core: ["Microcontroller Chip", "PIN Validation Logic", "Security State Machine"],
      outputs: ["Electronic Lock Solenoid", "Relay Driver Circuit"],
      interfaces: ["Real-Time LCD Screen"],
    },
  },
];

export const EXPERIENCE_PROGRESSION: WorkExperience[] = [
  {
    id: "autokontrol-embedded",
    role: "Embedded System Engineer",
    organization: "Autokontrol Technology",
    period: "Aug 2025 – Present",
    domain: "EMBEDDED",
    domainLabel: "03 / EMBEDDED SYSTEMS & FIRMWARE",
    simpleTakeaway:
      "I program microcontrollers, speed up industrial control systems, and write thorough testing procedures so hardware works reliably without errors.",
    responsibilities: [
      "I assisted in optimizing firmware and microcontroller architectures for industrial control units, improving system processing speed.",
      "I drafted and implemented embedded software testing and debugging protocols, reducing code defects and signal inconsistencies.",
      "I supported the creation of detailed technical documentation, hardware schematics, and project reports for engineering stakeholders.",
    ],
    techFocus: [
      "Microcontroller Architectures",
      "Firmware Optimization",
      "Industrial Control Units",
      "Hardware Schematics",
      "Testing & Debugging Protocols",
    ],
  },
  {
    id: "lsdpc-network",
    role: "Network Engineering Intern",
    organization: "Lagos State Development & Property Corporation",
    period: "Mar 2025 – Aug 2025",
    domain: "INFRASTRUCTURE",
    domainLabel: "02 / ENTERPRISE NETWORK INFRASTRUCTURE",
    simpleTakeaway:
      "I managed enterprise computer networks (LAN/WAN), audited hardware equipment, and installed fiber and Cat6 network cabling.",
    responsibilities: [
      "I assisted in the management of local area networks (LAN) and wide area networks (WAN), supporting seamless operations for enterprise end-users.",
      "I collaborated with cross-functional IT teams to audit hardware assets, map active network ports, and streamline infrastructure documentation.",
      "I executed physical cable installation, testing, and labeling (Cat6/Fiber) in compliance with telecommunications standards.",
    ],
    techFocus: [
      "LAN / WAN Management",
      "Cat6 & Fiber Optics",
      "Hardware Asset Auditing",
      "Network Port Mapping",
      "Infrastructure Documentation",
    ],
  },
  {
    id: "autokontrol-solar",
    role: "Solar Installation Engineer Intern",
    organization: "Autokontrol Technology",
    period: "Mar 2024 – Mar 2025",
    domain: "POWER",
    domainLabel: "01 / CLEAN ENERGY & SOLAR POWER",
    simpleTakeaway:
      "I installed solar panels, wired electrical arrays, and analyzed inverter performance data to help clients generate maximum clean energy.",
    responsibilities: [
      "I executed physical array setups and electrical wiring for photovoltaic panels, increasing total system energy capture across active client sites.",
      "I evaluated inverter performance metrics and solar array output data to optimize clean energy production and system reliability.",
      "I partnered with field engineers to design and assemble custom racking models and cable management systems for specialized roof structures.",
    ],
    techFocus: [
      "Photovoltaic Arrays",
      "Electrical Wiring",
      "Inverter Performance Analytics",
      "Solar Output Telemetry",
      "Custom Racking & Cable Management",
    ],
  },
];

export const LEADERSHIP: LeadershipRole[] = [
  {
    id: "cacsa-vp",
    role: "Vice President",
    organization: "Christ Apostolic Church Students Association",
    institution: "University of Ilorin, Nigeria",
    period: "2025 – 2026",
    communitySize: "400+ Student Members",
    simpleSummary:
      "I served as the elected second-in-command for a 400+ student organization, leading event execution, delegating tasks, and coordinating teams.",
    achievements: [
      "I served as Vice President representing and coordinating an active community of over 400 university students.",
      "I supported the planning, coordination, and execution of association programs, ensuring effective communication and participation across the student community.",
      "I worked with executive members and program coordinators to organize student activities, allocate responsibilities, and ensure smooth execution of events.",
      "I provided leadership and direction to student members, fostering structured collaboration, accountability, and active participation.",
    ],
  },
  {
    id: "cacsa-programs",
    role: "Programs Coordinator",
    organization: "Christ Apostolic Church Students Association",
    institution: "University of Ilorin, Nigeria",
    period: "2023 – 2025",
    communitySize: "400+ Student Members",
    simpleSummary:
      "I managed schedules, volunteers, and logistics to successfully run large-scale community events for hundreds of attendees.",
    achievements: [
      "I led the planning and coordination of programs for a community of over 400 students, organizing activities and ensuring high engagement.",
      "I developed and coordinated program schedules, communicated activities to members, and managed cross-functional delivery teams.",
      "I organized students into operational teams and delegated responsibilities to support the efficient delivery of major programs.",
      "I coordinated volunteers and student leaders, monitored assigned responsibilities, and resolved real-time operational challenges during execution.",
    ],
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: "most-influential",
    title: "Most Influential Award",
    issuer: "CACSA UNILORIN Final Year Brethren",
    category: "Leadership & Community Impact",
    citation:
      "Award of Recognition presented in recognition of exceptional influence, exemplary leadership, and unwavering commitment to inspiring positive change and making a lasting impact within the community.",
    image: "/assets/awards/award-most-influential.jpg",
  },
  {
    id: "leadership-excellence",
    title: "Leadership Excellence Award",
    issuer: "CACSA UNILORIN Final Year Brethren",
    category: "Executive Governance",
    citation:
      "Award of Recognition for Leadership Excellence in recognition of exceptional leadership, unwavering dedication to service, and remarkable ability to inspire, guide, and positively influence others through exemplary character and commitment to excellence.",
    image: "/assets/awards/award-leadership.jpg",
  },
  {
    id: "certificate-of-service",
    title: "Certificate of Service",
    issuer: "CACSA UNILORIN, PS Chapter",
    category: "Institutional Service",
    citation:
      "Presented in recognition of faithful service, dedication, and commitment to student welfare, organizational governance, and community coordination.",
    image: "/assets/awards/certificate-service.jpg",
  },
];

export const SKILLS_LIST = [
  { name: "Embedded C / C++", category: "Firmware", level: "Core", desc: "Low-level programming, register manipulation, peripheral drivers" },
  { name: "FreeRTOS", category: "Firmware", level: "Core", desc: "Real-time operating system task scheduling and concurrency" },
  { name: "Microcontroller Architecture", category: "Hardware", level: "Architecture", desc: "Interfacing, memory maps, interrupts, timers, PWM" },
  { name: "Hardware Debouncing", category: "Hardware", level: "Signal", desc: "Filtering mechanical switch noise for clean digital inputs" },
  { name: "Opto-Isolated Drivers", category: "Hardware", level: "Safety", desc: "Protecting sensitive processing chips from high-power loads" },
  { name: "DC-DC Voltage Regulation", category: "Hardware", level: "Power", desc: "Stable voltage rails for embedded microchips" },
  { name: "Testing & Debugging Protocols", category: "Verification", level: "Quality", desc: "Catching code defects and eliminating signal inconsistencies" },
  { name: "Hardware Schematics & Docs", category: "Engineering", level: "Docs", desc: "Detailed schematics, wiring diagrams, and technical reports" },
  { name: "Data Analysis", category: "Analytics", level: "Data", desc: "Evaluating power metrics, inverter telemetry, and sensor trends" },
  { name: "Photovoltaic Solar Wiring", category: "Power", level: "Energy", desc: "Solar panel array setups and electrical wiring on client sites" },
  { name: "Inverter Telemetry Analysis", category: "Power", level: "Energy", desc: "Benchmarking solar inverter efficiency and energy capture" },
  { name: "LAN / WAN Management", category: "Networking", level: "Network", desc: "Configuring and maintaining enterprise computer networks" },
  { name: "Cat6 & Fiber Optic Cabling", category: "Networking", level: "Physical", desc: "Cable installation, testing, and telecom port mapping" },
  { name: "Technical Team Leadership", category: "Leadership", level: "People", desc: "Coordinating 400+ student body members and project teams" },
  { name: "Cross-Functional Collaboration", category: "Leadership", level: "Soft Skill", desc: "Partnering with field engineers, technicians, and stakeholders" },
];

// Verified first-person voice across all engineering sections
