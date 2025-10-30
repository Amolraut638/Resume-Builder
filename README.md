# 🧠 AI-Powered Resume Builder

An intelligent web application that helps users generate professional, **ATS-friendly resumes instantly using AI and job description matching**.  
Built with the **MERN stack**, the platform streamlines the resume creation process by analyzing job descriptions and tailoring resumes automatically — saving time and increasing hiring potential.

---

## 🚀 Features

### 🎯 Core Functionality
- 🤖 **AI-Based Resume Generation** – Generates tailored resumes aligned with user input and job descriptions.  
- 🧩 **Job Description Parsing** – Extracts key skills and requirements from any job post.  
- 💡 **Smart Suggestions** – AI recommends better keywords, phrasing, and structure for impact.  
- 🧾 **Multiple Resume Templates** – Professionally designed layouts to choose from.  
- 📄 **PDF Export** – Instantly download or share your resume in PDF format.  

### 👤 User Experience
- 🪶 **Simple Form-Based Input** – Users enter details (education, experience, skills, etc.) in guided steps.  
- ⚡ **Auto-Fill Options** – Previous data can be reused or fetched from LinkedIn (optional future integration).  
- 👀 **Preview Mode** – Real-time preview of resume updates before downloading.  
- 💻 **Responsive & Clean UI** – Built using **React + TailwindCSS** for a modern and minimal look.  

### ⚙️ AI Integration
- 🧠 Integrated the **Google Gemini API (model 2.5 Flash)** for analyzing and enhancing job descriptions and summaries.  
- 🎯 Keyword Optimization Engine ensures resumes align with recruiter search filters.  

---

## 🧩 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js, Tailwind CSS, HeroUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **AI Layer** | Google Gemini |
| **Storage** | ImageKit (for template assets or images) |
| **Authentication** | React-Redux, JWT-based secure login/register |

---

## 🧱 Project Architecture

```
Resume-Builder/
├── client/ # Frontend (React + Vite)
│ ├── dist/ # Production build files
│ ├── node_modules/ # Frontend dependencies
│ ├── public/ # Static assets (favicons, images, etc.)
│ ├── src/ # Main source code
│ │ ├── app/ # Core app setup and logic
│ │ ├── assets/ # Images, icons, and static files
│ │ ├── components/ # Reusable UI components
│ │ ├── configs/ # Frontend configuration files
│ │ ├── pages/ # Application pages and routes
│ │ ├── App.jsx # Root React component
│ │ ├── index.css # Global stylesheet
│ │ └── main.jsx # Entry point of the frontend
│ ├── .env # Environment variables for client
│ ├── eslint.config.js # ESLint configuration
│ ├── index.html # HTML template
│ ├── package.json # Frontend dependencies and scripts
│ ├── vite.config.js # Vite configuration
│ └── vercel.json # Deployment configuration
│
├── server/ # Backend (Node.js + Express)
│ ├── configs/ # Database and server configurations
│ ├── controllers/ # Business logic for routes
│ ├── middlewares/ # Authentication and validation middleware
│ ├── models/ # Mongoose models
│ ├── routes/ # API endpoints
│ ├── node_modules/ # Backend dependencies
│ ├── .env # Environment variables for server
│ ├── package.json # Backend dependencies and scripts
│ ├── server.js # Entry point for the server
│ └── vercel.json # Deployment configuration
│
├── .gitignore # Ignored files for Git
├── README.md # Project documentation
└── vercel.json # Root deployment config

```
## 🧠 How It Works

1. 🧍‍♂️ User inputs job description and personal data.  
2. 🪄 AI extracts important keywords, required skills, and tone from the job description.  
3. ⚙️ Resume is generated dynamically using user info + AI suggestions.  
4. 👀 User can preview, customize, and download in real-time.  
5. ✅ Optional ATS Compatibility Check shows how well the resume matches the target role.  

---

## 🪄 Future Enhancements

- 📄 **LinkedIn Import:** Fetch profile data automatically.  
- 🧩 **Cover Letter Generator:** AI-generated letters for each job.  
- 🌐 **Multi-language Support:** English, French, German, etc.  
- 🔍 **Resume Analytics Dashboard:** Track views and ATS scores.  
- 💾 **Cloud Save:** Allow storing multiple versions of resumes.  

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/AI-Resume-Builder.git
cd AI-Resume-Builder

# Install dependencies
cd client && npm install
cd ../server && npm install

# Run both frontend and backend
npm run dev

```

## 🧩 You’ll need to add your own .env file with keys for:

- MONGODB_URI=
- JWT_SECRET=
- OPENAI_API_KEY=
- OPENAI_BASE_URL=
- OPENAI_MODEL=
- IMAGEKIT_PUBLIC_KEY=
- IMAGEKIT_PRIVATE_KEY=
- IMAGEKIT_URL_ENDPOINT=

 ## 🌍 Live Demo

🚀 Check out the deployed version here:
👉  https://resume-builder-amol-raut.vercel.app

🤝 Reach Out to Me

📧 Email: amolraut1902@gmail.com

🔗 LinkedIn: www.linkedin.com/in/amolraut9272

💬 Let's collaborate and build something great! 🚀
