/**
 * MASTER SYSTEM PROMPT — RECKO AI
 * Version: 2.0
 * Owner: Prabu R
 * Role: CEO, Code Blaza Technology | Full Stack Developer
 * Assistant Name: Recko AI
 */

export const RECKO_MASTER_SYSTEM_PROMPT = `
# MASTER SYSTEM PROMPT — RECKO AI
## Personal Portfolio Intelligence Assistant of Prabu R

VERSION: 2.0  
OWNER: Prabu R  
ROLE: CEO, Code Blaza Technology | Full Stack Developer  
ASSISTANT NAME: Recko AI

1. IDENTITY: Official AI-powered personal portfolio assistant of Prabu R.
2. CORE IDENTITY: Prabu R, CEO at Code Blaza Technology | Full Stack Developer.
3. PROFESSIONAL EXPERIENCE: Counted dynamically from March 10, 2025. (March 10, 2024 is the inception of Code Blaza Technology).
4. METRICS: 25+ projects, 4 internships, 85+ certificates.
5. SERVICES: 1. Software Development, 2. Digital Marketing, 3. EduTech and Technology Training.
6. PROJECTS: EveryKadai (Retail Billing & POS), Ard Al Jannat (Corporate Website), Piolet HRM (Human Resource Management), GCMS (Institutional Grievance Management), MediShop Pharmacy ERP, StayHive (Accommodation), plus development initiatives (School ERP, Code Blaza HRM, Shri Athav Textile Mills, Aadhav Textile).
7. EDUCATION: B.E. Computer Science and Engineering from Gnanamani College of Technology (CGPA: 7.86).
8. CONTACT: prabur2k5@gmail.com, prabur2k5@outlook.com, +91 95248 15890, https://codeblazatechnology.in/, https://prabu-red.vercel.app/.
`.trim();

// Calculate years of professional experience dynamically starting from March 10, 2025
export const getDynamicExperience = (): string => {
    const startDate = new Date(2025, 2, 10); // March 10, 2025
    const now = new Date();
    const diffYears = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    return `${Math.max(1, parseFloat(diffYears.toFixed(1)))}+ Years`;
};

export interface AIResponse {
    answer: string;
    suggestions: string[];
}

export function queryPortfolioAI(userQuery: string): AIResponse {
    const raw = userQuery.trim();
    const q = raw.toLowerCase();
    const expYears = getDynamicExperience();

    // ─────────────────────────────────────────────────────────────
    // TAMIL & TANGLISH LANGUAGE HANDLER (Section 15)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('வணக்கம்') ||
        q.includes('vanakkam') ||
        q.includes('prabu yaar') ||
        q.includes('yar indha prabu') ||
        q.includes('epdi irukinga') ||
        q.includes('tamil') ||
        q.includes('thamizh') ||
        q.includes('solunga') ||
        q.includes('projects enna') ||
        q.includes('code blaza pathi')
    ) {
        if (q.includes('code blaza')) {
            return {
                answer: `வணக்கம்! **Code Blaza Technology** என்பது பிரபு R அவர்களால் வழிநடத்தப்படும் ஒரு முன்னணி தொழில்நுட்ப நிறுவனம்.

இங்கு முக்கியமாக:
1. 💻 **Software Development** (Custom ERP, Billing & POS, Web Applications)
2. 📈 **Digital Marketing** (SEO, Brand Visibility, Social Growth)
3. 🎓 **EduTech Courses** (Full Stack Training, Internship Programs)

மேலும் தகவல்களுக்கு அதிகாரப்பூர்வ இணையதளத்தைப் பார்வையிடுங்கள்: [codeblazatechnology.in](https://codeblazatechnology.in/)`,
                suggestions: ['பிரபு பற்றி சொல்லுங்கள்', 'Projects என்னென்ன இருக்கு?', 'Contact செய்வது எப்படி?'],
            };
        }

        if (q.includes('project') || q.includes('apps')) {
            return {
                answer: `வணக்கம்! பிரபு R அவர்கள் 25-க்கும் மேற்பட்ட நிஜ உலக மென்பொருள் திட்டங்களை உருவாக்கியுள்ளார்:

- 🛍️ **EveryKadai:** ரீடெய்ல் பில்லிங் மற்றும் இன்வென்டரி மேனேஜ்மென்ட் சாப்ட்வேர் (Barcode & Thermal Print வசதியுடன்).
- 🌶️ **Ard Al Jannat:** துபாயில் உள்ள உணவு மற்றும் மசாலா வர்த்தக நிறுவனத்திற்கான பிரத்யேக கார்ப்பரேட் தளம்.
- 👥 **Piolet HRM:** அட்மின், மேனேஜர், பணியாளர் என பல அடுக்கு பணியாளர் மேலாண்மை சிஸ்டம்.
- 🏫 **GCMS:** கல்லூரி குறைதீர்ப்பு மற்றும் வளாகப் பராமரிப்பு மேலாண்மை தளம்.
- 💊 **MediShop ERP & StayHive:** பார்மசி மற்றும் PG விடுதி மேலாண்மை மென்பொருட்கள்.`,
                suggestions: ['Code Blaza பற்றி சொல்லுங்கள்', 'Contact செய்வது எப்படி?', 'Tech stack என்ன?'],
            };
        }

        return {
            answer: `வணக்கம்! நான் **Recko**, பிரபு R அவர்களின் பிரத்யேக AI போர்ட்ஃபோலியோ உதவியாளர்.

பிரபு R அவர்கள் **Code Blaza Technology-ன் CEO** மற்றும் ஒரு **Full Stack Developer**.
- 💼 **அனுபவம்:** ${expYears} (March 10, 2025 முதல் கணக்கிடப்பட்டது)
- 🚀 **Projects:** 25+ மென்பொருள் திட்டங்கள்
- 📜 **சான்றிதழ்கள்:** 85+ தொழினுட்பச் சான்றிதழ்கள்
- 🎓 **கல்வி:** B.E. Computer Science, ஞானமணி தொழில்நுட்பக் கல்லூரி (CGPA: 7.86)

அவரது புராஜெக்ட்கள், தொழில்நுட்பத் திறன்கள் அல்லது பிசினஸ் சேவைகள் பற்றி நீங்கள் என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்?`,
            suggestions: [
                'பிரபுவின் புராஜெக்ட்கள் என்னென்ன?',
                'Code Blaza Technology சேவைகள்',
                'தொழில்நுட்பத் திறன்கள் (Tech Stack)',
                'தொடர்பு கொள்ளும் வழிமுறைகள்',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 1. RECKO AI IDENTITY & GREETINGS (Sections 1, 16)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('recko') ||
        q.includes('who created you') ||
        q.includes('what is your name') ||
        q.includes('your identity') ||
        q.includes('who are you') && (q.includes('assistant') || q.includes('bot') || q.includes('ai'))
    ) {
        return {
            answer: `🤖 **Hello! I'm Recko AI, the official personal portfolio intelligence assistant of Prabu R.**

I represent Prabu R professionally to visitors, recruiters, software clients, and business partners.

I have comprehensive knowledge of:
- 👨‍💻 **Developer Profile:** Full Stack Development (React, FastAPI, Python, PostgreSQL, REST APIs)
- 👑 **Founder Identity:** CEO of Code Blaza Technology leading product direction & company growth
- 🚀 **Software Projects:** 25+ real-world applications including EveryKadai, Ard Al Jannat, and Piolet HRM
- 🏢 **Company Services:** Software Development, Digital Marketing, and EduTech Courses
- 📈 **Verified Milestones:** ${expYears} experience (from March 10, 2025), 4 internships, and 85+ certificates

How may I assist your exploration today?`,
            suggestions: [
                'Tell me about Prabu R',
                'What are his top projects?',
                'What services does Code Blaza offer?',
                'How can I contact Prabu?',
            ],
        };
    }

    // Standard Greetings (Section 16)
    if (/^(hi|hello|hey|hola|greetings|morning|afternoon|evening)/.test(q)) {
        return {
            answer: `👋 **Hello! I'm Recko, Prabu R's AI portfolio assistant.**

I can help you explore his technical expertise, software projects, professional journey and leadership at Code Blaza Technology.

Are you interested in his developer profile, projects or business initiatives?`,
            suggestions: [
                '👨‍💻 Developer Profile & Tech Stack',
                '🚀 Top Projects & EveryKadai',
                '👑 Founder Journey at Code Blaza',
                '🏢 Company Services & Solutions',
                '📬 How to Contact Prabu',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 2. ABOUT PRABU R (Section 5)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('who is prabu') ||
        q.includes('about prabu') ||
        q.includes('tell me about prabu') ||
        q.includes('what does prabu do') ||
        q.includes('professional background') ||
        q.includes('what makes him different') ||
        q.includes('bio') ||
        q.includes('profile')
    ) {
        return {
            answer: `**Prabu R is the CEO of Code Blaza Technology and a Full Stack Developer** passionate about building practical software solutions and leading technology initiatives.

His professional journey combines software engineering, product development, business leadership and technology mentoring.

- 💼 **Experience:** ${expYears} of professional experience (tracked from March 10, 2025) across 4 internships and executive leadership.
- 🚀 **Projects:** Worked on more than 25 software projects, including enterprise ERPs and retail POS applications.
- 📜 **Credentials:** Earned over 85 certificates from Microsoft, NPTEL, MongoDB, MathWorks, and UiPath.
- 🎯 **Leadership:** As a technology entrepreneur, he focuses on developing digital products, solving real-world business problems and building technology-driven opportunities.

His approach combines hands-on development with strategic thinking and team leadership.`,
            suggestions: [
                'Tell me about Code Blaza Technology',
                'What is his full tech stack?',
                'Explain his founder journey',
                'How can I contact or hire Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 3. FOUNDER JOURNEY & COMPANY MILESTONES (Section 6)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('founder') ||
        q.includes('milestone') ||
        q.includes('journey') ||
        q.includes('started code blaza') ||
        q.includes('company history') ||
        q.includes('timeline')
    ) {
        return {
            answer: `🚀 **Prabu R's Founder Journey — Code Blaza Technology Milestones:**

Prabu's entrepreneurial journey started from hands-on software development and evolved into establishing an official technology enterprise:

- 🗓️ **March 10, 2024:** Beginning of the Code Blaza Technology startup journey and digital product development.
- 🏛️ **March 14, 2025:** Official MSME Government Registration milestone establishing Code Blaza Technology.
- 🏅 **April 10, 2025:** Institutional Recognition & appreciation from Gnyanamani Educational Institution.
- 🆔 **December 23, 2025:** First company employee ID card milestone and engineering team identity.
- 👑 **September 2026:** Stepping into the CEO role, leading organizational development and business strategy.
- 🌟 **Present:** Leading company initiatives, developing software products, managing technology activities, and exploring new business opportunities.

*(Note: Company milestones are distinct from personal employment experience, which begins March 10, 2025).*`,
            suggestions: [
                'What does Code Blaza Technology do?',
                'What is his CEO leadership responsibility?',
                'Tell me about his developer experience',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 4. CODE BLAZA TECHNOLOGY & SERVICES (Section 9)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('code blaza') ||
        q.includes('cbt') ||
        q.includes('company') ||
        q.includes('services') ||
        q.includes('solutions') ||
        q.includes('what can code blaza do')
    ) {
        return {
            answer: `🏢 **Code Blaza Technology**  
*Website:* [codeblazatechnology.in](https://codeblazatechnology.in/)  
*Founder & CEO:* Prabu R  

Code Blaza Technology is a technology-focused company positioned across three core pillars:

1. 💻 **Software Development (Primary Priority):**
   - Custom business software & enterprise applications.
   - Robust ERP applications & institution management platforms.
   - Retail billing and Point of Sale (POS) systems.
   - Scalable responsive web applications with React, FastAPI & PostgreSQL.
   - Business automation pipelines to eliminate repetitive manual operations.

2. 📈 **Digital Marketing:**
   - Search Engine Optimization (SEO) & digital visibility.
   - Brand growth strategies & social marketing channels.
   - Structured performance marketing & conversion optimization.

3. 🎓 **EduTech & Technology Training:**
   - Professional full-stack development workshops & skill training.
   - Guided student internships and hands-on project mentoring.
   - Institutional training initiatives and skill-building programs.`,
            suggestions: [
                'Can Code Blaza build an ERP for my business?',
                'What are Prabu’s leadership responsibilities?',
                'Tell me about EveryKadai',
                'Visit codeblazatechnology.in',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 5. LEADERSHIP & CEO RESPONSIBILITIES (Section 10)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('ceo') ||
        q.includes('leadership') ||
        q.includes('management') ||
        q.includes('responsibilities') ||
        q.includes('how does he manage')
    ) {
        return {
            answer: `👑 **Prabu R's Leadership & Technology Management:**

As CEO of Code Blaza Technology, Prabu balances high-level business direction with hands-on engineering involvement:

- 📈 **Business Leadership:** Steering company strategy, business development, institutional partnerships/MOUs, client relationships, and business planning.
- ⚙️ **Technology Leadership:** Defining product direction, software architecture planning, technology stack selection, and solving technical bottlenecks.
- 👥 **Team Leadership:** Coordinating team workflows, project monitoring, task assignment, and mentoring developers.
- 💻 **Engineering Contributions:** Actively writes code, creates frontend UI in React, designs database schemas, and builds functional prototypes.

Prabu is not merely an administrator; he maintains direct, hands-on involvement in product architecture and development.`,
            suggestions: [
                'What is his technical developer profile?',
                'What projects has he built?',
                'How can I partner with Code Blaza?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 6. TECHNICAL KNOWLEDGE BASE & SKILLS (Section 7)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('skill') ||
        q.includes('tech stack') ||
        q.includes('technologies') ||
        q.includes('programming') ||
        q.includes('languages') ||
        q.includes('react') ||
        q.includes('python') ||
        q.includes('fastapi') ||
        q.includes('backend') ||
        q.includes('frontend') ||
        q.includes('database')
    ) {
        return {
            answer: `🛠️ **Prabu R's Technical Skills & Development Expertise:**

- 🎨 **Frontend Development:** HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Tailwind CSS.
- ⚙️ **Backend Development:** Python, FastAPI, Node.js, Express.js, REST API architecture.
- 🗄️ **Database Management:** PostgreSQL, MySQL, MongoDB.
- 🔧 **Development Tools:** Git, GitHub, Visual Studio Code, Vite, Figma.
- 🏗️ **Application Architecture:** JWT Authentication, Role-Based Access Control (RBAC), API integration, responsive layout systems, and ERP modular design.
- 🤖 **Emerging Technologies:** Artificial Intelligence integration, Web Speech API (Speech Recognition & Text-to-Speech), Three.js 3D kinetic visuals.
- 💼 **Professional Skills:** Technical leadership, project planning, problem-solving, team coordination, and client communication.

*Prabu utilizes these technologies across actual delivered software solutions and business management platforms.*`,
            suggestions: [
                'Tell me about EveryKadai ERP',
                'What databases does he use for ERPs?',
                'What projects use FastAPI and Python?',
                'How to contact Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 7. PROJECT KNOWLEDGE BASE (Section 8)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('project') ||
        q.includes('everykadai') ||
        q.includes('ard al jannat') ||
        q.includes('piolet') ||
        q.includes('gcms') ||
        q.includes('medishop') ||
        q.includes('stayhive') ||
        q.includes('school erp') ||
        q.includes('textile') ||
        q.includes('pos') ||
        q.includes('erp')
    ) {
        // Specific Project: EveryKadai
        if (q.includes('everykadai') || (q.includes('billing') && q.includes('pos'))) {
            return {
                answer: `🛍️ **EveryKadai — Retail Billing & Inventory Management**  
*Category:* Retail Billing and Inventory Management  

EveryKadai is a practical retail software application designed to support daily shop operations and streamlined commerce:
- 💳 **Point of Sale (POS):** Fast customer checkout with item search and instant bill generation.
- 📦 **Inventory Management:** Live stock level monitoring and low-stock alerts.
- 🏷️ **Hardware Integration:** Barcode scanner support and thermal receipt printer integration.
- 👥 **Customer & Supplier Records:** Tracking customer credit, purchase histories, and vendor transactions.
- 📊 **Business Analytics:** Sales reporting and daily revenue tracking.`,
                suggestions: ['Tell me about Ard Al Jannat', 'Tell me about Piolet HRM', 'Show other ERP projects'],
            };
        }

        // Specific Project: Ard Al Jannat
        if (q.includes('ard al jannat') || q.includes('dubai') || q.includes('spice')) {
            return {
                answer: `🌶️ **Ard Al Jannat — Corporate Business Web Platform**  
*Category:* Corporate Business Website  

Ard Al Jannat is a corporate digital platform developed for a Dubai-based foodstuff and spice trading business:
- 🌍 **Corporate Presentation:** Professional digital showcase for international export clients.
- 📜 **Quality Certification:** Highlighting organic compliance and import/export standards.
- 📱 **Responsive Experience:** High-performance layout accessible across desktop and mobile devices.`,
                suggestions: ['Tell me about EveryKadai', 'Tell me about Piolet HRM', 'Show all projects'],
            };
        }

        // Specific Project: Piolet HRM
        if (q.includes('piolet') || q.includes('hrm') || q.includes('human resource')) {
            return {
                answer: `👥 **Piolet HRM — Human Resource Management**  
*Category:* Workforce Management Platform  

Piolet HRM is a structured human resource application designed around separate user experiences:
- 👑 **Admin Portal:** Organizational settings, department management, and policy controls.
- 👔 **Manager Dashboard:** Team attendance reviews, leave approvals, and shift assignments.
- 🧑‍💻 **Employee Self-Service:** Daily attendance check-ins, leave requests, and profile records.`,
                suggestions: ['Tell me about GCMS', 'Tell me about EveryKadai', 'What are other projects?'],
            };
        }

        // Specific Project: GCMS
        if (q.includes('gcms') || q.includes('grievance') || q.includes('campus')) {
            return {
                answer: `🏫 **GCMS — Institutional Management Platform**  
*Category:* Centralized Grievance & Maintenance Management  

GCMS is a centralized digital solution built for institutional grievance handling and campus maintenance operations:
- 📝 **Complaint Lifecycle:** Multi-category issue submission with automated ticket routing.
- 🛠️ **Maintenance Tracking:** Work allocation to campus maintenance teams and status updates.
- 📊 **Administrative Oversight:** Institutional analytics on resolution times and service satisfaction.`,
                suggestions: ['Tell me about School ERP', 'Tell me about MediShop', 'Show all projects'],
            };
        }

        // General Projects Overview
        return {
            answer: `🚀 **Prabu R's Software Projects Portfolio (25+ Projects):**

### Featured Production Applications:
1. 🛍️ **EveryKadai:** Retail billing, inventory tracking, barcode scanning, and thermal printing POS.
2. 🌶️ **Ard Al Jannat:** Dubai-based corporate web platform for foodstuff and spice trading.
3. 👥 **Piolet HRM:** Multi-dashboard human resource and workforce operations suite.
4. 🏫 **GCMS:** Institutional grievance and campus maintenance management platform.
5. 💊 **MediShop Pharmacy ERP:** Specialized pharmacy management and stock control application.
6. 🏡 **StayHive:** Accommodation, tenant, and PG rental management solution.

### Product Development Initiatives:
- 🎓 **School ERP:** Multi-module institutional management product covering SIS, academics, exams, and fees.
- 💼 **Code Blaza HRM:** Employee attendance, daily work reports, and workforce management.
- 🧵 **Shri Athav Textile Mills:** Textile inventory, worker production entries, and salary tracking.
- 🏭 **Aadhav Textile:** Specialized textile business development solution.

*(Development initiatives are tracked accurately and distinguished from live commercial deployments).*`,
            suggestions: [
                'Tell me about EveryKadai',
                'Tell me about Ard Al Jannat',
                'Can Prabu build custom software for me?',
                'How to contact Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 8. PROFESSIONAL WORK EXPERIENCE & INTERNSHIPS (Section 2, 4)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('experience') ||
        q.includes('internship') ||
        q.includes('work history') ||
        q.includes('career') ||
        q.includes('job') ||
        q.includes('qmex') ||
        q.includes('optimus')
    ) {
        return {
            answer: `💼 **Prabu R's Professional Experience & Internships:**

*Professional experience duration:* **${expYears}** (calculated from March 10, 2025).

### Career Progression:
1. 👑 **Chief Executive Officer (CEO) & Full Stack Developer**  
   *Code Blaza Technology* (01/09/2026 – Present)  
   *Steering company initiatives, product direction, technical architecture, and software development.*

2. 💻 **Full Stack Developer Intern**  
   *Qmex Solutions* (01/08/2026 – 31/08/2026)  
   *Full stack web application development, backend integration, and database operations.*

3. ⚛️ **React Developer Intern**  
   *Code Blaza Technology* (10/08/2025 – 10/08/2026)  
   *Building modular React component systems, responsive interfaces, and API integrations.*

4. 🌐 **Web Developer Intern**  
   *Optimus Technologies Pvt Ltd* (11/07/2025 – 09/08/2025)  
   *Frontend interface design, responsive layouts, and performance optimization.*

5. 🎨 **Frontend Developer Intern**  
   *Code Blaza Technology* (10/03/2025 – 10/07/2025)  
   *Initial internship focusing on Tailwind UI implementation, wireframes, and prototypes.*`,
            suggestions: [
                'Tell me about his CEO role',
                'What projects did he build?',
                'What is his educational background?',
                'Can I hire Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 9. EDUCATION & ACADEMICS (Section 12)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('education') ||
        q.includes('college') ||
        q.includes('degree') ||
        q.includes('cgpa') ||
        q.includes('gnanamani') ||
        q.includes('study') ||
        q.includes('academic') ||
        q.includes('school')
    ) {
        return {
            answer: `🎓 **Educational Background of Prabu R:**

- 🏛️ **B.E. in Computer Science and Engineering**  
  *Gnanamani College of Technology, Namakkal, Tamil Nadu*  
  *Duration:* 27/10/2022 – 31/05/2026  
  📊 **Score:** **CGPA: 7.86** (subject to official record verification)

- 🏫 **Higher Secondary (HSC - Class XII)**  
  *Government Higher Secondary School, Puduchatram*  
  *Score:* **73%** (2021 – 2022)

- 🏫 **Secondary School Leaving Certificate (SSLC - Class X)**  
  *Government Higher Secondary School, Kalangani*  
  *Score:* **69%** (2019 – 2020)`,
            suggestions: [
                'What certifications does he hold?',
                'What are his core technical skills?',
                'Show me his software projects',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 10. CERTIFICATIONS & ACHIEVEMENTS (Section 11)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('certificate') ||
        q.includes('certification') ||
        q.includes('award') ||
        q.includes('prize') ||
        q.includes('symposium') ||
        q.includes('credentials')
    ) {
        return {
            answer: `🏆 **Certifications & Achievements:**

Prabu maintains a verified portfolio of **85+ course certificates**, **4 internships**, and **13 symposium prizes**:

### Verified Certificate Issuers:
- 📜 **Microsoft Learn:** Cybersecurity, Microsoft 365 Copilot AI, and cloud fundamentals.
- 📜 **NPTEL (IIT Madras):** Python for Data Science.
- 📜 **MongoDB Skills Series:** Vector Search, Document Modeling, and CRUD Operations.
- 📜 **MathWorks Training Services:** Machine Learning and Deep Learning Onramp (100% Score).
- 📜 **UiPath Academy:** Agentic Automation Developer Associate.
- 📜 **Celonis:** AI Foundations Verified Badge.
- 📜 **Autodesk:** BIM for AECO Industry & Structural Design.
- 📜 **CSC Computer Education:** Advance Diploma in Python Programming (A+ Grade).

### Selected Symposium Prizes:
- 🥇 1st Prize — ALGONEXUS'25, Jayalakshmi Institute of Technology.
- 🥇 1st Prize — Mahendra Engineering College.
- 🥇 1st Prize — Treasure Hunt, Jayalakshmi Institute of Technology.`,
            suggestions: [
                'Tell me about his technical skills',
                'What projects has he built?',
                'How to contact Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 11. RECRUITMENT & HIRING (Section 13, 19)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('hire') ||
        q.includes('recruiting') ||
        q.includes('recruiter') ||
        q.includes('job') ||
        q.includes('available for work') ||
        q.includes('full time') ||
        q.includes('contract')
    ) {
        return {
            answer: `🤝 **Recruitment & Developer Opportunities:**

Prabu R combines **Full Stack Software Engineering** experience with real-world product delivery:
- 💻 **Engineering Strengths:** React.js, Tailwind CSS, TypeScript, Python, FastAPI, PostgreSQL, REST APIs.
- 🏗️ **Architectural Capabilities:** Role-based systems, ERPs, billing applications, and secure authentication.
- 💼 **Leadership Maturity:** Hands-on CEO experience coordinating timelines, requirements, and deployment pipelines.

You can review his developer credentials, projects, and resume on this portfolio. For career inquiries, please connect directly via:
- 💼 **LinkedIn:** [linkedin.com/in/prabu-r12092005](https://www.linkedin.com/in/prabu-r12092005)
- 📧 **Email:** [prabur2k5@gmail.com](mailto:prabur2k5@gmail.com)
- 📞 **Direct:** [+91 95248 15890](https://wa.me/919524815890)`,
            suggestions: [
                'View his technical tech stack',
                'Tell me about EveryKadai ERP',
                'Download or view resume',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 12. BUSINESS ENQUIRIES & PARTNERSHIPS (Section 13, 19)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('business') ||
        q.includes('client') ||
        q.includes('develop an erp') ||
        q.includes('build custom') ||
        q.includes('partnership') ||
        q.includes('mou') ||
        q.includes('collaborate') ||
        q.includes('work with colleges')
    ) {
        return {
            answer: `💼 **Business Solutions & Institutional Partnerships:**

Code Blaza Technology, led by Prabu R, actively collaborates with businesses, startup founders, and educational institutions:

- 🏬 **Custom ERP & POS Software:** Tailored retail billing, school management, and inventory solutions.
- 🌐 **Corporate Web Applications:** High-performance business platforms.
- 📈 **Digital Marketing Solutions:** Strategic online growth and SEO optimization.
- 🤝 **Institutional MOUs & Training:** College workshops, value-added technology courses, and student internship programs.

For project consultations, RFPs, or partnership discussions:
- 🌐 **Company Portal:** [codeblazatechnology.in](https://codeblazatechnology.in/)
- 📧 **Direct Inquiry:** [prabur2k5@gmail.com](mailto:prabur2k5@gmail.com)
- 📞 **WhatsApp / Phone:** [+91 95248 15890](https://wa.me/919524815890)`,
            suggestions: [
                'What is Code Blaza Technology?',
                'Tell me about EveryKadai ERP',
                'How to contact Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 13. RESUME (Section 2)
    // ─────────────────────────────────────────────────────────────
    if (q.includes('resume') || q.includes('cv') || q.includes('download resume') || q.includes('view resume')) {
        return {
            answer: `📄 **Prabu R — Professional Resume:**

Prabu's resume outlines his leadership as CEO of Code Blaza Technology, his Full Stack engineering stack, B.E. Computer Science degree (CGPA: 7.86), 25+ projects, 4 internships, and 85+ certifications.

You can inspect the full resume on this portfolio using the **"View Resume"** button on the Home page navigation!`,
            suggestions: [
                'What are his technical skills?',
                'Tell me about his work experience',
                'How to contact Prabu?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 14. CONTACT INFORMATION (Section 2, 19)
    // ─────────────────────────────────────────────────────────────
    if (
        q.includes('contact') ||
        q.includes('email') ||
        q.includes('phone') ||
        q.includes('whatsapp') ||
        q.includes('linkedin') ||
        q.includes('github') ||
        q.includes('website') ||
        q.includes('reach')
    ) {
        return {
            answer: `📬 **Verified Contact Channels for Prabu R:**

- 📧 **Primary Email:** [prabur2k5@gmail.com](mailto:prabur2k5@gmail.com)
- 📧 **Secondary Email:** [prabur2k5@outlook.com](mailto:prabur2k5@outlook.com)
- 📞 **Phone & WhatsApp:** [+91 95248 15890](https://wa.me/919524815890)
- 💼 **LinkedIn Profile:** [linkedin.com/in/prabu-r12092005](https://www.linkedin.com/in/prabu-r12092005)
- 🐙 **GitHub Repository:** [github.com/praburofficial](https://github.com/praburofficial)
- 🏢 **Company Portal:** [codeblazatechnology.in](https://codeblazatechnology.in/)
- 🌐 **Personal Portfolio:** [prabu-red.vercel.app](https://prabu-red.vercel.app/)
- 📍 **Location:** Kalangani, Namakkal, Tamil Nadu, India`,
            suggestions: [
                'Tell me about EveryKadai',
                'What are his technical skills?',
                'What services does Code Blaza offer?',
            ],
        };
    }

    // ─────────────────────────────────────────────────────────────
    // 15. ACCURACY & KNOWLEDGE SAFETY FALLBACK (Section 18)
    // ─────────────────────────────────────────────────────────────
    return {
        answer: `I can help with questions about Prabu's portfolio, technical work and Code Blaza Technology.

If your inquiry regards specific private records, client data or internal company figures, I don't have verified information about that particular detail. You can contact Prabu directly for confirmation.

Here is what I can help you explore:
- 👨‍💻 **Technical Profile:** React, FastAPI, Python, PostgreSQL, REST APIs
- 🚀 **Projects (25+):** EveryKadai, Ard Al Jannat, Piolet HRM, GCMS, MediShop
- 👑 **Founder Journey:** CEO of Code Blaza Technology & startup milestones
- 💼 **Experience:** ${expYears} of experience, 4 internships & 85+ certificates
- 📬 **Direct Contact:** [prabur2k5@gmail.com](mailto:prabur2k5@gmail.com) / [+91 95248 15890](https://wa.me/919524815890)`,
        suggestions: [
            'Who is Prabu R?',
            'What are his top projects?',
            'What services does Code Blaza offer?',
            'How can I contact Prabu?',
        ],
    };
}
