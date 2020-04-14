import React, { useState } from 'react';


const Cockpit = (props) => {
    return (
        <div>
            <h1>
                Coorach
            </h1>
            <button onClick={props.click}>Switch name</button>
        </div>
    );
}

export default Cockpit;