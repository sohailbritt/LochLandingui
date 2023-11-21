
import { useNavigate } from "react-router-dom"; 
import './emailNotificationCard.css';
import bell from '../assets/bell.svg';
import InputField from './inputfield';

const EmailNotificationCard = () => {
  const navigate = useNavigate();
  return (
    <div className='emailNotifcard'>
      <div className='notifyCard-Inner-flex'>
        <img src={bell} alt="bell"/>
        <button onClick={() => navigate('/signup')}>Save</button>
      </div>
      <p className='card-text'> We’ll be sending<br/>notifications to you<br/>here</p>
      <InputField cardDefaultMail='hello@gmail.com'/>
  </div>
  )
}

export default EmailNotificationCard;
