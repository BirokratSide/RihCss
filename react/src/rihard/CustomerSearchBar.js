import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`

const AlignLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
    margin: 2em;
    padding: 1em;

    &:hover {
        background-color: teal;
    }
`

const AlignRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin: 2em;
    padding: 1em;
`

const CustomerSearchBar = (props) => {
    return (
        <Wrapper>
            <AlignLeft>
                <p>davcna stevilka</p>
                <input type="text" value="some" />
                <button>Isci</button>
            </AlignLeft>
            <AlignRight>
                <button>Vnesi privzete nastavitve</button>
            </AlignRight>
        </Wrapper>
    );
}

export default CustomerSearchBar;