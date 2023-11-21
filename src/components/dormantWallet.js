import clock from '../assets/clock.svg';
import DropDownButton from './dropDownButton';
import './dormantWallet.css';

const DormantWallet = () => {
  const data = ['> 30 days', '> 60 days', '> 90 days', '> 120 days'];
  return (
          <div className='emailNotifcard'>
            <div className='notifyCard-Inner-flex'>
              <img src={clock} alt="bell"/>
              <input className='dormantCheckBox' type="checkbox"  name="wallet" value="wallet"/>
            </div>
            <p className='cardDormantWallet-text'> Notify me when any <br/> wallet dormant for</p>
            <DropDownButton data={data} style={{marginTop: '9px'}}/>
            <p className='small-text'>becomes active</p>
        </div>
        )
  }
export default DormantWallet;
