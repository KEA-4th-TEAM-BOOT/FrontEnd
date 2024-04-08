import React from 'react'
import styled from 'styled-components'

const Player = () => {
  return (
    <FootPlayer>Player</FootPlayer>
  )
}

export default Player

const FootPlayer = styled.div
`
    text-align: center;
    position : fixed;
    left: 0;
    width: 100%;
    height: 80px;
    bottom : 0;
    background-color: black;
    padding: 20px;
    color: white;
    font-size: 0.8rem;
    z-index:10000;
`;
