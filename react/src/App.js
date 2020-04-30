import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Persons from './components/Persons';
import Cockpit from './components/Cockpit';
import ServerStatuses from './rihard/server-statuses/ServerStatuses';
import CustomerConfig from './rihard/CustomerConfig';
import HostConfig from './rihard/HostConfig';
import CustomerSearchBar from './rihard/CustomerSearchBar';
import axios from 'axios';

const Wrapper = styled.div`
    width: 75%;
    margin: 15px auto;
    padding: 20px;
    border: 1px solid green;
    border-radius: 1em;
    box-shadow: 2px 2px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CustomerConfigWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
`

const app = (props) => {
    
    const [ personsState, setPersonsFunction ] = useState({
        persons: [
            { name: 'Max', age: 28},
            { name: 'Manu', age: 29},
            { name: 'Stephanie', age: 29},
            { name: 'Kristijan', age: 26}
        ],
        wantPersons: true,
    });

    const [ serverStatusState, setServerStatusFunction ] = useState({
        states: []
    });
    
    const [ appConfigState, setAppConfigFunction ] = useState({
        appConfig: {}
    });

    // #region [react events]
    useEffect(() => {
        console.log('Mounted');
        /*axios.get('https://webhook.birokrat.si/api/v1/server-status',
                {headers: {"x-dsi-restful":1}})
             .then((response) => {
                console.log(response);
                setServerStatusFunction({states: response.data});
             });
        axios.get('https://webhook.birokrat.si/api/v1/app-config',
             {headers: {"x-dsi-restful":1}})
             .then((response) => {
                console.log(response);
                setAppConfigFunction({appConfig: response.data});
             });
        axios.get('https://webhook.birokrat.si/api/v1/customer-config?taxnum=16010264',
            {headers: {"x-dsi-restful":1}})
            .then((response) => {
            console.log(response);
            });*/
    }, []);
    // #endregion

    // #region [events]
    const switchNameHandler = () => {
        console.log('The button was clicked');
        let some = [...personsState.persons];
        some.push({ name: 'Djubre', age: 35});
        setPersonsFunction({persons: some, wantPersons: !personsState.wantPersons}); 
    }
    // #endregion

    let persons = "";
    if (personsState.wantPersons) {
        persons = (<Persons persons={personsState.persons} click={switchNameHandler}></Persons>);
    }

    return ( 
        <Wrapper>
            <ServerStatuses></ServerStatuses>
            <HostConfig></HostConfig>
            <CustomerSearchBar></CustomerSearchBar>
            <CustomerConfigWrapper>
                <CustomerConfig></CustomerConfig>
                <CustomerConfig></CustomerConfig>
            </CustomerConfigWrapper>
        </Wrapper>
    );
    
}

export default app;