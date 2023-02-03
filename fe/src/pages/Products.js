import axios from 'axios';
import React, { useState } from 'react'

export default function Products() {

    const init = {
        productName: "",
        price: "",
        thumbImage: ""
    }
    const [productItem, setProductItem] = useState(init)
    return (

        <div>
            <form>
                <input className="form-control" placeholder='buteegdehuunii ner' value={productItem.productName} onChange={(e) => setProductItem({ ...productItem, productName: e.target.value })} />
                <input className="form-control" placeholder='une' value={productItem.price} onChange={(e) => setProductItem({ ...productItem, price: e.target.value })} />
                <input className="form-control" type="file" multiple onChange={(e) => {

                    const url = "https://api.cloudinary.com/v1_1/dnedspqvv/upload";

                    const formData = new FormData();

                    let file = e.target.files[0];
                    formData.append("file", file)
                    formData.append("api_key", 717874992253798)
                    formData.append("folder", "imageFolder")
                    formData.append("upload_preset", "mu1axwmr")

                    axios
                        .post(url, formData)
                        .then((res) => {
                            console.log(res);
                            setProductItem({ ...productItem, thumbImage: res.data.secure_url })
                        })

                }} />
                <button className='btn btn-primary'>Save</button>
                <button className='btn btn-danger'>Close</button>
            </form>
        </div>
    )
}