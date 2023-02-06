import React, { useState } from 'react'
import UserLoginModal from './sub/UserLoginModal'

export default function Users() {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button className='btn btn-primary' onClick={() => setModal(!modal)} >+ Add User</button>
            <UserLoginModal
                modal={modal}
                setModal={setModal}
            />
        </div>
    )
}
