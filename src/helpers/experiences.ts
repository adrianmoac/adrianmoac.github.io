export interface ExperienceInterface {
  companyName: string
  jobTitle: string
  from: string
  to: string
  technologies: string[]
  description: string[]
}

export const Experiences = [
  {
    companyName: 'Ellucian',
    jobTitle: 'Developer Intern',
    from: 'January 2025',
    to: 'Today',
    technologies: ['Jenkins', 'PostgreSQL', 'Oracle DB', 'Java', 'Jira'],
    description: ['Contributed to the migration of web pages to a new SaaS platform, learning and applying DevOps practices using Jenkins to automate scan process.', 
      'Worked on the main web application using Java and database system with Oracle DB and PostgreSQL, enhancing scalability and reliability']
  },
  {
    companyName: 'Softtek',
    jobTitle: 'Software Engineer Trainee',
    from: 'June 2024',
    to: 'December 2024',
    technologies: ['React', 'Typescript', 'Firebase', 'Google Cloud', 'GitHub Projects', 'Github Actions', 'MUI', 'Antd'],
    description: ['Developed and maintained an internal npm package to render dynamic forms, leveraging React, TypeScript, and Firebase services.', 
      'Implemented real-time features and contributed to CI/CD workflows using GitHub Actions, enhancing developer efficiency.', 
      'Worked to fulfill client needs for a new web application to manage their suppliers']
  },
  {
    companyName: 'Gravity Epoch',
    jobTitle: 'Developer Intern',
    from: 'December 2023',
    to: 'June 2024',
    technologies: ['React', 'Javascript', 'React Native', 'GraphQL', 'Mocha.js', 'MUI'],
    description: ['Worked on the main web application and mobile app using React and React Native, implementing new features and fixing bugs', 
      'Used GraphQL for database interaction and Mocha.js for automated testing for the newly created or updated tables.']
  }
]