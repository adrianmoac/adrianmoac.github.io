import { useState } from 'react'
import { Colors } from '../helpers/colors'
import { ProjectsInterface, projectsList } from '../helpers/projects'
import Modal from './ProjectModal'

type Props = {}

const Projects = (_: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [repo, setRepo] = useState<string>('');
  const [liveDemo, setLiveDemo] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>(projectsList[0].images[0]);
  const [hoverExperience, setHoverExperience] = useState<string>('');
  const [loadedImage, setLoadedImage] = useState<boolean>(true);
  const [hoveredDiv, setHoveredDiv] = useState<number>(0);

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setRepo('');
    setLiveDemo('');
    setTechnologies([]);
    setDescription('');
    setImages([]);
  }

  const handleOpen = (pTitle: string, pRepo: string, pImages: string[], pTechnologies: string[], desc: string, pLiveDemo: string) => {
    setOpen(true);
    setTitle(pTitle);
    setRepo(pRepo);
    setLiveDemo(pLiveDemo);
    setTechnologies(pTechnologies);
    setDescription(desc);
    setImages(pImages);
  }

  const handleHover = (pImages: string[]) => {
    setLoadedImage(false);
  
    setTimeout(() => {
      const img = new Image();
      img.src = `projects/${pImages[0]}`;
      img.onload = () => {
        setCurrentImage(pImages[0]); 
        setLoadedImage(true);
      };
    }, 300); 
  };
  
  return (
    <div style={{ background: Colors.ghostWhiteLight, paddingBottom: 50, paddingTop: 50 }} id='Projects'>
      <Modal open={open} onCancel={handleClose} title={title} repo={repo} liveDemo={liveDemo} technologies={technologies} images={images} description={description}></Modal>
      <h1 style={{ color: Colors.charcoal, textAlign: 'center' }}>Projects</h1>
      <div style={{ display: 'flex', marginTop: 30 }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30%', marginLeft: '10%', marginBottom: 100 }}>
          {projectsList.map((project: ProjectsInterface, index: number) => 
            <div style={{ 
              background: Colors.ghostWhiteStrong, 
              borderRadius: 15, 
              marginTop: 20, 
              padding: 20,
              display: 'flex',
              height: 'fit-content',
              cursor: 'pointer'
              }}
              key={project.title}
              onMouseEnter={() => {
                handleHover(project.images)
                setHoveredDiv(index)
                setHoverExperience(project.title)
              }}
              onMouseLeave={() => setHoverExperience('')}
              onClick={() => handleOpen(project.title, project.repo, project.images, project.technologies, project.description, project.liveDemo || '')}
              >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ margin: 0, color: hoverExperience === project.title ? Colors.red : Colors.charcoal }}>{project.title}</h2>
                <h3 style={{ margin: 0, color: Colors.charcoal }}>{project.summary}</h3>
              </div>
              <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 0, alignItems: 'center' }}>
                <h4 
                style={{ cursor: 'pointer', color: hoverExperience === project.title ? Colors.red : Colors.charcoal  }} 
                >View description</h4>
              </div>
            </div>
          )}
        </div>
        <div 
          style={{ 
            maxWidth: '45%', 
            marginLeft: 'auto', 
            marginRight: '10%', 
            marginTop: hoveredDiv * 100, 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img 
            style={{ 
              width: '100%', 
              height: 'auto', 
              objectFit: 'contain',
              boxShadow: '15px 15px #F80C46', 
              display: 'block'
            }} 
            className={`fade-image ${loadedImage ? 'fade-in' : 'fade-out'}`} 
            src={`projects/${currentImage}`} 
            alt='Project Name'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects