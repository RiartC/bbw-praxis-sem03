import React from 'react';
import './App.css';
import overview2 from './assets/overview2.mp4'; //

function Home() {
        return (
            <div className="main">
                <h2>Trainiere wie ein Weltmeister</h2>
                <p>Boxtraining für Anfänger bis Profis</p>
                <button className="button">Jetzt Mitglied werden</button>

                <br/>
                Werde die beste Version deiner selbst – im Boxgym Fight Factory! 🥊
                <br/>
                <br/>
                Bist du bereit, deine Komfortzone zu verlassen und dich einer neuen Herausforderung zu stellen? Egal, ob
                du
                fit werden, Stress abbauen oder einfach deine Grenzen neu definieren möchtest – bei uns bist du genau
                richtig!

                <br/>
                Warum unser Boxgym?
                <br/>
                ✅ Erreiche deine Ziele: Unser Training bringt dich körperlich und mental auf ein neues Level. Vom
                Anfänger
                bis zum Profi – wir holen das Beste aus dir heraus!
                <p/>
                ✅ Spaß und Motivation: Vergiss langweilige Fitnessroutinen! Bei uns findest du eine Community, die dich
                unterstützt und dir hilft, jeden Schlag mit Power zu setzen.
                <p/>
                ✅ Erfahrene Trainer: Unsere Coaches stehen dir mit Rat und Tat zur Seite – mit Technik, Strategie und
                Motivation.
                <p/>
                ✅ Gesundheit & Selbstbewusstsein: Boxen stärkt nicht nur deinen Körper, sondern auch deinen Geist. Werde
                stärker, schneller und selbstbewusster!

                <br/>
                <br/>
                👊 Egal, ob du trainieren, kämpfen oder einfach fitter werden willst – unser Boxgym ist dein Ort!

                <div className="video-container">
                    <h3>Erlebe einen Einblick in unser Boxgym</h3>
                    <video
                        controls
                        width="60%"
                        className="overview-video">
                        <source src={overview2} type="video/mp4"/>
                        Dein Browser unterstützt leider keine Videos.
                    </video>
                </div>
            </div>
        );
}

export default Home;
