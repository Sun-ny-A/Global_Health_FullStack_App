import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import video from "../assets/1089742305-preview.mp4";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Home() {
    const [signInAnchorEl, setSignInAnchorEl] = useState<null | HTMLElement>(null);
    const [registerAnchorEl, setRegisterAnchorEl] = useState<null | HTMLElement>(null);

    const handleSignInClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSignInAnchorEl(event.currentTarget);
    };

    const handleRegisterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setRegisterAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (type: string) => {
        console.log(`Selected: ${type}`);
        setSignInAnchorEl(null);
        setRegisterAnchorEl(null);
    };

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
                <Button
                    variant="outlined"
                    onClick={handleSignInClick}
                    style={{ marginRight: "20px" }}
                >
                    Sign In
                </Button>
                <Button variant="outlined" onClick={handleRegisterClick}>
                    Register
                </Button>
                <Menu
                    anchorEl={signInAnchorEl}
                    open={Boolean(signInAnchorEl)}
                    onClose={() => setSignInAnchorEl(null)}
                >
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Doctor")}>
                        Doctor
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Volunteer")}>
                        <NavLink to="/signin" className="nav-link">Volunteer</NavLink>
                    </MenuItem>
                </Menu>
                <Menu
                    anchorEl={registerAnchorEl}
                    open={Boolean(registerAnchorEl)}
                    onClose={() => setRegisterAnchorEl(null)}
                >
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Doctor")}>
                        Doctor
                    </MenuItem>
                    <MenuItem className="menu-item" onClick={() => handleMenuItemClick("Volunteer")}>
                        <NavLink to="/register" className="nav-link">Volunteer</NavLink>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}


