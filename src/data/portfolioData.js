export const personalInfo = {
  name: "Harshith Veerapur",
  title: "Software Engineer & AI/ML Developer",
  taglines: [
    "AI Intern @ Infosys (PMIS)",
    "Former AI/ML Engineer Intern @ Inventeron",
    "Building ML Web Apps & Applied AI Pipelines",
    "Designing Relational MySQL Architectures & Flask APIs",
    "B.Tech in CS & Business Systems (CGPA: 8.5/10)"
  ],
  bio: "Computer Science and Business Systems graduate (CGPA 8.5/10) with hands-on experience building Flask web applications, relational database reporting solutions, and machine learning pipelines. AI Intern at Infosys, former AI/ML Intern at Inventeron Technologies. Creator of production ML tools like the EV Range Predictor, InsightBoard analytics, and StegoChat.",
  location: "Koppal / Bengaluru, Karnataka, India",
  phone: "+91-8618161910",
  email: "harshitveerapur4@gmail.com",
  github: "https://github.com/harshithv2004",
  githubUsername: "harshithv2004",
  linkedin: "https://linkedin.com/in/harshithveerapur",
  resumeUrl: "/Harshith_Veerapur_Resume.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/159939204?v=4",
  status: "Available for Entry-Level Software Engineer & Application Developer Roles",
  stats: [
    { label: "B.Tech CGPA", value: "8.5 / 10" },
    { label: "Industry Internships", value: "2 Roles (Infosys & Inventeron)" },
    { label: "Public GitHub Repos", value: "14+" },
    { label: "Flagship ML & SQL Apps", value: "Live & Tested" }
  ]
};

export const experiencesData = [
  {
    role: "AI Intern",
    company: "Infosys (PMIS)",
    period: "Sep 2026 – Present",
    location: "Training Program",
    badge: "Current Role",
    type: "Internship",
    description: "Undertaking advanced AI training and practical exercises to strengthen end-to-end understanding and application of artificial intelligence and machine learning concepts.",
    skills: ["Artificial Intelligence", "Deep Learning Foundations", "Model Exploration"]
  },
  {
    role: "AI/ML Engineer Intern",
    company: "Inventeron Technologies",
    period: "Sep 2025 – Apr 2026",
    location: "Bengaluru, Karnataka",
    badge: "Completed",
    type: "Internship",
    description: "Engineered predictive analytics pipelines and machine learning models using Python, Pandas, NumPy, and Scikit-learn.",
    highlights: [
      "Worked on Sales Prediction and Electric Vehicle Battery Range Prediction projects.",
      "Applied multi-output regression techniques, data preprocessing, model evaluation (MAE, R²), and interactive visualizations.",
      "Delivered production web models deployed with Flask."
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Multi-Output Regression", "Model Evaluation"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Business Systems",
    institution: "Visvesvaraya Technological University",
    period: "2022 – 2026",
    score: "CGPA: 8.5 / 10",
    badge: "Undergraduate",
    highlights: "Core subjects: Object-Oriented Programming, Data Structures and Algorithms, Operating Systems, Database Management Systems."
  },
  {
    degree: "Pre-University Course (Science)",
    institution: "Navachetana Residential PU College",
    period: "2020 – 2022",
    score: "Score: 80%",
    badge: "Higher Secondary",
    highlights: "Focus on Mathematics, Physics, Chemistry, and Computer Science."
  }
];

export const certificationsData = [
  {
    title: "Foundation Course on Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation",
    category: "AI & Sustainability"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    category: "Data Analytics & Business Intelligence"
  }
];

export const skillsData = {
  "Languages": [
    { name: "Python", level: "Advanced", icon: "Code" },
    { name: "SQL (MySQL, SQL Server)", level: "Advanced", icon: "Database" },
    { name: "C / C++", level: "Intermediate", icon: "Cpu" },
    { name: "HTML5 / CSS3 / Bootstrap", level: "Advanced", icon: "Layout" },
    { name: "JavaScript", level: "Proficient", icon: "FileCode" },
    { name: "TypeScript", level: "Intermediate", icon: "FileCode" }
  ],
  "Libraries & Frameworks": [
    { name: "Scikit-Learn (Regression/RF)", level: "Advanced", icon: "Binary" },
    { name: "Pandas & NumPy", level: "Advanced", icon: "Table" },
    { name: "Flask Web Framework", level: "Advanced", icon: "Server" },
    { name: "Chart.js Visualizations", level: "Advanced", icon: "BarChart3" },
    { name: "Pytest (Unit & API Tests)", level: "Advanced", icon: "CheckCircle2" },
    { name: "Werkzeug Security / Hashing", level: "Proficient", icon: "Shield" }
  ],
  "Core Subjects & Concepts": [
    { name: "Data Structures & Algorithms", level: "Advanced", icon: "Binary" },
    { name: "Object-Oriented Programming", level: "Advanced", icon: "Code" },
    { name: "Operating Systems", level: "Proficient", icon: "Cpu" },
    { name: "Database Normalization & ER", level: "Advanced", icon: "Database" },
    { name: "SQL CTEs & LAG Window Functions", level: "Advanced", icon: "Database" },
    { name: "Multi-Output ML Regression", level: "Advanced", icon: "Brain" }
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub Workflow", level: "Advanced", icon: "GitBranch" },
    { name: "MySQL & SQL Server", level: "Advanced", icon: "Database" },
    { name: "VS Code & Jupyter Notebooks", level: "Advanced", icon: "Terminal" },
    { name: "Linux (Basics & Shell)", level: "Proficient", icon: "Terminal" },
    { name: "Render & Vercel Deployment", level: "Proficient", icon: "Cloud" },
    { name: "RESTful JSON APIs", level: "Advanced", icon: "Network" }
  ]
};

export const projectsData = [
  {
    id: "ev-range",
    title: "Electric Vehicle Battery Range Prediction System",
    category: "AI & Machine Learning",
    badge: "Live App on Render 🚀",
    description: "Flask-based machine learning web application predicting EV range across 7 metrics using 14 vehicle specifications. Implements multi-output regression with Scikit-learn and feature normalization to forecast electric, city, highway, and combined range in cold and mild weather.",
    longDescription: "Developed during the AI/ML internship at Inventeron Technologies. The model predicts electric range under diverse operating parameters including city, highway, and combined cycles across cold and mild climates. Evaluated Linear Regression against Random Forest models using MAE and R² metrics to optimize predictive accuracy.",
    tags: ["Python", "Flask", "Scikit-Learn", "Multi-Output Regression", "Pandas", "Render"],
    githubUrl: "https://github.com/harshithv2004/EV_Range-",
    demoUrl: "https://ev-range-predictor-3q1y.onrender.com",
    metrics: ["7 Output Range Metrics", "14 Vehicle Specs Evaluated", "MAE & R² Benchmarked"],
    highlights: [
      "Live deployment on Render accessible worldwide",
      "Predicts electric, city, highway, and combined range for both cold & mild weather",
      "Multi-output regression pipeline with complete feature normalization",
      "Benchmarked Linear Regression vs Random Forest for optimal performance"
    ]
  },
  {
    id: "insightboard",
    title: "InsightBoard - SQL-Based Business Reporting & Analytics",
    category: "Full Stack & Analytics",
    badge: "Flagship SQL & Flask",
    description: "Designed a normalized MySQL database with 4 tables and developed SQL reports using multi-table JOINs, CTEs, aggregations, and LAG() window functions to analyze revenue trends, regional performance, and month-over-month customer growth. Built with Flask, Chart.js, and 30+ pytest tests.",
    longDescription: "Exposes parameterized SQL queries through JSON APIs powering interactive Chart.js dashboards, filterable and paginated sales reports, and dynamic CSV exports across 400 customers and 1,500+ orders. Built with 30+ pytest tests covering SQL query logic, API routes, and server-side validation to prevent SQL injection.",
    tags: ["Python", "Flask", "MySQL", "Advanced SQL", "Chart.js", "Pytest (30+ tests)"],
    githubUrl: "https://github.com/harshithv2004/Insightboard",
    demoUrl: null,
    metrics: ["30+ Pytest Test Suite", "400 Customers / 1,500+ Orders", "LAG() Window Functions & CTEs"],
    highlights: [
      "Executive Dashboard with 4 real-time KPI cards & monthly revenue trajectories",
      "MoM customer growth calculation using SQL CTE and LAG window functions",
      "Sales reports with multi-column sorting, pagination, and dynamic CSV export",
      "30+ automated pytest tests guaranteeing data integrity and SQL injection immunity"
    ]
  },
  {
    id: "stegnochat",
    title: "StegoChat - Secure Messaging Platform via Steganography",
    category: "Security & Full Stack",
    badge: "Security & Flask",
    description: "Full-stack messaging application using Flask and MySQL to exchange covert messages through image steganography. Implements user registration, authentication, session management, password hashing via Werkzeug, and hidden-message encoding/decoding.",
    longDescription: "Combines security and privacy by embedding secret text into carrier images using least significant bit (LSB) steganography before transmission over the network. Includes a responsive chat interface built with HTML, CSS, Bootstrap, and Flask.",
    tags: ["Flask", "MySQL", "Python", "Werkzeug", "Steganography", "Bootstrap"],
    githubUrl: "https://github.com/harshithv2004/stegnochat",
    demoUrl: null,
    metrics: ["LSB Image Encoding", "Werkzeug Password Hashing", "Session Management"],
    highlights: [
      "Full authentication lifecycle with hashed passwords and secure sessions",
      "Upload carrier images, encode hidden text payloads, and decode securely",
      "Interactive chat interface supporting message history in MySQL"
    ]
  },
  {
    id: "insurance-agent",
    title: "Insurance Claims Processing Agent",
    category: "AI & Automation",
    badge: "Document AI Pipeline",
    description: "Python-based pipeline that reads First Notice of Loss (FNOL) insurance documents — both unformatted raw text files and fillable ACORD 2 PDFs — extracts structured claim fields, validates policy rules, and outputs structured JSON and batch CSV summaries.",
    longDescription: "Automated document ingestion system that normalizes policy numbers, claimant details, incident dates, and estimated damages from unstructured and semi-structured documents, routing claims automatically based on business logic.",
    tags: ["Python", "PDF Processing", "Document AI", "Data Pipelines", "Regex"],
    githubUrl: "https://github.com/harshithv2004/-Insurance-Claims-Processing-Agent",
    demoUrl: null,
    metrics: ["Dual Format (Text & PDF)", "Automated Triage", "Batch CSV & JSON Output"],
    highlights: [
      "Parses both unformatted text and standardized ACORD 2 PDF forms",
      "Extracts claim ID, policyholder details, and estimated damages",
      "Automated business rule triaging with error validation"
    ]
  },
  {
    id: "slm",
    title: "SLM - Small Language Model Architecture",
    category: "AI & Deep Learning",
    badge: "Deep Learning",
    description: "Exploration and architecture implementation of Small Language Models. Covers compact vocabulary tokenizers, transformer attention blocks, and parameter-efficient training designed for lightweight, low-latency edge inference.",
    longDescription: "Explores domain-specific NLP with compact parameter counts, training lightweight models with efficient attention mechanisms.",
    tags: ["PyTorch", "Transformers", "NLP", "Tokenization", "Deep Learning"],
    githubUrl: "https://github.com/harshithv2004/SLM",
    demoUrl: null,
    metrics: ["Custom Attention Blocks", "Compact Tokenizer", "Edge Inference"],
    highlights: [
      "Implementation of decoder-only transformer blocks",
      "Custom vocabulary tokenizer and batching pipeline",
      "Parameter-efficient tuning experiments"
    ]
  },
  {
    id: "resume-analyser",
    title: "Resume Analyser & ATS Matcher",
    category: "AI & Machine Learning",
    badge: "NLP System",
    description: "NLP-powered recruitment tool extracting structured text from candidate resumes to compute similarity scores against target job descriptions, identifying key skill gaps and keyword coverage.",
    longDescription: "Automates candidate qualification evaluation using natural language text parsing, keyword frequency analysis, and gap scoring.",
    tags: ["Python", "NLP", "TF-IDF", "Text Mining", "Data Parsing"],
    githubUrl: "https://github.com/harshithv2004/Resume_analyser",
    demoUrl: null,
    metrics: ["Automated PDF Extraction", "Skill Gap Matrix", "ATS Scoring"],
    highlights: [
      "Parses multi-format resumes extracting skills and experience",
      "Calculates keyword overlap and semantic alignment with job postings",
      "Produces actionable recommendations to optimize candidate match"
    ]
  },
  {
    id: "pathfinder",
    title: "Pathfinder - Interactive Graph Algorithm Visualizer",
    category: "Algorithms & Web",
    badge: "Visualizer",
    description: "Interactive visual pathfinding sandbox built with TypeScript demonstrating Dijkstra's Algorithm, A* Search, and Breadth-First Search with draggable obstacles and speed controls.",
    longDescription: "Transforms abstract graph traversal algorithms into real-time visual learning tools showing frontier expansion, visited nodes, and the shortest path.",
    tags: ["TypeScript", "Algorithms", "Graph Theory", "Interactive UI"],
    githubUrl: "https://github.com/harshithv2004/pathfinder",
    demoUrl: null,
    metrics: ["Dijkstra & A* Heuristics", "Dynamic Grid Sandbox", "Real-Time Traversal"],
    highlights: [
      "Interactive node placement with start, target, and obstacle walls",
      "Color-coded frontier exploration with speed control",
      "Clean TypeScript object-oriented architecture"
    ]
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    category: "AI & Machine Learning",
    badge: "Machine Learning",
    description: "End-to-end predictive modeling project with exploratory data analysis, class imbalance handling, feature engineering, and model evaluation (Random Forest, XGBoost) to forecast customer churn.",
    longDescription: "Provides actionable retention insights by identifying high-risk customer accounts through machine learning classification.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "Data Science"],
    githubUrl: "https://github.com/harshithv2004/churn-prediction",
    demoUrl: null,
    metrics: ["High ROC-AUC Score", "Feature Importance Analysis", "Balanced Resampling"],
    highlights: [
      "Mitigated class imbalance with resample strategies",
      "Engineered billing recency and customer tenure indicators",
      "Model interpretability using feature importances and confusion matrices"
    ]
  }
];

export const sqlSpotlight = {
  title: "InsightBoard Deep Dive: Advanced SQL Engine",
  subtitle: "Engineering database performance and reporting precision directly in MySQL",
  highlights: [
    {
      name: "Month-Over-Month Growth via CTE & LAG",
      description: "Uses Common Table Expressions with the LAG() window function to compare consecutive monthly revenues without nested subquery overhead.",
      codeSnippet: `WITH MonthlyRevenue AS (
  SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') AS month_label,
    SUM(oi.quantity * oi.unit_price) AS current_month_revenue
  FROM Orders o
  JOIN OrderItems oi ON o.order_id = oi.order_id
  WHERE o.status != 'Cancelled'
  GROUP BY DATE_FORMAT(o.order_date, '%Y-%m')
)
SELECT 
  month_label,
  current_month_revenue,
  LAG(current_month_revenue, 1) OVER (ORDER BY month_label) AS prev_month_revenue,
  ROUND(((current_month_revenue - LAG(current_month_revenue, 1) OVER (ORDER BY month_label)) 
         / NULLIF(LAG(current_month_revenue, 1) OVER (ORDER BY month_label), 0)) * 100, 2) AS mom_growth_pct
FROM MonthlyRevenue;`
    },
    {
      name: "High-Value Repeat Customers with HAVING & Multi-Joins",
      description: "Aggregates across Orders and OrderItems to identify customer lifetime value while filtering for repeat purchasing behaviors.",
      codeSnippet: `SELECT 
  c.customer_id,
  c.customer_name,
  c.region,
  COUNT(DISTINCT o.order_id) AS total_orders,
  SUM(oi.quantity * oi.unit_price) AS lifetime_value
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN OrderItems oi ON o.order_id = oi.order_id
WHERE o.status = 'Completed'
GROUP BY c.customer_id, c.customer_name, c.region
HAVING total_orders > 1
ORDER BY lifetime_value DESC
LIMIT 10;`
    }
  ]
};
