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
    width: 100%;
    height: 80px;
    bottom : 0;
    background-color: var(--black100);
    padding: 20px;
    color: var(--black400);
    font-size: 0.8rem;
`;
