export type Project = { id: string; number: string; name: string; fullName: string; category: string; description: string; tags: string[]; accent: string; challenge: string; features: string[] };
export const projects: Project[] = [
 { id:'reconengine', number:'01', name:'ReconEngine', fullName:'Agentic Financial Reconciliation Platform', category:'AI agents · Financial systems', description:'Automates transaction matching between internal ledgers and external settlement records, with agent-led investigation for exceptions.', tags:['Node.js','PostgreSQL','Python','FastAPI','LangGraph','React','Docker'], accent:'lavender', challenge:'Reliable matching and investigation across 10,000+ transaction records.', features:['Four matching strategies: Exact, Tolerance, Reference and Composite','Four specialized LangGraph agents coordinate through shared state and conditional routing','Investigates discrepancies, gathers evidence and recommends resolutions','Async PostgreSQL workers use FOR UPDATE SKIP LOCKED, retries, dead-letter handling and stalled-job recovery','Transactions, unique constraints and trigger-based audit logging; validated with 35 test cases'] },
 { id:'campustrade', number:'02', name:'CampusTrade', fullName:'Peer-to-Peer Campus Marketplace', category:'Full stack · Real-time systems', description:'A full-stack campus marketplace with searchable listings, separate user and administrator workflows, and live buyer–seller messaging.', tags:['React.js','Node.js','Express.js','MongoDB','REST APIs','WebSockets'], accent:'mint', challenge:'Improving feed efficiency while providing safe, responsive marketplace workflows.', features:['JWT authentication, role-based authorization, ownership checks, server-side validation and rate limiting','Compound indexes, pagination, response compression and connection pooling','Feed query documents examined reduced from 10,000 to 12 (99.88% fewer)','Feed payload reduced from 3.0 MB to 6 KB','Results verified through functional and benchmark test suites'] },
];
export const skills = [
 {title:'Programming Languages', items:['C','C++','Java','Python','JavaScript','SQL']},
 {title:'Backend & Frameworks', items:['Node.js','Express.js','FastAPI','React.js','REST APIs','WebSockets']},
 {title:'AI & Agentic Systems', items:['LangGraph','Multi-Agent Orchestration','Stateful Workflows','Conditional Routing']},
 {title:'Databases & Tools', items:['PostgreSQL','MySQL','MongoDB','Git','GitHub','Docker','Linux','GitHub Actions']},
 {title:'Engineering Practices', items:['Data Structures & Algorithms','OOP','DBMS','Agile/Scrum','CI/CD','Unit & Regression Testing','API Testing','Code Reviews']},
];
export const experience = [
 {role:'Research Intern (In-House) — Software Development', dates:'December 2025 – May 2026', technologies:['Java','SQL','REST APIs','Agile','SDLC'], details:['Designed and delivered 12+ features for a live application serving 200+ active users, building REST APIs backed by a relational SQL database and shipping releases with zero post-release rollbacks across Agile sprints.','Managed feature delivery across requirement analysis, design discussions with senior engineers, implementation, code reviews, regression testing and root-cause analysis.','Participated in discussions and testing of a gated CI/CD pipeline for a five-microservice system involving approval checks and rollback support, as part of an initiative that reduced release time from days to under two hours.']},
];
export const achievements = [
 {title:'Finalist — SEBI Securities Market TechSprint 2026', detail:'Top 8 among 2,664 teams for an AI-driven SME IPO disclosure solution.'},
 {title:'Finalist — Compute n Compete 2025', detail:'Top 20 among 100 teams at PICT ACM Student Chapter.'},
 {title:'Problem Solving', detail:'Solved 400+ DSA problems across LeetCode and CodeChef.'},
 {title:'Goethe-Zertifikat A1', detail:'Goethe-Institut.'},
];
export const portfolio = { name:'Khushi Parag Chakke', role:'Computer Engineering undergraduate', location:'Pune, Maharashtra, India', email:'khushichakke@gmail.com', github:'https://github.com/Khushi-426', linkedin:'https://www.linkedin.com/in/khushichakke', leetcode:'https://leetcode.com/u/KhushiChakke/' };
