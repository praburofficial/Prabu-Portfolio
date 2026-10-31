/**
 * Comprehensive Knowledge Base & AI Intent Engine for Prabu R's Portfolio
 */

export interface AIResponse {
    answer: string;
    suggestions: string[];
}

export function queryPortfolioAI(userQuery: string): AIResponse {
    const q = userQuery.toLowerCase().trim();

    // 1. RECKO IDENTITY & NAME
    if (
        q.includes('recko') ||
        q.includes('your name') ||
        q.includes('what is your name') ||
        q.includes('who created you') ||
        q.includes('what are you')
    ) {
        return {
            answer: `🤖 **I am Recko — Prabu R's Personal AI Assistant!**

I am an intelligent humanoid AI agent built and trained specifically on Prabu R's portfolio, full-stack architecture, executive leadership at Code Blaza Technology, and career milestones.

I can help you explore:
- 🚀 **Projects:** His 20+ shipped web applications & enterprise ERPs
- 💻 **Skills:** React.js, FastAPI, Python, PostgreSQL, Hostinger, Vercel
- 💼 **Experience:** His internships and CEO leadership
- 📞 **Contact:** How to hire or get in touch with Prabu directly

What would you like to know about Prabu?`,
            suggestions: [
                'Tell me about Prabu R',
                'What are his top projects?',
                'What is his full tech stack?',
                'How can I contact Prabu?',
            ],
        };
    }

    // 2. GREETINGS & INTRODUCTIONS
    if (/^(hi|hello|hey|hola|vanakkam|namaste|greetings|morning|afternoon|evening)/.test(q)) {
        return {
            answer: `👋 **Hello! I'm Recko, Prabu R's AI Assistant.**

Welcome to Prabu's portfolio! I am trained on his complete technical background, engineering projects, leadership, and work history.

Here is a quick snapshot:
- 👑 **Current Role:** CEO & Full Stack Developer at **Code Blaza Technology**
- 💻 **Tech Stack:** React.js, Tailwind CSS, Python, FastAPI, Node.js, PostgreSQL, Hostinger & Vercel
- 🚀 **Shipped Projects:** 20+ production web applications and tools
- 🏆 **Credentials:** 33 professional certifications and symposium awards

How can I help you today? Feel free to ask about his **projects**, **skills**, **work experience**, **education**, or **how to contact him**!`,
            suggestions: [
                'Tell me about his work experience',
                'What are his top projects?',
                'What is his full tech stack?',
                'How can I contact or hire Prabu?',
            ],
        };
    }

    // 2. WHO IS PRABU / ABOUT / BIO
    if (
        q.includes('who is') ||
        q.includes('about prabu') ||
        q.includes('tell me about yourself') ||
        q.includes('who are you') ||
        q.includes('introduce') ||
        q.includes('bio') ||
        q.includes('profile')
    ) {
        return {
            answer: `**Prabu R** is an innovative **Full Stack Developer**, **UI/UX Designer**, and entrepreneur serving as the **Chief Executive Officer (CEO) at Code Blaza Technology**.

📍 **Location:** Namakkal, Tamil Nadu, India  
🎓 **Education:** B.E. in Computer Science & Engineering from Gnanamani College of Technology (CGPA: 7.86)  
💼 **Specialization:** Component-driven React frontends, robust FastAPI & Python backends, relational PostgreSQL databases, and high-performance cloud deployments.

Beyond code, Prabu is also the founder of **3D Productions**, an award-winning creative channel where he directs awareness short films and digital media.`,
            suggestions: [
                'What is Code Blaza Technology?',
                'Tell me about his technical skills',
                'What projects has he built?',
                'How can I get his resume?',
            ],
        };
    }

    // 3. CODE BLAZA TECHNOLOGY / CEO / ENTREPRENEURSHIP
    if (
        q.includes('code blaza') ||
        q.includes('cbt') ||
        q.includes('ceo') ||
        q.includes('entrepreneur') ||
        q.includes('founder') ||
        q.includes('company')
    ) {
        return {
            answer: `👑 **Prabu R as CEO at Code Blaza Technology**

Prabu founded and leads **Code Blaza Technology** (since September 2026), a forward-thinking digital software agency based in Namakkal, Tamil Nadu.

🌐 **Website:** [codeblazatechnology.in](https://codeblazatechnology.in)

**Key Responsibilities & Vision:**
- 🏛️ **Executive Leadership:** Guiding strategic roadmap, client partnerships, and engineering standards.
- 💻 **Technical Architecture:** Architecting scalable frontend web apps, custom ERP solutions, and secure RESTful APIs.
- 🚀 **Commercial Solutions:** Delivering bespoke software for retail, education, e-commerce, and logistics clients.`,
            suggestions: [
                'What is his work experience timeline?',
                'What ERP systems did he build?',
                'How to contact Code Blaza Technology?',
            ],
        };
    }

    // 4. TECH STACK / SKILLS
    if (
        q.includes('skill') ||
        q.includes('tech stack') ||
        q.includes('technologies') ||
        q.includes('stack') ||
        q.includes('languages') ||
        q.includes('framework')
    ) {
        return {
            answer: `🛠️ **Prabu R's Technical Skills & Architecture:**

- 🎨 **Frontend:** React.js (90%), Tailwind CSS (95%), JavaScript ES6+ (85%), HTML5 & CSS3 (90%), Responsive UI/UX Design (85%).
- ⚙️ **Backend:** Python, FastAPI, Node.js, RESTful API Design & Integration.
- 🗄️ **Database:** PostgreSQL (75%), Firebase, Relational Data Modeling & Queries.
- ☁️ **Deployment & Hosting:** Hostinger, Vercel, CI/CD, Domain & DNS Configuration.
- 🔧 **Tools & Workflow:** Git / GitHub, Postman, VS Code, Antigravity, Figma / Wireframing.`,
            suggestions: [
                'Tell me about his backend skills',
                'What databases does he use?',
                'What deployment platforms does he use?',
                'Show me his projects',
            ],
        };
    }

    // 5. BACKEND SPECIFIC
    if (q.includes('backend') || q.includes('python') || q.includes('fastapi') || q.includes('api') || q.includes('node')) {
        return {
            answer: `⚙️ **Backend Engineering Capabilities:**

Prabu specializes in building lightweight, ultra-fast backend services:
- **Python & FastAPI:** High-performance asynchronous microservices with automated OpenAPI/Swagger documentation.
- **REST APIs:** Structured CRUD endpoints, JWT authentication, and secure request validation.
- **Node.js:** Server-side scripting, event-driven workflows, and middleware integration.
- **API Integration:** Connecting third-party payment gateways, messaging APIs (WhatsApp, SMS), and OCR extraction.`,
            suggestions: [
                'What database does he use with FastAPI?',
                'What projects use Python / FastAPI?',
                'Can he build full stack apps?',
            ],
        };
    }

    // 6. DATABASE SPECIFIC
    if (q.includes('database') || q.includes('postgres') || q.includes('sql') || q.includes('firebase')) {
        return {
            answer: `🗄️ **Database Architecture & Management:**

- **PostgreSQL:** Relational schema design, foreign key constraints, indexed queries, and role-based data isolation (used in his College ERP and Enterprise projects).
- **Firebase:** Real-time NoSQL database, Firestore document collections, cloud storage, and secure client-side rules.`,
            suggestions: [
                'What ERP systems use PostgreSQL?',
                'What is his full tech stack?',
            ],
        };
    }

    // 7. DEPLOYMENT & HOSTING
    if (q.includes('deploy') || q.includes('hostinger') || q.includes('vercel') || q.includes('hosting') || q.includes('cloud')) {
        return {
            answer: `☁️ **Cloud Deployment & Live Production:**

Prabu configures end-to-end production environments:
- **Hostinger:** Premium cloud hosting, SSL certification, custom domain routing, and Apache/Nginx configuration for corporate client portals.
- **Vercel:** Edge continuous deployment, instant preview pipelines, Git-integrated CI/CD, and fast global CDN asset delivery for modern React applications.`,
            suggestions: [
                'View his live projects',
                'What are his contact details?',
            ],
        };
    }

    // 8. PROJECTS OVERVIEW OR SPECIFIC PROJECTS
    if (
        q.includes('project') ||
        q.includes('portfolio work') ||
        q.includes('apps') ||
        q.includes('orascape') ||
        q.includes('sundarban') ||
        q.includes('pos') ||
        q.includes('erp') ||
        q.includes('stayhive')
    ) {
        if (q.includes('erp')) {
            return {
                answer: `🏢 **ERP Systems Built by Prabu:**
1. **Gnanamani Institutions ERP:** Comprehensive educational ERP handling admissions, student records, fee billing, and hostel modules with PostgreSQL and OCR integration.
2. **MediShop ERP:** Complete medical pharmacy ERP with fast barcode billing, inventory batch tracking, and expiry notifications.
3. **Shri Aathav Textile ERP:** Textile inventory and stock levels management reducing manual errors with interactive data tables.`,
                suggestions: ['What POS systems did he build?', 'What other projects exist?', 'Tell me about tech stack'],
            };
        }

        if (q.includes('pos') || q.includes('billing')) {
            return {
                answer: `💳 **Point-of-Sale (POS) Systems Built by Prabu:**
1. **EveryKadai:** Retail sports shop billing ERP with SKU search, GST breakdown, customer invoicing, and discount control.
2. **Mobile Shop Billing POS:** Specialized for mobile retailers featuring IMEI tracking, accessory cataloging, and receipt printing.
3. **Food POS:** Restaurant billing system with live table management, order summaries, and category filtering.`,
                suggestions: ['Tell me about Orascape project', 'Show all projects', 'How to contact Prabu?'],
            };
        }

        return {
            answer: `🚀 **Featured Projects by Prabu R (20+ Total):**

- 🌿 **Orascape:** Landscaping & garden maintenance corporate web portal in Chennai.
- 🚢 **Sundarban Cargo:** Dubai international freight, shipment booking & cargo portal.
- 🏪 **EveryKadai POS:** Retail billing ERP with GST calculation and inventory.
- 📱 **Mobile Shop POS:** Electronics store billing with IMEI tracking.
- 🍽️ **Food POS:** Restaurant ordering & table billing management system.
- 💊 **MediShop ERP:** Pharmacy inventory management with expiry tracking.
- 🏡 **StayHive:** Zero-brokerage PG and property rental platform.
- 🌿 **Thamizhoviyaa:** Organic natural herbal products e-commerce store with FastAPI.
- 🔒 **Trust Lock:** Social media fake account detection using pattern analysis.
- 📄 **PDFMaster Pro & DocPix:** Windows desktop document manipulation & conversion utilities.
- ♟️ **Chess Game & Snake Game:** Interactive web arcade applications with custom game loops.`,
            suggestions: [
                'Tell me about his ERP projects',
                'Tell me about his POS systems',
                'What tech stack does he use?',
            ],
        };
    }

    // 9. WORK EXPERIENCE & INTERNSHIPS
    if (
        q.includes('experience') ||
        q.includes('internship') ||
        q.includes('work history') ||
        q.includes('job') ||
        q.includes('career') ||
        q.includes('qmex') ||
        q.includes('optimus')
    ) {
        return {
            answer: `💼 **Prabu R's Work Experience & Internship Timeline:**

1. 👑 **Chief Executive Officer (CEO) & Full Stack Developer**  
   *Code Blaza Technology* (01/09/2026 – Present) · Namakkal, TN  
   *Leading product engineering, client delivery, and technical architecture.*

2. 💻 **Full Stack Developer Intern**  
   *Qmex Solutions* (01/08/2026 – 31/08/2026) · Coimbatore, TN  
   *Full-stack web application development and API integration.*

3. ⚛️ **React Developer Intern**  
   *Code Blaza Technology* (10/08/2025 – 10/08/2026) · Namakkal, TN  
   *Building scalable reusable UI components and client dashboards.*

4. 🌐 **Web Developer Intern**  
   *Optimus Technologies Pvt Ltd* (11/07/2025 – 09/08/2025) · Salem, TN  
   *Frontend interface design, responsive styling, and web performance optimization.*

5. 🎨 **Frontend Developer Intern**  
   *Code Blaza Technology* (10/03/2025 – 10/07/2025) · Namakkal, TN  
   *Prototyping responsive layouts and modern Tailwind UI.*`,
            suggestions: [
                'What projects did he build at Code Blaza?',
                'What is his educational background?',
                'How can I hire him?',
            ],
        };
    }

    // 10. EDUCATION & COLLEGE
    if (
        q.includes('education') ||
        q.includes('college') ||
        q.includes('degree') ||
        q.includes('cgpa') ||
        q.includes('gnanamani') ||
        q.includes('study') ||
        q.includes('school')
    ) {
        return {
            answer: `🎓 **Academic Background:**

- 🏛️ **B.E. in Computer Science and Engineering**  
  *Gnanamani College of Technology, Namakkal, Tamil Nadu* (2022 – 2026)  
  📊 **Current CGPA:** **7.86**

- 🏫 **Higher Secondary (HSC - Class XII)**  
  *Government Higher Secondary School, Puduchatram* (2021 – 2022)  
  📊 **Score:** **73%**

- 🏫 **Secondary (SSLC - Class X)**  
  *Government Higher Secondary School, Kalangani* (2019 – 2020)  
  📊 **Score:** **69%**`,
            suggestions: [
                'What certifications does he hold?',
                'Tell me about his work experience',
                'What are his core technical skills?',
            ],
        };
    }

    // 11. CERTIFICATIONS & AWARDS
    if (
        q.includes('certificate') ||
        q.includes('certification') ||
        q.includes('award') ||
        q.includes('prize') ||
        q.includes('symposium') ||
        q.includes('hackathon') ||
        q.includes('nptel') ||
        q.includes('credentials')
    ) {
        return {
            answer: `🏆 **Credentials & Certifications (33 Total):**

**Key Professional Certifications:**
- 📜 **Advance Diploma in Python Programming:** CSC Computer Education (**A+ Grade**, 2022)
- 📜 **Python for Data Science:** NPTEL (IIT Madras, 2026)
- 📜 **Data Science Foundation & UI/UX Design:** Great Learning (2024)
- 📜 **Problem Solving in Python:** HackerRank Verified (2025)
- 📜 **Bharat Blockchain Yatra:** IDS & Hedera Blockchain Explorer (2023)
- 📜 **AI for Software Engineers:** Turnip Innovations National Level (2025)

**Top Symposium & Competition Prizes:**
- 🥇 **1st Prize - Short Film Direction:** ALGONEXUS'25, Jayalakshmi Institute of Technology
- 🥇 **1st Prize - Short Film Direction:** Mahendra Engineering College (2024)
- 🥇 **1st Prize - Treasure Hunt:** Jayalakshmi Institute of Technology (2025)
- 🥈 **2nd Prize - Short Film Direction:** Mahendra Engineering College (2024)
- 🥈 **2nd Prize - Fun-a-thon:** Sona College of Technology (2025)
- 🎖️ Multiple awards in Code Debugging & Bug Hunting.`,
            suggestions: [
                'Tell me about his short films & 3D Productions',
                'Show me his projects',
                'How can I contact Prabu?',
            ],
        };
    }

    // 12. EXTRACURRICULAR / 3D PRODUCTIONS / FILMMAKING
    if (
        q.includes('film') ||
        q.includes('movie') ||
        q.includes('3d production') ||
        q.includes('youtube') ||
        q.includes('extracurricular') ||
        q.includes('director') ||
        q.includes('saalai') ||
        q.includes('video')
    ) {
        return {
            answer: `🎬 **3D Productions & Filmmaking Passion:**

Prabu is the **Founder & Channel Administrator of 3D Productions** ([@admin3d24](https://youtube.com/@admin3d24?si=W9jzQEE7jwJwZW4g)) on YouTube.

He writes, directs, and edits social awareness short films and creative visual stories:
- 🚦 **SAALAI : The Road:** Acclaimed road safety awareness short film.
- 🤝 **Dear Buddy:** Crime thriller short film celebrating friendship & vigilance.
- 🔍 **SECTION 416:** Prequel crime thriller and suspense drama.
- 👁️ **Who Blind:** Impactful 1-minute life observation film.

His directing has won **multiple 1st and 2nd prizes** in state-level symposium competitions!`,
            suggestions: [
                'Where can I watch his short films?',
                'What is his tech stack?',
                'Tell me about his CEO role',
            ],
        };
    }

    // 13. CONTACT / HIRE / EMAIL / PHONE / WHATSAPP
    if (
        q.includes('contact') ||
        q.includes('hire') ||
        q.includes('email') ||
        q.includes('phone') ||
        q.includes('whatsapp') ||
        q.includes('call') ||
        q.includes('reach') ||
        q.includes('linkedin') ||
        q.includes('github') ||
        q.includes('location')
    ) {
        return {
            answer: `📬 **Get in Touch with Prabu R:**

- 📧 **Email:** [prabur2k5@gmail.com](mailto:prabur2k5@gmail.com)
- 📞 **Phone / WhatsApp:** [+91 95248 15890](https://wa.me/919524815890)
- 💼 **LinkedIn:** [linkedin.com/in/prabu-r12092005](https://www.linkedin.com/in/prabu-r12092005)
- 🐙 **GitHub:** [github.com/praburofficial](https://github.com/praburofficial)
- 🏢 **Company:** [codeblazatechnology.in](https://codeblazatechnology.in)
- 📍 **Location:** Namakkal, Tamil Nadu, India

Prabu is open to **Full Stack Engineering roles**, **freelance contracts**, and **technology consulting**!`,
            suggestions: [
                'Can I download his resume?',
                'What are his best projects?',
                'What is his availability?',
            ],
        };
    }

    // 14. RESUME / CV
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
        return {
            answer: `📄 **Prabu R's Resume:**

Prabu's resume showcases his journey as CEO at Code Blaza Technology, B.E. Computer Science degree (CGPA 7.86), 20+ shipped projects, and full-stack expertise.

You can preview and download his resume directly on this site using the **"Resume"** button in the navigation or Hero section!`,
            suggestions: [
                'What are his technical skills?',
                'Tell me about his work experience',
                'How to contact him directly?',
            ],
        };
    }

    // 15. DEFAULT SMART FALLBACK
    return {
        answer: `I understand you're asking about **"${userQuery}"**.

Here is what I can tell you about Prabu R:
- 👑 **CEO & Full Stack Developer** at Code Blaza Technology with expertise in React, FastAPI, Python, and PostgreSQL.
- 🚀 **Creator of 20+ applications**, including corporate ERPs, retail POS systems, and rental platforms.
- 🎓 **B.E. Computer Science Graduate (2026)** with a 7.86 CGPA and 33 certifications & awards.
- 📬 **Direct Contact:** [prabur2k5@gmail.com](mailto:prabur2k5@gmail.com) or WhatsApp at [+91 95248 15890](https://wa.me/919524815890).

Would you like to explore any of these specific areas?`,
        suggestions: [
            'What is his full tech stack?',
            'What are his top projects?',
            'Tell me about his work experience',
            'How can I contact or hire Prabu?',
        ],
    };
}

