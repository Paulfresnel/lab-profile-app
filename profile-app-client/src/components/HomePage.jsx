import { Link } from "react-router-dom"

function HomePage(){
    return(
        <div className="flex centered">
            <div className="margin-l">
                <h1 className="t-align-l">IronProfile</h1>
                <p>Sign up today to receive the latest news about the crypto industry</p>
            </div>
            <div className="buttons">
            <Link to={"/signup"}>
                <button className="home-button">Sign Up</button>
                </Link>
                <Link to={"/login"}>
                <button className="home-button">Log In</button>
                </Link>
            </div>
            
        </div>
    )
}
export default HomePage