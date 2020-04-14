import React, { useState } from 'react';
import styled from 'styled-components';


const HostConfig = (props) => {
    
    let hostConfigParams = [
        {name: 'host database', val: 'biro84046597'},
        {name: 'partners host CY', val: 'I14G'},
        {name: 'CRM Stranke opcije host CY ', val: 'KRATEK'},
    ]

    const html = hostConfigParams.map((x) => 
        (<HostConfigEntry name={x.name} val={x.val}></HostConfigEntry>)
    );

    return (
        <div>{html}</div>
    );
}

const HostConfigEntry = (props) => {
    return (
        <Record>
            <PropName name={props.name}></PropName>
            <PropValInput val={props.val}></PropValInput>
        </Record>
    );
}


const Record = styled.div`
    width: 35vw;
    margin: 10px;
    display: flex;
    flex-wrap: nowrap;
`




const P = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
`

const PInner = styled.p`
    margin: 2px;
`

const PropName = (props) => {
    return (
        <P>
            <PInner>{props.name}</PInner>
        </P>
    );
}




const Input = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const InputInner = styled.input`
    height: 1.5em;
    margin: 5px;
    font-size: 0.8em;
`
const PropValInput = (props) => {
    return (
        <Input><InputInner type="text" value={props.val}></InputInner></Input>
    );
}

export default HostConfig;