import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"

export default function ProductDetail() {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [allProduct, setAllProduct] = useState([])
    const [related, setRelated] = useState([])
    let additionalDescOfProduct = "Furniture is the word that means all the things like chairs, tables, cupboards, beds and bookcases, etc. In other words, furniture are all the things that are in the house and that people can use to sit, to lie on or that are supposed to contain smaller things like cloths or cups.Furniture is made of wood, particle boards, leather, screws etc."
    const [readMore, setReadMore] = useState(false)
    const { id } = useParams()

    function getOneProduct() {
        fetch(`http://localhost:6060/api/product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setSelectedProduct(data.result[0])
            })
    }

    function getRelatedItems() {
        fetch(`http://localhost:6060/api/product`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.result);
                setAllProduct(data.result)
            })
        let filtered = allProduct.filter((e) => e.categoryId == selectedProduct.categoryId)
        setRelated(filtered)
        console.log(related)
    }

    useEffect(() => {
        getOneProduct();
        getRelatedItems();
    }, [])


    return (
        <div className='mt-5 mb-5'>
            {<div className='flex'>
                <img src={selectedProduct.thumbImage} alt="" className='col' />
                <div className='col m-5 flex flex-column justify-content-between'>
                    <h2 style={{ fontSize: "2.75rem" }}>{selectedProduct.productName}</h2>
                    <p style={{ color: "#AFADB5" }}>{selectedProduct.description}</p>
                    <p className='fw-bold'>Color</p>
                    <div className='flex'>
                        {/* {console.log(selectedProduct.images)} */}
                        {/* {
                            selectedProduct.images.map((e) => (
                                <img src={e} alt="" style={{ width: "60px" }} />
                            ))
                        } */}
                    </div>
                    {readMore ?
                        <p style={{ color: "#AFADB5" }}>{additionalDescOfProduct} <a href='#' style={{ color: "#518581" }} onClick={() => setReadMore(!readMore)}>Show Less</a></p>
                        :
                        <p style={{ color: "#AFADB5" }}>{additionalDescOfProduct.substring(0, 199)}... <a href='#' style={{ color: "#518581" }} onClick={() => setReadMore(!readMore)}>Read More</a></p>
                    }
                    <div className='row gap-3'>
                        <button className='col' style={{}}>Buy Now</button>
                        <button className='col' style={{ color: "black", background: "none", border: "1px grey solid" }}>Add to Cart</button>
                    </div>
                </div>
            </div>
            }
            <h3 className="mt-5" style={{ fontSize: "2rem" }}>Related Items</h3>
            <div className='mt-5 flex'>
                {
                    related.map((e) => (
                        <div>
                            <img src={e.thumbImage} alt="" />
                            {/* <p></p> */}
                            <p style={{ fontSize: "1.625rem", fontWeight: "700" }}>{e.productName}</p>
                            <p style={{ color: "#AFADB5" }}>{e.description}</p>
                            <p style={{ fontSize: "1.625rem", fontWeight: "700" }}>{e.price}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
