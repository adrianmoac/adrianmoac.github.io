import { useState } from 'react'
import { Colors } from '../helpers/colors';
import emailjs from 'emailjs-com';
import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type Props = {}

const ContactMe = (_: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSendMail = async () => {
    setLoading(true);
    await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
      from_name: name,
      to_name: 'adrianmoac@gmail.com',
      message: message + '\n' + email,
    }, import.meta.env.VITE_USER_ID)
      .then((result) => {
        if(result.text === 'OK') {
          setSuccess(true);
        } else {
          setError(true);
        }
      }, (_) => {
        setError(true);
      });
    setLoading(false);
  }

  return (
    <div style={{ background: Colors.ghostWhiteStrong, paddingTop: 50 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1 style={{ color: Colors.charcoal, textAlign: 'center', marginTop: 20 }} id='ContactMe'>Contact Me</h1>
        <Input
        style={{ height: 30, padding: 5 }}
        className="ant-select-selector"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
        placeholder='Name'
        ></Input>
        <Input
        value={email}
        style={{ height: 30, padding: 5 }}
        onChange={(e: any) => setEmail(e.target.value)}
        placeholder='Email'
        ></Input>
        <TextArea
        style={{ height: 100, padding: 5, resize: 'none' }}
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
        placeholder='Message'
        ></TextArea>
        {success && 
        <h4 style={{ color: 'green' }}>Message sent!</h4>
        }
        {error && 
        <h4 style={{ color: 'red' }}>Error sending message!</h4>
        }
        <button 
        disabled={loading || success ? true : false}
        style={{
          width: 100, 
          height: 30, 
          marginLeft: 'auto', 
          cursor: success ? 'default' : 'pointer', 
          marginRight: 0, 
          backgroundColor: success ? '#6D6F84' : isHovered ? '#353648' : Colors.charcoal, 
          border: 'none', 
          borderRadius: 5, 
          color: 'white' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleSendMail}
        >Send</button>
      </div>
      <div style={{ marginTop: 20, backgroundColor: Colors.white, height: 50, width: '100%', display: 'flex', justifyContent: 'center', gap: 50, alignItems: 'center' }}>
        <h5 style={{ color: Colors.charcoal }}>Adrián Moras Acuña</h5>
        <h5 style={{ color: Colors.charcoal }}>+52 271 108 1488</h5>
        <h5 style={{ color: Colors.charcoal }}>adrianmoac@gmail.com</h5>
      </div>
    </div>
  )
}

export default ContactMe