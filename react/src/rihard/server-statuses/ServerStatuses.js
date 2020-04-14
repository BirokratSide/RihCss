import React, { useState } from 'react';
import styled from 'styled-components';
import Entries from './Entries';
import { EntryModel } from './Entry';

const SeverStatus = (props) => {
    
    const [ state, setState ] = useState({
        entries: [
            new EntryModel("Host", "http://192.168.0.123:13694"),
            new EntryModel("Webhook", "http://192.168.0.177:5005")
        ]
    })

    return (
            <Entries entries={state.entries}>
            </Entries>
    );

}

export default SeverStatus;