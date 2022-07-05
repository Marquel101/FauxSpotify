import "./Splash.css"

export default function Splash(params) {
    return (
        <div className="splash">
            <div className="intro">
                <h1 className="heder">Listening is everything</h1>
                <div className="support">
                <p>Millions of songs and podcasts. No credit card needed.</p>
                </div>
                <div className="button">
                    <a>GET SPOTIFY FREE</a>
                </div>
            </div>
            <div className="dot" id="dot1"></div>
            <div className="dot"id="dot2"></div>
            <div className="dot"id="dot3"></div>
            <div className="dot"id="dot4"></div>
        </div>
    )
};
