import React from "react";
import { Route } from "react-router-dom";
import FrontendLayout from './layouts/frontend/FrontendLayout';


function PublicRouter({...rest}) {
    return (
        <Route {...rest} render={ (props) => <FrontendLayout {...props} /> } />
    )
}

export default PublicRouter;