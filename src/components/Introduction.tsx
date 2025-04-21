
import { useEffect, useRef, useState } from "react";
import { Colors } from "../helpers/colors"; 
import { IoIosArrowDropdown } from "react-icons/io";

const Introduction = () => {
  // const [currentName, setCurrentName] = useState<string>('');
  const [_, setCompleteString] = useState<string>('');
  const currentNameRef = useRef<string>('');
  const currentAdrianRef = useRef<string>('');
  const currentRestRef = useRef<string>('');
  const currentHelloRef = useRef<string>('');
  const currentIndexRef = useRef<number>(0);
  const hello = 'Hello!';
  const name = 'My name is ';
  const adrian = 'Adrián';
  const rest = " Moras Acuña. I am currently studying a Bachelor's degree in Computer Engineering, graduating in June 2025."
  const helloLength = hello.length;
  const nameLength = name.length;
  const adrianLength = adrian.length;
  const restLength = rest.length;

  useEffect(() => {
    const interval = setInterval(() => {
      let localHello = currentHelloRef.current;
      let localName = currentNameRef.current;
      let localAdrian = currentAdrianRef.current;
      let localRest = currentRestRef.current;
      if(currentIndexRef.current < helloLength) {
        currentHelloRef.current += hello[currentIndexRef.current]
        currentIndexRef.current += 1
      } else if(currentIndexRef.current < nameLength + helloLength) {
        currentNameRef.current += name[currentIndexRef.current - helloLength]
        currentIndexRef.current += 1
      } else if(currentIndexRef.current < adrianLength + helloLength + nameLength) {
        currentAdrianRef.current += adrian[currentIndexRef.current - helloLength - nameLength]
        currentIndexRef.current += 1
      } else if(currentIndexRef.current < nameLength + helloLength + adrianLength + restLength) {
        currentRestRef.current += rest[currentIndexRef.current - helloLength - nameLength - adrianLength]
        currentIndexRef.current += 1
      } else {
        clearInterval(interval);
        return;
      }
      setCompleteString(localHello + localName + localAdrian + localRest)
    }, 50)

    return () => clearInterval(interval);
  }, [])

  return (
    <div style={{ backgroundColor: Colors.ghostWhiteStrong, height: '100vh', padding: 50, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '80vh' }}>
        <img src='me.jpeg' alt='Picture of Adrian' style={{ width: '30%', height: 'auto', boxShadow: '15px 15px #F80C46' }} className="animate-on-load"/> 
        <div style={{ height: 'auto',   wordWrap: 'break-word',   whiteSpace: 'normal', backgroundColor: Colors.ghostWhiteStrong, textAlign: 'center', paddingTop: 50, paddingBottom: 50, width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
          <h3 style={{ color: Colors.charcoal, fontSize: 35 }}>{currentHelloRef.current}</h3>
          <h3 style={{ color: Colors.charcoal, fontSize: 25 }}>{<>{currentNameRef.current}<span style={{ color: Colors.red }}>{currentAdrianRef.current}</span>{currentRestRef.current}</>}</h3>
        </div>
      </div>
      <IoIosArrowDropdown style={{ fontSize: 40, color: Colors.red, marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }} onClick={() => window.location.href = '#WhoAmI'} className="animate-on-load"/>
    </div>
    
  );
};

export default Introduction;
