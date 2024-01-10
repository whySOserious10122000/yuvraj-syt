import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from 'react-bootstrap';

function Model(props) {



    return (
        <Container>
        <div className='cmn'>
            <select style={{border:"none"}}>
                <option value="2">1</option>
                <option value="1">2</option>
                <option value="3">3</option>
            </select>
        </div>
        </Container>
    );
}



export default Model;