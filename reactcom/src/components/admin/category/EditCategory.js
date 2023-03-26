import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";


function EditCategory(props) 
{
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [categoryInput, setCategory] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {

        const category_id = props.match.params.id;
        axios.get(`/api/edit-category/${category_id}`).then(res=> {
            if(res.data.status === 200)
            {
                setCategory(res.data.category);
            }
            else if(res.data.status === 404)
            {
                swal("Error", res.data.message, 'error');
                history.push('/admin/view-category');
            }
            setLoading(false);
        });
       
    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value });
    }

    const updateCategory = (e) => {
        e.preventDefault();

        const category_id = props.match.params.id;
        const data = categoryInput;
        axios.put(`/api/update-category/${category_id}`, data).then(res => {
            if(res.data.status === 200)
            {
                swal("Success", res.data.message, 'success');
                setError([]);
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","", 'error');
                setError(res.data.errors);
            }
            else if(res.data.status === 404)
            {
                swal("Error", res.data.message, 'error');
                history.push('/admin/view-category');
            }
        });

    }

    if(loading)
    {
        return <h4>Loading Edit Category...</h4>
    }

    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h1 className="mt-4">Edit Category 
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">Back</Link>
                    </h1>

                  

                <form onSubmit={updateCategory} >
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
                                    <small className="text-danger">{error.slug}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                                    <small className="text-danger">{error.name}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="">Description</label>
                                    <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
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
                                <small className="text-danger">{error.meta_title}</small>
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
                    <button type="submit" className="btn btn-primary px-4 float-end">Update</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default EditCategory;
