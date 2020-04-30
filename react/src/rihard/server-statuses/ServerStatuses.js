import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Entries from './Entries';
import { EntryModel } from './Entry';
import axios from 'axios';

const SeverStatus = (props) => {
    
    const [ state, setState ] = useState({
        entries: [
            new EntryModel("Host", "http://192.168.0.123:13694", false),
            new EntryModel("Webhook", "http://192.168.0.177:5005", false),
            new EntryModel("Bironext", "http://192.168.0.210:19000", true),
            new EntryModel("Rezervacije", "http://192.168.0.177:5151", true),
            new EntryModel("Rihard plugins", "no address yet", true)
        ]
    })

    useEffect(() => {
        console.log('Mounted');
        axios.get('https://webhook.birokrat.si/api/v1/server-status',
                {headers: {"x-dsi-restful":1}})
             .then((response) => {
                console.log(response);
                krneki(response.data)
             });
    }, []);

    const krneki = (data) => {
        let some = [...state.entries];
        some[0].status = data.host;
        some[1].status = data.webhook;
        setState({entries: some});
    };

    return (
            <Entries entries={state.entries}>
            </Entries>
    );

}

export default SeverStatus;