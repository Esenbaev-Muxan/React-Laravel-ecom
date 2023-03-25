import React from "react";  


function Category() {
    return (
        <div className="container-fluid px-4">
            <h1 className="mt-4">Add Category</h1>
        <form action="" onSubmit={submitCategory}>
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
                        <input type="text" name="meta_title" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Meta Keywords</label>
                        <textarea name="meta_keyword" className="form-control"></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Meta Description</label>
                        <textarea name="meta_descrip" className="form-control"></textarea>
                    </div>
                </div>

            </div>
            <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
        </form>
        </div>
    )
}

export default Category;
