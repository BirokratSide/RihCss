import React, { useState } from 'react';
import styled from 'styled-components'

const StyledPerson = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    border-radius: 50%;
    text-align: center;

    &:hover {
        background-color: ${props => props.alt ? 'lightgreen' : 'darkgreen'};
        color: ${props => props.alt ? 'salmon' : 'white'};
    }
`
const Person = (props) => {
    return <StyledPerson 
            alt={props.children === 29} 
            onClick={props.click}>
                I'm a person! {props.prop} {props.children}
            </StyledPerson>;
}

export default Person;