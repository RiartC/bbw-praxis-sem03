import React, { useState } from 'react';
import hantel from './assets/hantel.png';
import footwork from './assets/footwork.png';
import technik from './assets/technik.png';

function TrainingCard({ title, image, description }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="training-card">
            <img src={image} alt={title} className="training-card-image" />
            <h2>{title}</h2>
            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Weniger anzeigen' : 'Details anzeigen'}
            </button>
            {showDetails && <div className="training-card-details">{description}</div>}
        </div>
    );
}

function Training() {
    return (
        <div className="training-container">
            <h1>Training</h1>
            <div className="training-grid">
                <TrainingCard
                    title="Krafttraining"
                    image={hantel}
                    description={
                        <>
                            <p>
                                Unser Krafttraining ist speziell darauf ausgelegt, dich stärker, explosiver und
                                widerstandsfähiger zu machen. Mit funktionellen Übungen, freien Gewichten und modernem
                                Equipment trainierst du gezielt die Muskulatur, die du fürs Boxen und einen
                                athletischen Körper brauchst.
                            </p>
                            <br/>
                            <ul>
                                <ul>🔸 Steigere deine Schlagkraft</ul>
                                <ul>🔸 Verbessere deine Stabilität und Explosivität</ul>
                                <ul>🔸 Verletzungsprävention durch gezielte Stärkung</ul>
                            </ul>
                        </>
                    }
                />
                <TrainingCard
                    title="Technik"
                    image={technik}
                    description={
                        <>
                            <p>
                                Im Techniktraining perfektionierst du deine Bewegungen, damit jeder Schlag sitzt. Wir
                                legen Wert auf saubere Ausführung, Schnelligkeit und Präzision. Ob Grundstellungen,
                                Schlagkombinationen oder Fußarbeit – hier lernst du alles, was dich im Ring
                                unschlagbar macht.
                            </p>
                            <ul>
                                <ul>🔸 Verbessere deine Schlagtechnik und Genauigkeit</ul>
                                <ul>🔸 Optimiere deine Defensive und Reaktionsfähigkeit</ul>
                                <ul>🔸 Erlerne Strategien und Taktiken für den Kampf</ul>
                            </ul>
                        </>
                    }
                />
                <TrainingCard
                    title="Footwork/Sparring"
                    image={footwork}
                    description={
                        <>
                            <p>
                                Beim Footwork-Training lernst du, dich effizient und explosiv im Ring zu bewegen. Gute
                                Fußarbeit ist der Schlüssel zu präzisen Angriffen und einer soliden Verteidigung.
                            </p>
                            <ul>
                                <ul>🔸 Perfektioniere deine Balance und Stabilität</ul>
                                <ul>🔸 Lerne schnelle, taktische Bewegungen</ul>
                                <ul>🔸 Gewinne Kontrolle über den Ring</ul>
                            </ul>
                            <p>
                                Im Sparring bringst du alles Gelernte in die Praxis. Hier geht es nicht nur um Schläge,
                                sondern um Strategie, Timing und mentale Stärke.
                            </p>
                            <ul>
                                <ul>🔸 Verbessere deine Reaktion und Entscheidungsfähigkeit</ul>
                                <ul>🔸 Trainiere unter realistischen Bedingungen</ul>
                                <ul>🔸 Lerne, Drucksituationen zu meistern</ul>
                            </ul>
                        </>
                    }
                />
            </div>
        </div>
    );
}

export default Training;