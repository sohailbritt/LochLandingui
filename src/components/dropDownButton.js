import {useLayoutEffect, useState} from "react";
const DropDownButton = (props) => {

    const [data, setData] = useState([]);

    useLayoutEffect(() => {
        if(!props.data) {
            return;
        } else {
            setData(props.data);
        }
    },[props.data])

        return(
            <select className='selectBox'>
                {
                    data.map((item)=>{
                        return(
                        <option key={item} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        )
}

export default DropDownButton;
