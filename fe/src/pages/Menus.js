import React, { useState } from 'react';
import axios from "axios"

export default function Menus() {

    const init = {
        position: 0,
        menuName: "",
        link: "",
    }

    const [menuItem, setMenuItem] = useState(init);

    function handleMenuSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:6060/api/menu", menuItem)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err))
            .finally(() => console.log("done"))
    }


    return (
        <div>
            <form className='row g-2' onSubmit={handleMenuSubmit}>
                <div className='col-auto'>
                    <input className='form-control' placeholder='position'
                        type="number" name="position"
                        value={menuItem.position}
                        onChange={(e) => setMenuItem({ ...menuItem, position: e.target.value })} />
                </div>
                <div className='col-auto'>
                    <input className='form-control' placeholder='menu name' value={menuItem.menuName} onChange={(e) => setMenuItem({ ...menuItem, menuName: e.target.value })}
                        type="text" name="menuName" /></div>
                <div className='col-auto'><input className='form-control' value={menuItem.link} onChange={(e) => setMenuItem({ ...menuItem, link: e.target.value })} placeholder='link' type="text" name="link" /></div>
                <div className='col-auto'><button className='btn btn-primary addMenuBtn'>+ Add menu </button></div>
            </form>
        </div>
    )
}


// cloudinary