import "./Navbar.css"

export default function Navbar(params) {
    return (
        <div className="navbar">
            <div className="links">
                <div className="spotify">
                    Spotify
                </div>
                <div className="other links">
                    <div id="premium">
                        Premium
                    </div>
                    <div id="support">
                        Support
                    </div>
                    <div id="download">
                        Download
                    </div>
                </div>
                <div className="auth">
                    <div id="signup">
                        Sign up
                    </div>
                    <div id="login">
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )
};
