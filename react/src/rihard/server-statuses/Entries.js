import React, { useState } from 'react';
import styled from 'styled-components';
import {Entry, EntryModel} from './Entry';

const Entries = (props) => {
    
    const OuterContainer = styled.div`
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const some = props.entries.map(
        (x) => (<Entry model={x}></Entry>)
    );
    
    return (
        <OuterContainer>
            {some}
        </OuterContainer>
    )
    
};

export default Entries;