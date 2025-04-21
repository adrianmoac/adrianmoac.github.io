export interface ProjectsInterface {
  title: string;
  summary: string;
  description: string;
  repo: string;
  liveDemo?: string;
  images: string[],
  technologies: string[]
}

export const projectsList = [
  {
    title: 'Lexical Analyzer',
    summary: 'Detect the similarities between two codes.',
    description: 'The code can be scanned as raw code (without preprocessing) and with preprocessed code (the code removes spaces, comments, and other characters not needed for the comparison and changes the names of the variables). After the initial steps, it can be scanned by two types of technologies: using difflib, which is a library that returns the similarities and in the other hand, creating the Suffix Array. Once having the result of both of them, it compares the similarities thrown by them and generates a PDF report with the percentage of similarities and the similar parts in both codes.',
    repo: 'https://github.com/adrianmoac/lexical-analyzer',
    images: ['scanReport.png'],
    technologies: ['Python']
  },
  {
    title: 'Time Management',
    summary: 'Task management with time tracker',
    description: 'Simple web application that allows the user to add new tasks to complete at this moment with an estimate time. Once completed, it moves to the "Completed" tasks and continues with the next one.',
    repo: 'https://github.com/adrianmoac/management-app',
    liveDemo: 'https://easy-management.web.app',
    images: ['timeManagement.png'],
    technologies: ['Javascript', 'HTML', 'CSS', 'Firebase Hosting']
  },
  {
    title: 'Worker Efficiency Tracker',
    summary: 'Tracks completed tasks of workers.',
    description: 'Web application that manages workers in a company. It allows to register the total tasks completed and by doing changing their tasks, it calculates their salaries. It allows to Log In as an employee and it only allows them to register their tasks for that day. \nIf using the Demo, Log In with the next credentials: \nemail: admin@mail.com \npassword: 12341234',
    repo: 'https://github.com/adrianmoac/cinia-polares',
    liveDemo: 'https://cinia-polares.web.app/Login',
    images: ['workersTable.png', 'workersEfficiency.png'],
    technologies: ['React', 'Typescript', 'HTML', 'CSS', 'Firebase']
  }
]