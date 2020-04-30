import React, { useState } from 'react';
import styled from 'styled-components'

class EntryModel {
    constructor(name, address, status) {
        this.name = name; // string
        this.address = address; // string
        this.status = status; // boolean
    }
}

const Entry = (props) => {

    return (
        <OuterContainer>
            <Name>{props.model.name} online:</Name>
            
            <SignalButtonOuter>
                <SignalButtonInner status={props.model.status}></SignalButtonInner>
            </SignalButtonOuter>

            <Address>address:</Address>

            <AddressInput type="text" class="address__input" value={props.model.address} />

        </OuterContainer>
    );

}

// #region [css]
const OuterContainer = styled.div`
    width: 50vw;
    margin: 5px;
    padding: 10px;
    border: 1px solid lightblue;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px lavender;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`

const Name = styled.p`
    width: 20%;
    text-align: right;
    margin: 10px;
`

const SignalButtonOuter = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`

const SignalButtonInner = styled.div`
    width: 40px;
    height: 40px;
    background: ${props => props.status ? "lightgreen" : "red"};
    border-radius: 50%;
    border: 2px solid black;
    margin-right: 10px;
    margin-left: 10px;
`

const Address = styled.p`
    width: 20%;
`

const AddressInput = styled.input`
    margin: 15px;
    width: 15rem;
    height: 1.2rem;
    font-size: 0.8rem;
    width: 30%;
`

const UpdateButtonOuter = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
`

const UpdateButtonInner = styled.button`
    background: lightgreen;
    border-radius: 50%;
    border: 2px solid black;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
    box-shadow: 2px 1px 1px teal;
    outline: none;

    &:hover,
    &:active {
        background: #cc0011;
        cursor: pointer;
        color: white;
        font-weight: bold;
    }
`
// #endregion

export {
    Entry,
    EntryModel,
}