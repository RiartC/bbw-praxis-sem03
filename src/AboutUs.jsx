import React from 'react';
import fortnite from "./assets/fortnite.png";

function About() {
    return (
        <div>
            <h1>Über uns</h1>
            <br/>
            <p/><h2>Unsere Philosophie – Mehr als nur ein Boxgym 🥊</h2>
            Bei uns steht mehr als nur der Sport im Fokus – wir schaffen eine Community, die Stärke, Respekt und
            Leidenschaft lebt. Unser Ziel ist es, dich körperlich und mental zu fördern, sodass du die beste Version
            deiner selbst wirst.

            <br/>
            <br/>
            <p/>

            🔸 Disziplin und Durchhaltevermögen als Schlüssel zum Erfolg
            <p/>
            🔸 Respekt und Fairness – im Gym und im Leben
            <p/>
            🔸 Gemeinschaft und Motivation – zusammen wachsen wir über uns hinaus
            <br/>
            <br/>
            <div>
                <h3>Trainer</h3>
            </div>
            <div className="trainer-section">
                <div className="trainer">
                    <img
                        src={fortnite}
                        className="trainer-logo"
                    />
                    <p>Riart (Cus D'Amato)</p>
                </div>
            </div>

            <br/>
            <div>
                <h3>Wettkämpfer</h3>
            </div>
            <div className="wettkämpfer-section">
                <div className="wettkämpfer">
                    <img
                        src={fortnite}
                        className="wettkämpfer-logo"
                    />
                    <p>Berkan (Mike Tyson)</p>
                    <br/>
                    <img
                        src={fortnite}
                        className="wettkämpfer-logo"
                    />
                    <p>Sandro (Rocky)</p>
                </div>
            </div>
            <br/>
            <h3>Sponsoren</h3>
            <div className="sponsor-section">
                <div className="sponsor">
                    <img
                        src={fortnite}
                        alt="Production Logo"
                        className="sponsor-logo"
                    />
                    <p>Alidschi Production</p>
                </div>
            </div>

        </div>
    );
}

export default About;
