import React from "react";
import {Link} from "react-router-dom"

const TestRouter = () => { //https://www.youtube.com/watch?v=pp2ZmjTBB5M&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=10
    return(
        <div className="container">
            <Link to="/link" className="btn btn-dark">Probar API!</Link>
            <Link to="/age2" className="btn btn-dark">Age2!!!</Link>
            {/* <NavLink to="/link" className="btn btn-dark" activeClassName="active">Probame!</NavLink> */}
            <Link to="/"  className="btn btn-dark">Home!!!!</Link>
        </div>
    )
}
export default TestRouter