import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewProduct()
{
    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);


    useEffect(() => {

        document.title = "View Product";

        let isMounted = true;
        document.title = "View Product";

        axios.get(`/api/view-product`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setProduct(res.data.products);
                    setLoading(false);
                }
            }
        });

    }, []);

    var display_Productdata = "";
    if(loading)
    {
        return <h4>View Product Loading...</h4>
    }
    else 
    {
        display_Productdata = viewProduct.map( (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.selling_price}</td>
                    <td><img src={`http://127.0.0.1:8000/${item.image}`} alt="Image" width="50px"  /></td>
                    <td>
                        <Link to={`edit-product/${item.id}`} className='btn btn-success btn-sm'>Edit</Link>
                    </td>
                    <td><button type='button' className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>
            )
        })
    }

    // var display_Productdata = "";
    // if(loading)
    // {
    //     return <h4>View Products Loading...</h4>
    // }
    // else
    // {
    //     display_Productdata = viewProduct.map( (item) => {
            
    //         return (
    //             <tr key={item.id}>
    //                 <td>{item.id}</td>
    //                 <td>{item.category_id}</td>
    //                 <td>{item.name}</td>
    //                 <td>{item.selling_price}</td>
    //                 <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt={item.name} /></td>
    //                 <td>
    //                     <Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
    //                 </td>
    //                 <td>{item.status === 0 ? 'Visible':'Hidden'}</td>
    //             </tr>
    //         )
    //     });
    // }



    return (
        <div className="container px-4 mt-3">
        <div className="card">
            <div className="card-header">
                <h4>View Product 
                    <Link to="/admin/add-product" className="btn btn-primary btn-sm float-end">Add Product</Link>
                </h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr >
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Product Name</th>
                                <th>Selling Price</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {display_Productdata}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ViewProduct;