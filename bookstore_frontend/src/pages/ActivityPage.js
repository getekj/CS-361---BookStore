import React from 'react';
import { useState } from 'react';

function ActivityPage () {

    const [reading_text, setReadingText] = useState('');

    const submitReadingText = async () => {
        console.log(reading_text)
        
        let ws = new WebSocket('ws://localhost:8999');

        ws.onopen = () => {
            // connection opened
            ws.send(reading_text); // send a message
            };
        
        ws.onmessage = e => {
        // a message was received
            console.log(e.data);
            let reading_grade_level = e.data;
            console.log(reading_grade_level)
        };
    
        ws.onerror = e => {
        // an error occurred
        console.log(e.message);
        };
    
        ws.onclose = e => {
        // connection closed
        console.log(e.code, e.reason);
        };
    }


    return (
        <>
        <h1> Hi this is activity page</h1>
        <form onSubmit={(e) => {e.preventDefault();}}>
            <fieldset>
                <legend>Enter Text Below to Analyze The Reading Grade Level</legend>

                <label className='reading_text'>Enter Text</label>
                <input
                    type="text"
                    value={reading_text}
                    onChange={e => setReadingText(e.target.value)}
                    id="reading_text"
                    required
                />

                <label className='submit'>
                    <button
                        type="submit"
                        onClick={submitReadingText}
                        id="submit">
                        Get the Reading Grade Level</button>
                </label>

            </fieldset>
        </form>
        </>
    );

};

export default ActivityPage;