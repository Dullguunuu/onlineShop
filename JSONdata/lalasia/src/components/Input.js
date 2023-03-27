import { RiSearch2Line } from 'react-icons/ri';
import { Button } from './Button';
import "../App.css"
import "../style/Input.css"

export const Input = () => {
    return (
        <div className='input flex flex-row space-between align-items'>
            <RiSearch2Line style={{ fontSize: "0.7em" }} />
            <input type="text" placeholder='Search property' />
            <Button name="Search" className="searchBtn" />
        </div>
    )
}