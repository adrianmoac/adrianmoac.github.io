import { Tooltip } from 'antd';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Colors } from '../helpers/colors';

type Props = {
  open: boolean;
  title: string;
  description: string;
  repo: string;
  liveDemo: string;
  images: string[];
  technologies: string[];
  onCancel: () => void;
}

const Modal: React.FC<Props> = ({ open, onCancel, title, description, repo, liveDemo, images, technologies }) => {
  return (
    <div 
    style={{ width: '100vw', 
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.3)', 
      position: 'fixed', 
      zIndex: 11, 
      display: open ? 'flex' : 'none', 
      top: 0, 
      bottom: 0
    }}
    onClick={onCancel}
    >
      <div 
      style={{ backgroundColor: Colors.ghostWhiteLight, 
        width: '70%', 
        maxHeight: '80vh',
        display: 'flex', 
        margin: 'auto', 
        marginRight: 'auto', 
        borderRadius: 15, 
        padding: 30, 
        zIndex: 12, 
        flexDirection: 'column',
        boxShadow: '1px 1px 10px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'auto',
        position: 'relative'
      }}
      onClick={(e) => e.stopPropagation()} 
      >
        <IoIosCloseCircleOutline style={{ 
          cursor: 'pointer',
          color: Colors.charcoal,
          fontSize: 30,
          position: 'absolute', 
          top: 5,
          right: 5,
          zIndex: 1000 }} 
          onClick={onCancel}/>
        <div style={{ display: 'flex', gap: 10, marginLeft: 'auto', marginRight: 0, marginTop: 15 }}>
          <Tooltip title='Open Github Repo'>
            <FaGithub style={{ fontSize: 35, cursor: 'pointer', color: Colors.charcoal }} onClick={() => window.open(repo, '_blank')}/>
          </Tooltip>
          {liveDemo &&
            <Tooltip title='Open demo'>
              <IoMdOpen style={{ fontSize: 35, cursor: 'pointer', color: Colors.charcoal }} onClick={() => window.open(liveDemo, '_blank')}/>
            </Tooltip>
          }
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: 30, fontSize: 30, color: Colors.charcoal }}>{title}</h2>
        <h3 style={{ color: Colors.charcoal }}>Used technologies:</h3>
        <div style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap', color: Colors.charcoal }}>
          {technologies.map((tech: string) => (
            <div key={tech} style={{ border: `solid ${Colors.charcoal} 1px`, color: Colors.charcoal, width: 'fit-content', padding: 15, borderRadius: 5, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tech}</div>
          ))}
        </div>
        <h3 style={{ marginTop: 20, color: Colors.charcoal }}>Description</h3>
        <h5 style={{ color: Colors.charcoal }}>{description}</h5>
        {images.map((img: string) => (
          <img key={img} style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: 10, marginBottom: 10 }} src={`projects/${img}`} alt='Project Image'></img>
        ))}
      </div>
    </div>
  )
}

export default Modal