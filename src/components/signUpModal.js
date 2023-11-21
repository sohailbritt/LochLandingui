import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import './signUpModal.css';

const SignUpModal = () => {
  const navigate = useNavigate();
    const message = `Please enter a valid email`;
    const custom ={
        content : {
            position: 'fixed',
            inset: '0px',
            width: '640px',
            height: '1024px',
            top: '-38px',
            marginLeft: '20%',
            background: 'white'
        }
    }
    



  const [showModal, setShowModal] = useState(true); 
  const [email, setEmail] = useState(''); 
  const [isValid, setIsValid] = useState(true);
    
    // const handleOpenModal = () => {
    //     setShowModal(true);
    // }
    
    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/')
    }

    const onChange = (e) => {
       setEmail(e.target.value);
    }

    const onValidateEmail = () => {
        const emailStatus =  /^\S+@\S+\.\S+$/.test(email);
        emailStatus ? setIsValid(true) : setIsValid(false);
    }

    const onSignUp = () => {
        if(email === '') {
            setIsValid(false);
        }else {
           if(email.length > 3 && isValid === true) {
            window.location.assign("https://app.loch.one/welcome")
           }
        }
    }
    
      return (
        <div>
            <Modal 
                ariaHideApp={false}
                isOpen={showModal}
                contentLabel="Minimal Modal Example"
                style={custom}
            >
              <button className='close-btn' onClick={()=>{handleCloseModal()}}>x</button>
                <h1 className="modalHeading " >Sign up for <br/>exclusive access.</h1>
                <input 
                  class="modal-text"
                  type="text"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e)=>{onChange(e)}}
                  onBlur={()=>{onValidateEmail()}}
                  onFocus={()=>{onValidateEmail()}}
                  ></input>
                  {!isValid && <p className="alert">{message}</p>}
                <button
                   className="modal-button"
                   style={isValid ? {marginTop: '24px'} : null}
                   onClick={() => {onSignUp()}}
                   >
                    Get Started</button>
                <p className="modal-subtext">You’ll receive an email with an invite link to join.</p>
          </Modal>
        </div>
      );
}   

export default SignUpModal;