import React from 'react';
import fortnite from "./assets/fortnite.png";
import trainer from "./assets/traienr.jpg";
import berkan from "./assets/berkan.jpg";
import nando from "./assets/nando.jpg";
import lorenz from "./assets/lorenz.jpg";


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
                        src={trainer}
                        className="trainer-logo"
                    />
                    <p>Riart</p>
                </div>
            </div>

            <br/>
            <div>
                <h3>Wettkämpfer</h3>
            </div>
            <div className="wettkämpfer-section">
                <div className="wettkämpfer">
                    <img
                        src={berkan}
                        className="wettkämpfer-logo"
                    />
                    <p>Berkan (Mike Tyson)</p>
                    50-7-0 (44 KOs)
                    <br/>
                    <img
                        src={nando}
                        className="wettkämpfer-logo"
                    />
                    <p>Sandro (Rocky)</p>
                    57-23-1 (54 KOs)
                    <br/>
                    <img
                        src={lorenz}
                        className="wettkämpfer-logo"
                    />
                    <p>Lorenz (Bruce Lee)</p>
                    512-0.5-0 (512 KOs)
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
