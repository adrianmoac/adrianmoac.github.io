import { Colors } from '../helpers/colors'
import { ExperienceInterface, Experiences } from '../helpers/experiences'
import { useState } from 'react'
import Modal from './ExperienceModal'

type Props = {}

const Experience = (_: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [dateRange, setDateRange] = useState<string>('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [description, setDescription] = useState<string[]>([]);
  const [hoverExperience, setHoverExperience] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
    setCompanyName('');
    setJobTitle('');
    setDateRange('');
    setTechnologies([]);
    setDescription([]);
  }

  const handleOpen = (cName: string, jTitle: string, from: string, to: string, tech: string[], desc: string[]) => {
    setOpen(true);
    setCompanyName(cName);
    setJobTitle(jTitle);
    setDateRange(`${from} - ${to}`);
    setTechnologies(tech);
    setDescription(desc);
  }

  return (
    <div style={{ background: Colors.white, paddingBottom: 50, paddingTop: 50 }} id='Experience'>
      <Modal open={open} onCancel={handleClose} companyName={companyName} jobTitle={jobTitle} dateRange={dateRange} technologies={technologies} description={description}></Modal>
      <h1 style={{ color: Colors.charcoal, textAlign: 'center' }}>Experience</h1>
      {Experiences.map((experience: ExperienceInterface) => 
        <div key={experience.companyName + experience.jobTitle} style={{ 
          background: Colors.ghostWhiteStrong, 
          width: '80%', 
          borderRadius: 15, 
          marginLeft: 'auto', 
          marginRight: 'auto', 
          marginTop: 20, 
          padding: 20,
          display: 'flex',
          cursor: 'pointer'
          }}
          onClick={() => handleOpen(experience.companyName, experience.jobTitle, experience.from, experience.to, experience.technologies, experience.description)}
          onMouseEnter={() => setHoverExperience(experience.companyName + experience.jobTitle)}
          onMouseLeave={() => setHoverExperience('')}
          >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ margin: 0, color: hoverExperience === experience.companyName + experience.jobTitle ? Colors.red : Colors.charcoal }}>{`${experience.companyName} - ${experience.jobTitle}`}</h2>
            <h4 style={{ margin: 0, color: Colors.charcoal }}>{`${experience.from} - ${experience.to}`}</h4>
          </div>
          <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 0, alignItems: 'center' }}>
            <h4 
            style={{ color: hoverExperience === experience.companyName + experience.jobTitle ? Colors.red : Colors.charcoal, textAlign: 'center' }} 
            >View description</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default Experience