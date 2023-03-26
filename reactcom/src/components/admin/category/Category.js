import axios from "axios";
import React, { useState } from "react";  
import { Link } from "react-router-dom";
import swal from "sweetalert";


function Category() {

    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        descrip: '',
        status: '',
        meta_title: '',
        meta_keyword: '',
        meta_descrip: '',
        error_list: [],

    });
    
    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value })
    }

    const submitCategory = (e) => {
        e.preventDefault();

        const data = {
            slug:categoryInput.slug,
            name:categoryInput.name,
            description:categoryInput.descrip,
            status:categoryInput.status,
            meta_title:categoryInput.meta_title,
            meta_keyword:categoryInput.meta_keyword,
            meta_descrip:categoryInput.meta_descrip,
        }

        axios.post('/api/store-category', data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success", res.data.message, 'success');
                document.getElementById('CATEGORY_FORM').reset();
            }
            else if (res.data.status === 400)
            {
                setCategory({...categoryInput, error_list:res.data.errors});
            }
        });

    }

    var display_errors = [];
    if(categoryInput.error_list)
    {
        display_errors = [
            categoryInput.error_list.slug,
            categoryInput.error_list.name,
            categoryInput.error_list.meta_title,
        ]
    }

    return (
        <div className="container-fluid px-4">
                    {
                        display_errors.map( (item) => {
                            return( <p className="mb-1" key={item}>{item}</p> )
                        } )
                    }
            <div className="card mt-4">
                <div className="card-header">
                    <h1 className="mt-4">Add Category 
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">View Category</Link>
                    </h1>

                  

                <form action="" onSubmit={submitCategory} id="CATEGORY_FORM" >
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane card-body border fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" >
                            
                                <div className="form-group mb-3">
                                    <label htmlFor="">Slug</label>
                                    <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
                                    <span>{categoryInput.error_list.slug}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Description</label>
                                    <textarea name="descrip" onChange={handleInput} value={categoryInput.descrip} className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Status</label>
                                    <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status}  />Status 0=shown/1=hidden
                                </div>
                        </div>
                        <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                            <div className="form-group mb-3">
                                <label htmlFor="">Meta title</label>
                                <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Meta Keywords</label>
                                <textarea name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control"></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="">Meta Description</label>
                                <textarea name="meta_descrip" onChange={handleInput} value={categoryInput.meta_descrip} className="form-control"></textarea>
                            </div>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Category;
