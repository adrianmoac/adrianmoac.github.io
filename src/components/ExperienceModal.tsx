import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Colors } from '../helpers/colors';

type Props = {
  open: boolean;
  companyName: string;
  jobTitle: string;
  dateRange: string;
  technologies: string[];
  description: string[];
  onCancel: () => void;
}

const Modal: React.FC<Props> = ({ open, onCancel, companyName, jobTitle, dateRange, technologies, description }) => {
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
      className='modal'
      style={{ backgroundColor: Colors.ghostWhiteLight, 
        display: 'flex', 
        margin: 'auto', 
        marginRight: 'auto', 
        borderRadius: 15, 
        padding: 30, 
        zIndex: 12, 
        flexDirection: 'column',
        boxShadow: '1px 1px 10px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'auto',
        maxHeight: '80vh',
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
        <h2 style={{ textAlign: 'center', marginBottom: 30, fontSize: 30, color: Colors.charcoal }}>{companyName}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30 }}>
          <h3 style={{ color: Colors.charcoal }}>{jobTitle}</h3>
          <h3 style={{ color: Colors.charcoal }}>{dateRange}</h3>
        </div>
        <h3 style={{ color: Colors.charcoal }}>Used technologies:</h3>
        <div style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
          {technologies.map((tech: string) => (
            <div key={tech} style={{ border: `solid ${Colors.charcoal} 1px`, color: Colors.charcoal, width: 'fit-content', padding: 15, borderRadius: 5, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{tech}</div>
          ))}
        </div>
        <h3 style={{ marginTop: 20, color: Colors.charcoal}}>My role:</h3>
        <ul style={{ marginLeft: 15, paddingTop: 10 }}>
          {description.map((desc, index) => (
            <li key={index} style={{ color: Colors.charcoal }}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Modal