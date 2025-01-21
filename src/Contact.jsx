import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Kontakt</h1>
            <p>Hier kannst du uns kontaktieren:</p>
            <form>
                <label>Name:</label>
                <input type="text" placeholder="Dein Name" />
                <label>Email:</label>
                <input type="email" placeholder="Deine Email" />
                <label>Nachricht:</label>
                <textarea placeholder="Deine Nachricht"></textarea>
                <button type="submit">Absenden</button>
            </form>
            <br/>
            <br/>

            <div>
                <h1>Unser Standort</h1>
                <br/>
                <h3>Wir befinden uns in Winterthur:</h3>
                Fight Factory Winterthur
                <br/>
                Pionierpark 7
                <br/>
                8400 Winterthur
                <br/>
                <br/>
                <p>So findest du uns:</p>

                <p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.569680934641!2d8.720144500000002!3d47.49829580000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a998ed18f0e07%3A0x64c0347ed051241a!2sGemeinschaftspraxis%20PIONIERPARK!5e0!3m2!1sde!2sch!4v1737400644964!5m2!1sde!2sch"
                        width="600"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </p>
            </div>
        </div>

    );
}

export default Contact;
