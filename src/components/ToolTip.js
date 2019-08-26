import React, {useState} from 'react';

const ToolTip = () => {
    const [menu, changeMenu] = useState("");
    const [subMenu, setSubMenu] = useState(" is-not-active");
    const [userMenu, setUserMenu] = useState(" is-not-active");
    const attachTheClass = () => {
      const _tempMenu = menu === "" ? " is-active" : "";
      changeMenu(_tempMenu);
    };

    const changeSubMenu = () => {
        const _tempSubMenu = subMenu === " is-not-active" ? " is-dropdown-active" : " is-not-active";
        setSubMenu(_tempSubMenu);
     }

     const changeUserMenu = () => {
         const _tempUserMenu = userMenu === " is-not-active" ? " is-dropdown-active" : " is-not-active";
         setUserMenu(_tempUserMenu);
     }

    return(
        <nav className="navbar is-konfhub-navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://konfhub.com/images/logo.svg" width="112" height="28" />
            </a>
        
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={e => {attachTheClass(e)}}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" className={"navbar-menu" + menu}>
            <div className="navbar-start">
                <a className="navbar-item">
                Home
                </a>
        
                <a className="navbar-item">
                Documentation
                </a>
        
                <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" onClick={e => {changeSubMenu(e)}} >
                    More
                </a>
        
                <div className={"navbar-dropdown"+subMenu}>
                    <a className="navbar-item">
                    About
                    </a>
                    <a className="navbar-item">
                    Jobs
                    </a>
                    <a className="navbar-item">
                    Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                    Report an issue
                    </a>
                </div>
                </div>
            </div>
        
            <div className="navbar-end">
                <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-primary">
                    <strong>Sign up/Login</strong>
                    </a>
                </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" onClick={e => {changeUserMenu(e)}} >
                    More
                </a>
        
                <div className={"navbar-dropdown"+userMenu}>
                    <a className="navbar-item">
                    About
                    </a>
                    <a className="navbar-item">
                    Jobs
                    </a>
                    <a className="navbar-item">
                    Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                    Report an issue
                    </a>
                </div>
                </div>
            </div>
            </div>
        </nav>
    )
};
const styles = {
    isRoundedBorder:{
        display: "flex",
        borderRadius:50,
        verticalAlign:"bottom",
        alignSelf: "flex-end",
        bottom:"0px"
    }
}
export default ToolTip;