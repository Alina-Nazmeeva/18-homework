import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const Welcome = styled.div`
    margin: auto;    
    width: fit-content;
    color: #90CAF9;
    font-weight: 900;
    font-size: 28px;
    animation: 1s ${bounceAnimation};
`;

export default function WelcomePage(){
    return(
        <Welcome>Welcome</Welcome>
    )
}