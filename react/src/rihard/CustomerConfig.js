import React, { useState } from 'react';
import styled from 'styled-components';

class CustomerParamConfigModel {
    constructor(aktivno, placnik, stevec, datum_zadnjega_placila, znesek, znesek_pred_zad_placilom) {
      this.aktivno = aktivno;
      this.placnik = placnik;
      this.stevec = stevec;
      this.datum_zadnjega_placila = datum_zadnjega_placila;
      this.znesek = znesek;
      this.znesek_pred_zad_placilom = znesek_pred_zad_placilom;
    }
}


const CustomerParamConfig = (props) => {

    let arr = [
        'Aktivno (RIH)',
        'Placnik (RIHP)',
        'Stevec (RIHC)',
        'Datum zadnjega placila (RIHD)',
        'Znesek (RIHK)',
        'Znesek pred zadnjim placilom (RIHZ)'        
    ];

    let all = arr.map((x) => 
        <ElementWrapper>
            <Name>
                <p>{x}</p>
            </Name>
            <Input type="text" />
            <UpdateButton>Update</UpdateButton>
        </ElementWrapper>
    );

    return (
        <Wrapper>{all}</Wrapper>
    );
}

// #region [auxiliary]
const UpdateButton = (props) => {
    return (
        <UpdateButtonOuter>
            <UpdateButtonInner></UpdateButtonInner>
        </UpdateButtonOuter>
    )
}
// #endregion

// #region [css]
const Wrapper = styled.div`
    padding: 20px;
    border: 1px solid lightblue;
    box-shadow: 1px 1px 1px 1px lavender;
    border-radius: 0.5em;
    margin: 15px;
    position: relative;
`

const ElementWrapper = styled.div`
    display: flex;
`

const Name = styled.div`
    width: 40%;
    height: 2rem;
    margin: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
`

const Input = styled.input`
    width: 40%;
    height: 1.8rem;
    margin: 5px;
`

const UpdateButtonOuter = styled.div`
    width: 20%;
    height: 2rem;
    margin: 5px;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`

const UpdateButtonInner = styled.button`
    width: 3em;
    height: 3em;
    margin: 5px;
    border-radius: 50%;
    outline: none;
`
// #endregion

export default CustomerParamConfig;