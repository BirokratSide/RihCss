import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Persons from './components/Persons';
import Cockpit from './components/Cockpit';
import ServerStatuses from './rihard/server-statuses/ServerStatuses';
import CustomerConfig from './rihard/CustomerConfig';
import HostConfig from './rihard/HostConfig';
import CustomerSearchBar from './rihard/CustomerSearchBar';

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
    })

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

//<Cockpit click={switchNameHandler}></Cockpit>
//{persons}