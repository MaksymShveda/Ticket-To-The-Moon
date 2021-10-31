import "./header.css"

function Header(){
    return (
        <header>
            <div>
                <button id="menu-button">
                    <img src="./images/hamburger-menu.svg" alt="Menu"/>
                </button>
                <div id="logo">
                    <img src="./images/logo.png" alt="Ticket To The Moon"/>
                    <h1>Ticket To The Moon</h1>
                </div>
            </div>
            <div id="log-header">
                    <button id="sign-up">Sign Up</button>
                    <button id="log-in">Log In</button>
                </div>
        </header>
    )

    
}


export default Header