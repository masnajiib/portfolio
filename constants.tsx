import { Experience, Project, Publication, SkillCategory, Education, Certification } from './types';
import { Linkedin, Mail, FileText, Phone, Instagram, Github } from 'lucide-react';

export const RESUME_URL = "/assets/resume/CV-Almas Najiib Imam Muttaqin.pdf"; // Replace with actual file path if hosting

export const PERSONAL_INFO = {
  name: "Almas Najiib Imam Muttaqin",
  firstName: "Almas Najiib", // First line of name in Hero
  lastName: "Imam Muttaqin", // Second line of name in Hero
  logo: "Almas", // Logo text in Navbar
  role: "AI Developer & Computer Vision Engineer", // Static role for SEO/Metadata
  typingRoles: ["AI Developer", "Computer Vision Engineer", "Data Scientist","Data Analyst"], // Roles for the typing animation
  email: "almasnajiib27@gmail.com",
  linkedin: "https://linkedin.com/in/masnajiib27",
  profileImage: "/assets/profile/profile.jpg", // Replace with your actual photo URL
  about: "AI Developer, Data Scientist, and Informatics Engineering graduate (GPA 3.83/4.00) specializing in Computer Vision, AI Agents, and Data Analytics. Proven track record in developing scalable AI-driven solutions for the telecommunications industry, focusing on object detection models and LLM-based integration. Combines technical expertise with strong research capabilities, evidenced by 5 published scientific journals (1 as First Author, Sinta 2)."
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: PERSONAL_INFO.linkedin },
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: "https://github.com/masnajiib" },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/almas_a45amg" },
  { 
    name: 'Email', 
    icon: <Mail className="w-5 h-5" />, 
    href: `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Diskusi Kerjasama")}&body=${encodeURIComponent("Halo Almas,\n\nSaya tertarik dengan profil Anda dan ingin mendiskusikan potensi kerjasama.\n\nTerima kasih.")}` 
  },
  { 
    name: 'WhatsApp', 
    icon: <Phone className="w-5 h-5" />, 
    href: `https://wa.me/6285951409211?text=${encodeURIComponent("Halo Almas, saya melihat portofolio Anda dan ingin berdiskusi lebih lanjut.")}` 
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: "Artificial Intelligence Developer (Freelance)",
    company: "Indosat Ooredoo Hutchison",
    period: "Feb 2025 – Oct 2025",
    description: [
      "Developed an AgentFlow-based AI system integrated with Sahabat AI (Indosat Ooredoo Hutchison & GoTo) for database interaction and advanced data analytics.",
      "Built AI Model Development workflows for post-material and product detection across all telecommunications operators using Computer Vision, achieving over 80% accuracy.",
      "Mentored AI interns in designing and implementing object detection models for multi-operator detection tasks.",
      "Identified critical bugs through black-box testing to improve the reliability and feature performance of internal applications."
    ]
  },
  {
    id: '2',
    role: "Artificial Intelligence Developer Internship",
    company: "Indosat Ooredoo Hutchison",
    period: "Dec 2024 – Feb 2025",
    description: [
      "Built an annotated dataset of 2,000+ images to train object detection models (IM3 and 3 brands), achieving over 90% accuracy.",
      "Supported deployment of AI systems currently used by 3,000+ users across six provinces across Indonesia.",
      "Participated in the official AI model launch at the Circle Java Kick-Off Meeting in Surabaya, attended by executives and 400+ participants."
    ]
  },
  {
    id: '3',
    role: "Supervisor Data Science",
    company: "Bengkel Koding – Dian Nuswantoro University",
    period: "Jul 2024 – Feb 2025",
    description: [
      "Monitored and evaluated teaching performance to ensure quality learning outcomes.",
      "Ensured teaching quality and evaluation materials by reviewing assistant performance and validating Capstone Project exam questions."
    ]
  },
  {
    id: '4',
    role: "AI Researcher & Scientific Contributor",
    company: "Dian Nuswantoro University",
    period: "Jul 2024 – Feb 2025",
    description: [
      "Led an AI research team, resulting in 4 published journals (Sinta 2 & 3) in Computer Vision (face recognition).",
      "Served as the first author for the Sinta 2 journal, developing a face recognition model using FaceNet512 and YOLOv8 based on Deep Learning.",
      "Contributed to Health AI research (diabetes prediction), resulting in 1 Sinta 3 journal publication."
    ]
  },
  {
    id: '5',
    role: "Mentor Data Science",
    company: "Bengkel Koding – Dian Nuswantoro University",
    period: "Sep 2023 – Jul 2024",
    description: [
      "Provided technical guidance and mentorship to Data Science students, achieving a pass rate above 80%.",
      "Developed the curriculum by updating learning modules and creating exam materials to align with current industry standards.",
      "Facilitated career preparation workshops for LSP certification, mentoring 60+ students with over 80% success rate."
    ]
  },
  {
    id: '6',
    role: "Assistant Lecturer",
    company: "Dian Nuswantoro University",
    period: "Nov 2022 – Jan 2023",
    description: [
      "Provided technical guidance and coding support for the Basic Programming course to 30+ students.",
      "Managed exam score recording, resulting in a pass rate above 90%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "CV ATS Analysis System (Applicant Tracking System)",
    role: "Developer",
    date: "Nov 2025",
    description: [
      "Developed an AI-powered CV analysis system using local Ollama models and OpenRouter to automatically evaluate candidate suitability for applied positions.",
    ],
    tags: ["Ollama", "OpenRouter", "Python", "MySQL", "AI Agents", "Local LLM"],
    image: "/assets/project/cv_ats_analyzer.jpg"
  },
  {
    id: 'p2',
    title: "Elang AI SATSPAM Model",
    role: "Developer",
    date: "Aug 2025",
    description: [
      "Developed an object detection model to detect promotional materials for the specific 'IM3 SATSPAM' and 'Tri AI - Anti Spam/Scam' Campaign.",
    ],
    tags: ["Computer Vision", "Object Detection", "Python", "Elang AI"],
    image: "/assets/project/elang_satspam.jpg",
  },
  {
    id: 'p3',
    title: "Elang AI All Operator",
    role: "Developer",
    date: "May 2025",
    description: [
      "Developed an computer vision model to detect and count products and promotional materials for all telecommunications operators (IM3, 3, Telkomsel, XL, Smartfren, Axis, by.U).",
    ],
    tags: ["Computer Vision", "YOLO", "Data Analytics"],
    image: "/assets/project/elang_all_operator.jpg"
  },
  {
    id: 'p4',
    title: "Elang LLM (AI Agent Chatbot Analytics)",
    role: "Developer",
    date: "Apr 2025",
    description: [
      "Built an AI Agent Chatbot using LLMs and an Agent Framework for data analysis and database interaction.",
    ],
    tags: ["LLM", "Agent Framework", "NLP", "Chatbot"],
    image: "/assets/project/elang_llm.jpg"
  },
  {
    id: 'p5',
    title: "Elang AI (IM3 and 3)",
    role: "Developer",
    date: "Dec 2024",
    description: [
      "Built an object detection model to identify and count products and promotional materials specific to the IM3 and 3 brands.",
    ],
    tags: ["Computer Vision", "Object Detection", "Brand Detection"],
    image: "/assets/project/elang_ai.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7289203499630829568"
  },
  {
    id: 'p6',
    title: "Face Recognition Research",
    role: "Leader of Developers and Researcher",
    date: "Jul 2024 – Feb 2025",
    description: [
      "Developed and benchmarked various face recognition models (FaceNet512, GhostFaceNet, ArcFace, etc.).",
    ],
    tags: ["FaceNet512", "ArcFace", "Research", "Python"],
    image: "/assets/project/face_recognition.jpg"
  },
  {
    id: 'p7',
    title: "Diabetes Disease Prediction Application",
    role: "Developer",
    date: "Jun 2024",
    description: [
      "Developed a diabetes prediction application using 3 Machine Learning algorithms as the Final Capstone Project for MSIB Batch 6.",
    ],
    tags: ["Machine Learning", "Health AI", "Python"],
    image: "/assets/project/diab_pred.jpg"
  },
  {
    id: 'p8',
    title: "Heart Disease Prediction Application",
    role: "Developer",
    date: "Dec 2023",
    description: [
      "Built a web application to predict heart disease using 3 Machine Learning algorithms.",
    ],
    tags: ["Machine Learning", "Web App", "Health AI"],
    image: "/assets/project/heart_disease.jpg"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: "Single-Image Face Recognition For Student Identification Using Facenet512 And Yolov8",
    journal: "Jurnal Teknik Informatika (Unsoed) - Sinta 2",
    year: "2025",
    role: "First Author",
    link: "https://jutif.if.unsoed.ac.id/index.php/jurnal/article/view/3908"
  },
  {
    id: 'pub2',
    title: "Optimizing Face Recognition and Emotion Detection in Student Identification",
    journal: "Inform (Universitas Dr. Soetomo) - Sinta 3",
    year: "2025",
    role: "Fourth Author",
    link: "https://ejournal.unitomo.ac.id/index.php/inform/article/view/9304"
  },
  {
    id: 'pub3',
    title: "Komparasi Deteksi SSD Dengan YouLook Menggunakan GhostFaceNet",
    journal: "Building of Informatics, Technology and Science (BITS) - Sinta 3",
    year: "2024",
    role: "Fourth Author",
    link: "https://ejurnal.seminar-id.com/index.php/bits/article/view/6225"
  },
  {
    id: 'pub4',
    title: "Comparison of ArcFace and Dlib Performance in Face Recognition",
    journal: "Jurnal Inovtek Polbeng - Sinta 3",
    year: "2024",
    role: "Fourth Author",
    link: "https://jurnal.polbeng.ac.id/index.php/ISI/article/view/206"
  },
  {
    id: 'pub5',
    title: "DiabTrack: Sistem Prediksi Dini Diabetes Melitus Tipe 2 berbasis Web menggunakan Algoritma K-Nearest Neighbors",
    journal: "Edumatic : Jurnal Pendidikan Informatika (Universitas Hamzanwadi) - Sinta 3",
    year: "2025",
    role: "Fourth Author",
    link: "https://e-journal.hamzanwadi.ac.id/index.php/edumatic/article/view/29691"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Data Science",
    items: [
      "AI Model Development", 
      "Machine Learning", 
      "Deep Learning", 
      "Data Science", 
      "Data Analysis", 
      "Data Visualization", 
      "NLP (Natural Language Processing)", 
      "AI Agents (Flowise)", 
      "Computer Vision (Roboflow, Ultralytics, Label Studio)"
    ]
  },
  {
    category: "Programming & Databases",
    items: [
      "Python", 
      "SQL (MySQL, PostgreSQL)", 
      "Redis", 
      "C/C++"
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      "TensorFlow", 
      "PyTorch", 
      "Docker", 
      "Git", 
      "Google Cloud Console", 
      "Flask", 
      "Tableau", 
      "Google Colab", 
      "Datagrip", 
      "Navicat", 
      "Meta for Developers", 
      "Microsoft Office", 
      "Trae", 
      "Visual Studio Code", 
      "Google Antigravity", 
      "Ollama", 
      "LM Studio", 
      "Streamlit", 
      "OpenRouter", 
      "Groq"
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Dian Nuswantoro University",
    degree: "Bachelor Degree in Informatics Engineering",
    period: "Sep 2021 – Feb 2025",
    gpa: "3.83/4.00",
    details: [
      "Selected for the 'Kelas Unggulan 2021' (Excellent Class), an exclusive program class for the top students in the Informatics Engineering major.",
      "Completed the degree program with AI research contributions resulting in 5 published scientific journals (Sinta 2 & 3) in Computer Vision and Health AI.",
      "Served as a Data Science Supervisor and Mentor for the Bengkel Koding Program."
    ],
    image: "/assets/education/logo_udinus.png"
  },
  {
    institution: "BISA AI Academy (MSIB Batch 6)",
    degree: "Independent Study - Data Science",
    period: "Feb 2024 – Jun 2024",
    gpa: "96/100 (Excellent)",
    details: [
      "Completed the Kampus Merdeka Batch 6 independent study program in Data Science.",
      "Developed a Capstone Project, creating a diabetes prediction application using 3 machine learning algorithms.",
      "Conducted 2 webinars related to Data Science during the program."
    ],
    image: "/assets/education/logo_bisaai.png"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: "CertNexus AIBIZ™ Credential",
    issuer: "CertNexus",
    date: "Oct 2024",
    image: "/assets/certificates/certnexus_aibiz.png",
    hoverText: "CertNexus AIBIZ™ Credential awarded for demonstrating expertise in AI business applications.",
    link: "https://www.credential.net/9d4fa8cb-3ce0-4279-a196-32db2faf8bfc#acc.QrN072iL"
  },
  {
    id: 'c2',
    title: "Certification Scheme of Associate Data Scientist",
    issuer: "BNSP",
    date: "Sep 2024",
    image: "/assets/certificates/bnsp_data_science.jpg",
    hoverText: "BNSP Certification Scheme of Associate Data Scientist awarded for demonstrating competence in Data Science.",
  },
  {
    id: 'c3',
    title: "CertNexus DSBIZ™ Credential",
    issuer: "CertNexus",
    date: "Jul 2024",
    image: "/assets/certificates/certnexus_dsbiz.png",
    hoverText: "CertNexus DSBIZ™ Credential awarded for demonstrating expertise in Data Science business applications.",
    link: "https://www.credential.net/705f3b12-17b8-4453-8cf5-7351727d0aab#acc.XAdp4E1i"
  },
  {
    id: 'c4',
    title: "MSIB 6 - Data Science Participation Certificate",
    issuer: "BISA AI Academy x Kampus Merdeka",
    date: "Jun 2024",
    image: "/assets/certificates/msib_6_data_science_certificates.jpg",
    hoverText: "Participation certificate for completing the MSIB Batch 6 Data Science independent study program organized by BISA AI Academy in collaboration with Kampus Merdeka.",
  },
  {
    id: 'c3',
    title: "Generative AI with Stable Diffusion - Speaker Certificate",
    issuer: "BISA AI Academy x Kampus Merdeka",
    date: "May 2024",
    image: "/assets/certificates/gen_ai_stable_diffusion.jpg",
    hoverText: "Speaker in the Generative AI with Stable Diffusion webinar organized by BISA AI Academy in collaboration with Kampus Merdeka.",
  },
  {
    id: 'c3',
    title: "Fundamentals of SQL - Speaker Certificate",
    issuer: "BISA AI Academy x Kampus Merdeka",
    date: "Apr 2024",
    image: "/assets/certificates/fundamental_sql.jpg",
    hoverText: "Speaker in the Fundamentals of SQL webinar organized by BISA AI Academy in collaboration with Kampus Merdeka.",
  },
  {
    id: 'c4',
    title: "Certificate of Competency - Kimia Farma Big Data Analytics Project Based Internship Program",
    issuer: "Kimia Farma x Rakamin Academy",
    date: "Mar 2024",
    image: "/assets/certificates/kimia_farma_rakamin.png",
    hoverText: "Big Data Analytics Project Based Internship Program certificate awarded by Kimia Farma in collaboration with Rakamin Academy.",
  },
  {
    id: 'c5',
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding",
    date: "Feb 2024",
    image: "/assets/certificates/dicoding_memulai_python.png",
    hoverText: "Certificate awarded by Dicoding for completing the course on Pemrograman dengan Python.",
  },
  {
    id: 'c5',
    title: "Mentor Data Science - Bengkel Koding",
    issuer: "Bengkel Koding",
    date: "Jan 2024",
    image: "/assets/certificates/bengkod.jpg",
    hoverText: "Mentor Data Science certificate awarded by Bengkel Koding for mentoring Data Science students.",
  },
  {
    id: 'c5',
    title: "Data Analysis with Python",
    issuer: "IBM X Coursera",
    date: "Dec 2023",
    image: "/assets/certificates/coursera_ibm_data_analysis_with_python.png",
    hoverText: "Data Analysis with Python certificate awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/verify/LAADXBGGX33X"
  },
  {
    id: 'c5',
    title: "Databases and SQL for Data Science with Python (with Honors)",
    issuer: "IBM X Coursera",
    date: "Dec 2023",
    image: "/assets/certificates/coursera_databases_and_sql.png",
    hoverText: "Databases and SQL for Data Science with Python certificate (with Honors) awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/certificate/6A3L9YH5T5XZ"
  },
  {
    id: 'c5',
    title: "Python Project for Data Science",
    issuer: "IBM X Coursera",
    date: "Nov 2023",
    image: "/assets/certificates/coursera_python_for_data_science.png",
    hoverText: "Python Project for Data Science certificate awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/certificate/3RER66R2YDZ6"
  },
  {
    id: 'c5',
    title: "Python for Data Science, AI & Development",
    issuer: "IBM X Coursera",
    date: "Nov 2023",
    image: "/assets/certificates/coursera_python_ai_development.png",
    hoverText: "Python for Data Science, AI & Development certificate awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/certificate/AKWZQACDBTHB"
  },
  {
    id: 'c5',
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding",
    date: "Sep 2023",
    image: "/assets/certificates/dicoding_dasar_data_science.png",
    hoverText: "Belajar Dasar Data Science certificate awarded by Dicoding.",
    link: "https://www.dicoding.com/certificates/JMZV1G3NJXN9"
  },
  {
    id: 'c5',
    title: "Get Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Jan 2023",
    image: "/assets/certificates/nvidia_deep_learning.png",
    hoverText: "Get Started with Deep Learning certificate awarded by NVIDIA.",
    link: "https://learn.nvidia.com/certificates?id=4FuhfitKQd-9BZ7MD6vKug"
  },
];