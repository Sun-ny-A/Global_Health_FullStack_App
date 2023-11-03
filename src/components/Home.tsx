import { NavLink } from 'react-router-dom';
import video from "../assets/1089742305-preview.mp4";

export default function Home() {

    

    return (
        <div>
            <div className="home-video-container">
                <div className="overlay"></div>
                <video src={video} autoPlay loop muted />
            </div>
            <div className="heading-content">
                <h1 className="home-heading">Welcome, sign in or register to get started!</h1>
            </div>
            <div className="home-content">
                <div className="dropdown">
                    <button>
                        <NavLink className="custom-link" to="/signin">Sign In</NavLink>
                    </button>
                </div>
                <div>
                    <button>
                        <NavLink className="custom-link" to="/register">Register</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
}