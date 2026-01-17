import { Experience, Project, Education, Award, SkillDomain } from "./types";

export const PERSONAL_INFO = {
  name: "Riya Bansal",
  title: "Robotics and Embedded Engineer",
  tagline: "Architecting intelligence from silicon to cloud.",
  about: "I am an Electronics & Communication Engineer specializing in Firmware and Embedded Systems. With a strong foundation in microcontrollers like ARM (STM32H7, N6),ESP32, AVR(nano, mega, uno), I bridge the gap between hardware and software. My experience ranges from semiconductor fabrication to developing industrial control systems and autonomous robotics through sensor integrations and actuator systems. I design PCBs, write optimized firmware, and build scalable IoT solutions.",
  email: "riyabansal2103@gmail.com",
  phone: "+91 7717524508",
  location: "Chandigarh, India",
  socials: {
    github: "https://github.com/riya3002",
    linkedin: "https://linkedin.com/in/riya-bansal-361718230",
    gmail: "mailto:riyabansal2103@gmail.com",
    instagram: "https://www.instagram.com/bansalriya_21"
  }
};

export const SERVICES = [
  
  {
    id: 'firmware',
    title: 'Firmware Development',
    description: 'Writing efficient, real-time C/python code for ARM STM32H7, ESP32, and AVR. Expertise in RTOS (FreeRTOS), bare-metal programming, driver developments, motion control, OTA updates, sensor integration, and industrial communication stacks.',
    tags: ['C', 'python' , 'RTOS', 'Drivers',
    'Sensor Integration',
    'CAN/CANopen & RS485',
    'Ethernet/IP & MQTT',
    'SPI/I2C/UART',
    'OTA Updates',
    'Debugging',
    'JTAG/SWD']
  },
  {
    id: 'pcb',
    title: 'PCB Design & Hardware',
    description: 'Designing and validating embedded hardware for robotics including custom PCBs, sensor interfaces, actuator control stages, and industrial IO. Experience with board bring-up, signal testing, PLC/controller interfacing, and field deployment.',
    tags: [
      'KiCad',
      'Altium',
      'Board Bring-up',
      'Power Stages',
      'Motor Drivers',
      'Sensors',
      'Actuators',
      'PLC Interfacing',
      'Signal Integrity',
      'EMI/EMC',
      'Debugging'
    ]
  },
  {
    id: 'iot',
    title: 'IoT & Full Stack',
    description: 'End-to-end IoT solutions. Connecting hardware to the cloud using MQTT/HTTP, building dashboards with React/Next.js, and managing device fleets.',
    tags: ['React', 'Next js', 'CSS & Tailwind','MQTT', 'HTTP']
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "UIET, Panjab University, Chandigarh",
    period: "Nov 2021 - June 2025",
    gpa: "8.6",
    courses: ["Embedded Systems", "Operating Systems", "Control Systems", "Semiconductors", "Power Systems"]
  },
    {
    id: "2",
    degree: " 12th  ",
    institution: "D.C Montessorie Sr. Sec. School",
    period: "April 2018 - June 2021",
    gpa: "9.34",
    courses: ["Non Medical"]
  },
    {
    id: "3",
    degree: " 10th  ",
    institution: "D.C Model Sr. Sec. School",
    period: "April 2017 - June 2018",
    gpa: "9.34",
    courses: [""]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Human Fall Detection System",
    description: "A wearable device for real-time fall detection and prevention, featuring multi-level alerts and data synchronization for emergency response. Integrated gyroscope and accelerometer data to detect sudden orientation changes.",
    tags: ["ESP32 & IoT", "MPU6050, BMP180,Hall Effect Sensor", "Mobile App"],
    imageUrl: "/humanfall2.png",
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "Nano Navigator (Micromouse)",
    description: "An autonomous micromouse programmed to efficiently explore and solve intricate maze layouts. Implemented advanced control algorithms using cutting-edge sensors and precision motors.",
    tags: ["STM32F1xxx", " IR and Ultrasonic Sensors", "PID Control"," L293D  DC Motors","Buck/Boost Converters", "KiCad"],
    imageUrl: "/nanonavigator.jpg",
    link: "https://github.com/Riya3002/Embedded_Projects/tree/main/nanonavigator_final",
    github: "#"
  },
  {
    id: "3",
    title: "Faraday Station",
    description: "Prototype for wireless charging of moving electric vehicles using a chain of induction plates embedded under the road surface. Utilized copper inductive coils and efficient rectification circuits.",
    tags: ["Wireless Power Transfer", "Power Electronics", "Rectifiers & Inductive Coupling"],
    imageUrl: "/faraday.jpg",
    link: "#",
    github: "#"
  },
  {
    id: "4",
    title: "Bionic Prosthetic Arm",
    description: "A fully functional patient specific 3D printed transradial bionic prosthetic arm, capable of identifying gestures to be performed, through a hybrid signal acquisition system with EEG cap and EMG sensors",
    tags: ["ESP32", "EEG & EMG sensors", "Servo Motors"],
    imageUrl: "/dic2.jpg",
    link: "https://dicpu.in/projects",
    github: "#"
  },
  {
    id: "5",
    title: "Jugaad Robotics Club, UIET, Panjab University",
    description: "Led and built a modern, full-stack website for the university robotics club with responsive design, smooth animations, and backend integration.",
    tags: ["Next Js","Typescript", "framer motion & tailwind", "mongoDB"],
    imageUrl: "/jugaadweb.png",
    link: "https://jugaadclub.in/",
    github: "#"
  }
];

export const EXPERIENCE: Experience[] = [
   {
    id: "1",
    role: "Embedded & Controls Engineer",
    company: "Illuminify Technologies (AccioRobotics)",
    website: 'https://acciorobotics.com/',
    period: "July 2025 - Present",
    description:  "Owning the development of full-stack embedded and control firmware for industrial robotic systems. Working across motion control, PLC logic, vision modules, and hardware bring-up to deliver production-ready robotic platforms.",
    highlights: [
      "Developing STM32H7 firmware for multi-axis robot control including communication, motion, and safety subsystems.",
      "Spearheading PLC-side control logic for the entire robotic gantry system, including sensor interfacing, motion sequencing, and system-level coordination on Omron NX1P2 along with coordinated X-Z interpolation with homing, limits, and safety interlocks.",
      "Implemented CANopen and proprietary velocity/position control over FDCAN for multiple industrial servo and stepper drives (Kinco, ZLTech, Moons, etc.).",
      "Integrated MQTT, RS485, Ethernet, and CAN for distributed robot communication.",
      "Designed OTA firmware update pipelines for field-deployed units.",
      "Integrated EtherNet/IP industrial vision modules including Leuze PXV100, Cognex, and iRayple, and developed OpenMV firmware for tag detection, path acquisition, and peripheral communication within the robotic workflow.",
      "Designed and debugged custom PCBs for robot control modules including power, sensors, and communication layers.",
      "Performed system bring-up, signal validation, and robotic testing for reliable deployment."
],
    images: [
      "/accio.jpg",
      "https://images.unsplash.com/photo-1629739884942-8678d13afdd6?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "2",
    role: "Firmware Development Intern",
    company: "Illuminify Technologies (AccioRobotics)",
    website: 'https://acciorobotics.com/',
    period: "Jan 2025 - Jun 2025",
    description: "Developing and optimizing firmware for STM32H7-based control systems. Integrating protocols like RS485, CAN, MQTT, and Ethernet. Designing custom PCBs and implementing OTA firmware update mechanisms.",
    highlights: [
      "Implemented RS485, Ethernet, CAN (FDCAN), and MQTT for multi-node communication.",
      "Built CANopen-based velocity control for servo drives using Kinco MD60.",
      "Developed SDO, PDO, and NMT routines for motion and device management.",
      "Implemented OTA firmware updates for remote maintenance and reliability.",
      "Performed board bring-up, sensor interfacing, and low-level driver development.",
      "Designed custom PCBs and handled assembly, rework, soldering, and debugging.",
    ],
    images: [
      "/accio.jpg",
      "https://images.unsplash.com/photo-1629739884942-8678d13afdd6?auto=format&fit=crop&q=80&w=400"
    ]
  },
  {
    id: "3",
    role: "Semiconductor Fabrication Trainee",
    company: " National Tsing Hua University, TAIWAN & IIT Hyderabad",
    website: 'https://iith.ac.in/',
    period: "June 2024 - Aug 2024",
    description: "Selected among top 15 students for the Indo-Taiwan Collaborative Workforce Development Program. Gained hands-on experience in wafer fabrication, photolithography, and thin-film deposition in cleanrooms.",
    highlights: [
      "Hands-on wafer fabrication: Cleaning, oxidation, etching, metallization, lithography.",
      "Merit Selection: Top 15 from nationwide applicants.",
      "Insights into TSMC's manufacturing processes."
    ],
    images: [
      "/1.jpg",
      "/2.jpg"
    ]
  },
  {
    id: "4",
    role: "Vice President",
    company: "Jugaad Robotics Club",
    website: 'https://jugaadclub.in/',
    period: "Nov 2023 - Sep 2024",
    description: "Led and built multiple robotics and electronics projects while driving hands-on prototyping initiatives and improving club engagement through technology-driven interfaces.",
    highlights: [
    "Designed and built projects including NanoNavigator, e-Conveyor, Morse Code Detector, Faraday Station, Authentication System, and Line Following Robot.",
    "Used Ender 3 for 3D printing and prototyping custom parts for robotics and electronics projects.",
    "Led workshops on 3D printing, mentoring peers on practical engineering applications.",
    "Developed an intuitive interface that increased new member sign-ups by 25% and attracts ~100 unique visitors per month."
    ],
    images: [
      "/jugaad4.jpg",
      "/jugaad.jpg"
    ]
  },
  {
    id: "5",
    role: "PCB Designing Intern",
    company: "Menthosa Solutions",
    website: 'https://menthosa.com/',
    period: "May 2024 - June 2024",
    description: "Designed PCBs for drones and components using KiCad. Created a GPS RTK module using ZED F9P for high-precision drone navigation.",
    highlights:[],
    images: [
      "/pcb.png"
    ]
  },
  {
    id: "6",
    role: "Project Intern",
    company: "Design Innovation Centre, Panjab University",
    website: 'https://dicpu.in/',
    period: "March2023 - Sept2023",
    description: "Worked on a patient-specific transradial bionic prosthetic arm project involving hybrid EEG–EMG signal acquisition, embedded control, and additive manufacturing, while mentoring students and supporting institutional web development.",
    highlights: [
    "Implemented gesture identification using EEG cap and EMG sensor data.",
    "Assisted in embedded system integration and 3D-printed prosthetic design.",
    "Mentored 30+ students during an embedded systems summer training program.",
    ],
    images: [
      "/dic.jpg",
      "/dic2.jpg",
    ]
  }
];

export const SKILLS: SkillDomain[] = [
  {
    domain: "Embedded Systems & Robotics",
    categories: [
      {
        name: "Languages",
        items: ["C", "Embedded C", "Python", "ST line and Ladder logics"]
      },
      {
        name: "Microcontrollers and Harwares",
        items: ["STM32 (F4/H7)", "ESP32", "Arduino", "Rasberry pi Pico H", "ICs", "Control systems", "PCB Soldering", "Sensor and actuator integrations"]
      },
      {
        name: "Protocols",
        items: ["I2C", "SPI", "UART", "RS485", "CAN", "MQTT", "Ethernet", "Ethercat"]
      },
      {
        name: "Firmware Ecosystem and softwares",
        items: ["FreeRTOS", "STM32CubeIDE", "Arduino IDE", "MQTT Explorer and Debugger softwares", "Kicad"]
      }
    ]
  },
  {
    domain: "Web Development",
    categories: [
  {
    name: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS"
    ]
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MQTT Broker"
    ]
  },
  {
    name: "Database & Tools",
    items: [
      "MongoDB",
      "MySQL",
      "UI Prototyping (Figma, Canva)"
    ]
  }
  ]
  },
  {
    domain: "Development & Testing Tools",
    categories: [
      {
        name: "Software Tools",
        items: ["Git", "VS Code", " Eclipse IDE", "Stm32cubeIDE", "Arduino IDE"]
      },
      {
        name: "Hardware Testing",
        items: ["Logic Analyzers", "Oscilloscopes", "Multimeters", "Soldering Station"]
      }
    ]
  },
  {
    domain: "Graphic Design & Prototyping",
    categories: [
      {
        name: "Design Software",
        items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma (UI/UX)"]
      },
      {
        name: "CAD & Prototyping",
        items: ["KiCad", "Altium Designer", "Fusion360", "3D Printing"]
      }
    ]
  },
  {
    domain: "Professional & Soft Skills",
    categories: [
  {
    name: "Leadership & Strategy",
    items: [
      "Project Management",
      "Team Building",
      "Event Organization",
      "Strategic Thinking",
      "Problem Solving",
      "Analytical Thinking",
      "Decision Making"
    ]
  },
  {
    name: "Communication & Execution",
    items: [
      "Mentoring",
      "Public Speaking",
      "Technical Writing",
      "Workshops",
      "Time Management",
      "Adaptability",
      "Collaboration"
    ]
  }
  ]
  }
];

export const AWARDS: Award[] = [
  {
    id: "1",
    title: "Winner in Techzibition - Faraday Station",
    organization: "Cognizance'24, IIT Roorkee",
    date: "Jan 2024",
    description: "Awarded first place for the innovative wireless EV charging prototype project."
  },
  {
    id: "2",
    title: "Branch Topper (First Year)",
    organization: "UIET, Panjab University",
    date: "2021 - 2022",
    description: "Achieved highest academic standing in the branch."
  }
];

// New Carousel Images representing the journey
export const JOURNEY_IMAGES = [
  "/1.jpg", 
  "/teslacoil.jpg",
  "/2.jpg", 
  // "/3.jpg", 
  "/5.jpg", 
  "/6.jpg", 
  "/jugaad5.jpg",
  "/9.jpg", 
  "/jugaad2.jpg",
  "/nanonavigator.jpg",
  "/4.jpg",
  "/faradaystation.jpg",
  "/10.jpg",
  "/accio.jpg",
  "/faraday.jpg",
  "/dic.jpg",
  "/jugaad.jpg",
  "/dic2.jpg",
  "/jugaad3.jpg",
  "/jugaad4.jpg",
  "/dic3.jpg",
  "/jugaad6.jpg",
];