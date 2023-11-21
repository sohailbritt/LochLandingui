import './testimonials.css'
const Testimonials = (props) => {
    const data = props.data;
  return (
    data.map((item) => {
      return (
               <div className='testimonial_card' key={item.header}>
                <span className='testimonial_head'>{item.header}</span> <span className='testimonial_subtitle'>{item.subtitle}</span>
                <p className='testimonial_text'>“{item.text}”</p>
               </div>
              )
    })
    
  )
}

export default Testimonials
