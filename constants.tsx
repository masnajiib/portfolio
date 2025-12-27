import { Experience, Project, Publication, SkillCategory, Education, Certification } from './types';
import { Linkedin, Mail, FileText, Phone, Instagram, Github } from 'lucide-react';

export const RESUME_URL = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_RESUME_FILE_ID}`;

export const METADATA = {
  title: "Almas Najiib Imam Muttaqin",
  description: "Portfolio of Almas Najiib, an AI Developer specializing in Computer Vision and Data Science.",
  url: "https://www.almasnajiib27.my.id",
  image: "/assets/profile/profile.png",
  type: "website",
  twitterCard: "summary_large_image"
};

export const PERSONAL_INFO = {
  name: "Almas Najiib Imam Muttaqin",
  firstName: "Almas Najiib", // First line of name in Hero
  lastName: "Imam Muttaqin", // Second line of name in Hero
  logo: "Almas", // Logo text in Navbar
  role: "AI Developer & Computer Vision Engineer", // Static role for SEO/Metadata
  typingRoles: ["AI Developer", "Computer Vision Engineer", "Data Scientist","Data Analyst"], // Roles for the typing animation
  email: import.meta.env.VITE_EMAIL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  profileImage: "/assets/profile/profile.png", // Replace with your actual photo URL
  about: "AI Developer, Data Scientist, and Informatics Engineering graduate (GPA 3.83/4.00) specializing in Computer Vision, AI Agents, and Data Analytics. Proven track record in developing scalable AI-driven solutions for the telecommunications industry, focusing on object detection models and LLM-based integration. Combines technical expertise with strong research capabilities, evidenced by 5 published scientific journals (1 as First Author, Sinta 2)."
};

// Options: 'gradient-blob', 'geometric-circle', 'tech-dots', 'solid-accent', 'tech-ring', 'ai-network', 'none'
export const PROFILE_BACKGROUND_STYLE: 'gradient-blob' | 'geometric-circle' | 'tech-dots' | 'solid-accent' | 'tech-ring' | 'ai-network' | 'none' = 'ai-network';

export const SECTION_CONTENT = {
  projects: {
    title: "Featured Projects",
    description: "A selection of AI, Computer Vision, and Data Analysis projects I've developed for enterprise and research."
  },
  certifications: {
    title: "Certifications",
    description: "Professional certifications validating expertise in AI, Machine Learning, and Data Science."
  },
  contact: {
    title: "Contact Me",
    description: "I'm currently available for freelance projects and full-time opportunities in AI Development and Data Science."
  },
  experience: {
    title: "Professional Experience",
    description: null
  },
  publications: {
    title: "Scientific Publications",
    description: null
  },
  skills: {
    title: "Technical Skills",
    description: null
  }
};

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: PERSONAL_INFO.linkedin },
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: "https://github.com/masnajiib" },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/almas_a45amg" },
  { 
    name: 'Email', 
    icon: <Mail className="w-5 h-5" />, 
    href: `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Diskusi Kerjasama")}&body=${encodeURIComponent("Halo Almas,\n\nSaya tertarik dengan profil Anda dan ingin mendiskusikan potensi kerjasama.\n\n\n\nTerima kasih.")}` 
  },
  { 
    name: 'WhatsApp', 
    icon: <Phone className="w-5 h-5" />, 
    href: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Almas, saya melihat portofolio Anda dan ingin berdiskusi lebih lanjut.")}` 
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
  // --- Professional & National Certifications ---
  {
    id: 'webinar-bisaai-1',
    title: "Generative AI with Stable Diffusion - Speaker Certificate",
    issuer: "BISA AI Academy x Kampus Merdeka",
    date: "May 2024",
    image: "/assets/certificates/bisaai_webinar/gen_ai_stable_diffusion.jpg",
    hoverText: "Speaker in the Generative AI with Stable Diffusion webinar organized by BISA AI Academy in collaboration with Kampus Merdeka.",
  },
  {
    id: 'webinar-bisaai-2',
    title: "Fundamentals of SQL - Speaker Certificate",
    issuer: "BISA AI Academy x Kampus Merdeka",
    date: "Apr 2024",
    image: "/assets/certificates/bisaai_webinar/fundamental_sql.jpg",
    hoverText: "Speaker in the Fundamentals of SQL webinar organized by BISA AI Academy in collaboration with Kampus Merdeka.",
  },
  {
    id: 'bnsp-1',
    title: "Certification Scheme of Associate Data Scientist",
    issuer: "BNSP",
    date: "Sep 2024",
    image: "/assets/certificates/bnsp/bnsp_data_science.jpg",
    hoverText: "BNSP Certification Scheme of Associate Data Scientist awarded for demonstrating competence in Data Science.",
  },
  {
    id: 'certnexus-1',
    title: "CertNexus AIBIZ™ Credential",
    issuer: "CertNexus",
    date: "Oct 2024",
    image: "/assets/certificates/certnexus/certnexus_aibiz.png",
    hoverText: "CertNexus AIBIZ™ Credential awarded for demonstrating expertise in AI business applications.",
    link: "https://www.credential.net/9d4fa8cb-3ce0-4279-a196-32db2faf8bfc#acc.QrN072iL"
  },
  {
    id: 'certnexus-2',
    title: "CertNexus DSBIZ™ Credential",
    issuer: "CertNexus",
    date: "Jul 2024",
    image: "/assets/certificates/certnexus/certnexus_dsbiz.png",
    hoverText: "CertNexus DSBIZ™ Credential awarded for demonstrating expertise in Data Science business applications.",
    link: "https://www.credential.net/705f3b12-17b8-4453-8cf5-7351727d0aab#acc.XAdp4E1i"
  },

  // --- Internship & Mentorship Programs ---
  {
    id: 'bengkod-1',
    title: "Mentor Data Science - Bengkel Koding",
    issuer: "Bengkel Koding",
    date: "Jan 2024",
    image: "/assets/certificates/bengkod/bengkod.jpg",
    hoverText: "Mentor Data Science certificate awarded by Bengkel Koding for mentoring Data Science students.",
  },
  {
    id: 'msib-1',
    title: "MSIB 6 - Data Science Participation Certificate",
    issuer: "BISA AI Academy x Kampus Merdeka",
    date: "Jun 2024",
    image: "/assets/certificates/msib_6/msib_6_data_science_certificates.jpg",
    hoverText: "Participation certificate for completing the MSIB Batch 6 Data Science independent study program organized by BISA AI Academy in collaboration with Kampus Merdeka.",
  },
  {
    id: 'kimia-farma-1',
    title: "Certificate of Competency - Kimia Farma Big Data Analytics Project Based Internship Program",
    issuer: "Kimia Farma x Rakamin Academy",
    date: "Mar 2024",
    image: "/assets/certificates/kimia farma/kimia_farma_rakamin.png",
    hoverText: "Big Data Analytics Project Based Internship Program certificate awarded by Kimia Farma in collaboration with Rakamin Academy.",
  },

  // --- Courses: BISA AI Academy ---
  {
    id: 'bisaai-c-1',
    title: "Feature Extraction for Speech Recognition",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/feature_extraction_speech.png",
    hoverText: "Certificate of completion for the Feature Extraction for Speech Recognition course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-2',
    title: "GAN Development",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/gan_development.png",
    hoverText: "Certificate of completion for the GAN Development course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-3',
    title: "GAN with PyTorch",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/gan_with_pytorch.png",
    hoverText: "Certificate of completion for the GAN with PyTorch course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-4',
    title: "Management",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/management.png",
    hoverText: "Certificate of completion for the Management course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-5',
    title: "Spatial Data Analysis & ML with R",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/spatial_data_analysis_ml_with_r.png",
    hoverText: "Certificate of completion for the Spatial Data Analysis & ML with R course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-6',
    title: "Speech Classification with Machine Learning",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/speech_classification_with_machine_learning.png",
    hoverText: "Certificate of completion for the Speech Classification with Machine Learning course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-7',
    title: "Word Embedding for NLP",
    issuer: "BISA AI Academy",
    date: "Jun 2024",
    image: "/assets/certificates/bisaai_course/word_embedding_for_nlp.png",
    hoverText: "Certificate of completion for the Word Embedding for NLP course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-8',
    title: "Big Data Analytics with PySpark",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/big_data_analytics_with_pyspark.png",
    hoverText: "Certificate of completion for the Big Data Analytics with PySpark course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-9',
    title: "Big Database with Cassandra",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/big_database_with_cassandra.png",
    hoverText: "Certificate of completion for the Big Database with Cassandra course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-10',
    title: "Data Science with R",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/data_science_with_r.png",
    hoverText: "Certificate of completion for the Data Science with R course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-11',
    title: "Deep Learning with Keras & Python",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/deep_learning_with_keras_python.png",
    hoverText: "Certificate of completion for the Deep Learning with Keras & Python course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-12',
    title: "Deep Learning with Tensorflow",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/deep_learning_with_tensorflow.png",
    hoverText: "Certificate of completion for the Deep Learning with Tensorflow course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-13',
    title: "Image Processing",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/image processing.png",
    hoverText: "Certificate of completion for the Image Processing course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-14',
    title: "Image Processing with OpenCV",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/image_processing_with_opencv.png",
    hoverText: "Certificate of completion for the Image Processing with OpenCV course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-15',
    title: "Introduction to Image Processing",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/introduction_image_processing.png",
    hoverText: "Certificate of completion for the Introduction to Image Processing course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-16',
    title: "Machine Learning",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/machine learning.png",
    hoverText: "Certificate of completion for the Machine Learning course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-17',
    title: "Machine Learning with Scikit-Learn",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/machine_learning_with_sklearn.png",
    hoverText: "Certificate of completion for the Machine Learning with Scikit-Learn course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-18',
    title: "NLP with Deep Learning",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/nlp_dengan _deep_learning.png",
    hoverText: "Certificate of completion for the NLP with Deep Learning course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-19',
    title: "Object Detection with Deep Learning",
    issuer: "BISA AI Academy",
    date: "May 2024",
    image: "/assets/certificates/bisaai_course/object_detection_deep_learning.png",
    hoverText: "Certificate of completion for the Object Detection with Deep Learning course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-20',
    title: "Basic Excel",
    issuer: "BISA AI Academy",
    date: "Apr 2024",
    image: "/assets/certificates/bisaai_course/basic_excel.png",
    hoverText: "Certificate of completion for the Basic Excel course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-21',
    title: "Basic Python",
    issuer: "BISA AI Academy",
    date: "Apr 2024",
    image: "/assets/certificates/bisaai_course/basic_python.png",
    hoverText: "Certificate of completion for the Basic Python course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-22',
    title: "SWOT Analysis in Business Planning",
    issuer: "BISA AI Academy",
    date: "Apr 2024",
    image: "/assets/certificates/bisaai_course/swot_analysis_in_business_planning_for_beginner.png",
    hoverText: "Certificate of completion for the SWOT Analysis in Business Planning course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-23',
    title: "Interpersonal Communication in Business",
    issuer: "BISA AI Academy",
    date: "Mar 2024",
    image: "/assets/certificates/bisaai_course/interpersonal_communication_in_business.png",
    hoverText: "Certificate of completion for the Interpersonal Communication in Business course offered by BISA AI Academy.",
  },
  {
    id: 'bisaai-c-24',
    title: "Introduction to Data Mining",
    issuer: "BISA AI Academy",
    date: "Mar 2024",
    image: "/assets/certificates/bisaai_course/introduction_data_mining.png",
    hoverText: "Certificate of completion for the Introduction to Data Mining course offered by BISA AI Academy.",
  },

  // --- Courses: Dicoding ---
  {
    id: 'dicoding-1',
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding",
    date: "Feb 2024",
    image: "/assets/certificates/dicoding/dicoding_memulai_python.png",
    hoverText: "Certificate awarded by Dicoding for completing the course on Pemrograman dengan Python.",
  },
  {
    id: 'dicoding-2',
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding",
    date: "Sep 2023",
    image: "/assets/certificates/dicoding/dicoding_dasar_data_science.png",
    hoverText: "Belajar Dasar Data Science certificate awarded by Dicoding.",
    link: "https://www.dicoding.com/certificates/JMZV1G3NJXN9"
  },

  // --- Courses: IBM X Coursera ---
  {
    id: 'coursera-1',
    title: "Data Analysis with Python",
    issuer: "IBM X Coursera",
    date: "Dec 2023",
    image: "/assets/certificates/coursera/coursera_ibm_data_analysis_with_python.png",
    hoverText: "Data Analysis with Python certificate awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/verify/LAADXBGGX33X"
  },
  {
    id: 'coursera-2',
    title: "Databases and SQL for Data Science with Python (with Honors)",
    issuer: "IBM X Coursera",
    date: "Dec 2023",
    image: "/assets/certificates/coursera/coursera_databases_and_sql.png",
    hoverText: "Databases and SQL for Data Science with Python certificate (with Honors) awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/certificate/6A3L9YH5T5XZ"
  },
  {
    id: 'coursera-3',
    title: "Python for Data Science, AI & Development",
    issuer: "IBM X Coursera",
    date: "Nov 2023",
    image: "/assets/certificates/coursera/coursera_python_ai_development.png",
    hoverText: "Python for Data Science, AI & Development certificate awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/certificate/AKWZQACDBTHB"
  },
  {
    id: 'coursera-4',
    title: "Python Project for Data Science",
    issuer: "IBM X Coursera",
    date: "Nov 2023",
    image: "/assets/certificates/coursera/coursera_python_for_data_science.png",
    hoverText: "Python Project for Data Science certificate awarded by IBM via Coursera.",
    link: "https://www.coursera.org/account/accomplishments/certificate/3RER66R2YDZ6"
  },

  // --- Courses: NVIDIA ---
  {
    id: 'nvidia-1',
    title: "Get Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Jan 2023",
    image: "/assets/certificates/nvidia/nvidia_deep_learning.png",
    hoverText: "Get Started with Deep Learning certificate awarded by NVIDIA.",
    link: "https://learn.nvidia.com/certificates?id=4FuhfitKQd-9BZ7MD6vKug"
  },
];