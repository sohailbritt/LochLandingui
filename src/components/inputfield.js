import React, {useState} from 'react';
import './inputfield.css';

function InputField(props) {
  const [defaultMail, setDefaultMail] = useState('hello@gmail.com');
  const handleChange = (e) => {
    console.log(e.target.value);
    setDefaultMail(e.target.value);
  }
  return (
    <input 
      className='input-text'
      type="text" 
      onChange={(e)=>{handleChange(e)}}
      placeholder='Your email address'
      value={defaultMail}
    />
  )
}

export default InputField;
