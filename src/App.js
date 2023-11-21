import { useEffect, useState } from 'react';
import './App.css';

import EmailNotificationCard from './components/emailNotificationCard';
import WalletNotification from './components/walletNotification';
import DormantWallet from './components/dormantWallet';
import Testimonials from './components/testimonials';

import cohorts from './assets/Cohorts 1.svg';
import eye from './assets/Eye.svg';
import vector from './assets/Vector.svg';
import Bell from './assets/Bellrotator.png';





function App() {
  const TestimonialsData = [
    {header: 'Jack F',
    subtitle: 'Ex Blackrock PM',
    text: `Love how Loch integrates portfolio
    analytics and whale watching into one
    unified app`},

    {header: 'Yash P',
    subtitle: 'Research, 3poch Crypto Hedge Fund',
    text: `I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!`},

    {header: 'Shiv S',
    subtitle: 'Co-Founder Magik Labs',
    text: `Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.`},

    {header: 'John F',
    subtitle: 'Queen true PM',
    text: `Love how Loch integrates portfolio
    analytics and nice app`},

    {header: 'Quinton Rach',
    subtitle: 'Baloon Cruz',
    text: `I can keep tracking my money easily now watching into one
    unified app`},
  ];

  const [rotateValue, setRotateValue] = useState(window.screen.orientation.type)


  window.addEventListener("orientationchange", (event) => {
    const targetBell = document.querySelector('.Rotation_Bell');
    targetBell.classList.add('rotatemode');

    setTimeout(()=>{
      targetBell.classList.remove('rotatemode');
      console.log('removed')
    }, 9000)
  });

  // useEffect(()=> {
  //   console.log(window);
  //   setRotateValue(window.screen.orientation.type)
  //   const targetBell = document.querySelector('.Rotation_Bell');
  //   if(rotateValue === 'landscape-primary' || rotateValue === 'landscape-secondary' || rotateValue === 'portrait-primary' || rotateValue === 'portrait-secondary'){
  //     targetBell.classList.add('rotatemode');
  //     console.log('rotate');
  //   }
    
  // },[])
  
  //click and dragg
  const slider = document.querySelector('.testimonial-flex');
  let isDown = false;
  let startX;
  let scrollLeft;

  function onMouseDown(e) {
    isDown = true;
    slider.classList.add('active');
    console.log(slider);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }

  function onMouseLeave() {
    isDown = false;
    slider.classList.remove('active');
  }

  function onMouseUp() {
    isDown = false;
    slider.classList.remove('active');
  };

  function onMouseMove(e){
    slider.classList.add('active');
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  };

  return (
    <>
      <img className='Rotation_Bell' src={Bell} alt="Rotation Bell" />
      <div className='hero_Section_1'>
        <div>
          <div className='hero1'>Get notified when a highly correlated <br/>whale makes a move</div>
          <p className='hero1_sub'>Find out when a certain whale moves <br/> more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
        </div>
        <div className='hero_Section1_sideScroll' >
            <EmailNotificationCard />
            <WalletNotification />
            <DormantWallet />
        </div>
      </div>

      <div className='hero_Section_2'>
          <img className='flex-Image' src={cohorts} alt="cohorts" />
          <div className='hero_Section_2_right'>
            <img src={eye} alt="cohorts" /> 
            <h1>Watch what the <br/>whales are doing</h1>
            <p className='hero2_sub'>All whales are not equal. Know exactly <br/> what the whales impacting YOUR<br/> portfolio are doing.</p>
          </div>
      </div>

      <h1 className='testimonial_title'>Testimonials</h1>
      <div className='line'></div>
     
      <div className='footer_Section'>
          <img src={vector} alt="vector" />
          <div>
             <div className='testimonial-flex'
                onMouseDown={(e)=>{onMouseDown (e)}}
                onMouseUp={(e)=>{onMouseUp ()}}
                onMouseLeave={(e)=>{onMouseLeave ()}}
                onMouseMove={(e)=>{onMouseMove (e)}}
              >
                  <Testimonials data={TestimonialsData}/> 
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
