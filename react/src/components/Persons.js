import React, { useState } from 'react';
import styled from 'styled-components'
import Person from './Person.js';

const Persons = (props) => {
    return props.persons.map((x) => {
            return <Person prop={x.name} click={props.click}>
                        {x.age}
                    </Person>
        }    
    );
}

export default Persons;