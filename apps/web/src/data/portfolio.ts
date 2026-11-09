export type Project = { id: string; number: string; name: string; category: string; description: string; tags: string[]; accent: string; challenge: string; features: string[] };
export const projects: Project[] = [
 { id:'ledgerguard', number:'01', name:'LedgerGuard', category:'Fraud detection · Monitoring', description:'A fraud detection and transaction monitoring project.', tags:['Fraud detection','Transaction monitoring'], accent:'lavender', challenge:'Exploring how suspicious transactions can be identified and monitored.', features:['Fraud detection','Transaction monitoring'] },
 { id:'reconengine', number:'02', name:'ReconEngine', category:'Financial systems · Reconciliation', description:'A financial transaction reconciliation engine.', tags:['Financial systems','Reconciliation'], accent:'mint', challenge:'Building a foundation for matching and reconciling financial transactions.', features:['Transaction reconciliation'] },
 { id:'finstress', number:'03', name:'FinStress', category:'Machine learning · Finance', description:'A financial stress analysis application using machine learning.', tags:['Machine learning','Financial analysis'], accent:'yellow', challenge:'Applying machine learning to the problem of financial stress analysis.', features:['Financial stress analysis','Machine learning'] },
];
export const skills = [
 {title:'Programming', items:['Programming languages']}, {title:'Build', items:['Frontend development','Backend development']}, {title:'Foundations', items:['Data structures & algorithms','Database systems']}, {title:'Explore', items:['Artificial intelligence','Practical software development']},
];
export const achievements: string[] = [];
export const portfolio = { name:'Khushi Chakke', role:'Computer Engineering student · Software developer', email:'', github:'', linkedin:'' };
