import barChart from '../assets/bar-chart-2.svg';
import DropDownButton from './dropDownButton';
import './walletNotification.css';
const WalletNotification = () => {
  //data to be fetch here or provide mock data
  const data = ['$1,000.00', '$5,00.00', '$1,00.00', '$50.00'];
  return (
    <div className='emailNotifcard'>
      <div className='notifyCard-Inner-flex'>
        <img src={barChart} alt="barchart"/>
        <input className='walletCheckBox' type="checkbox"  name="wallet" value="wallet"/>
      </div>
      <p className='cardWallet-text'> Notify me when any wallets<br/>move more than</p>
      <DropDownButton data={data}/>
  </div>
 )
}

export default WalletNotification;
