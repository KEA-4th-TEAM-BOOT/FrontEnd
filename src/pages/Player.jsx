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
    left: 0;
    bottom : 0;
    background-color: var(--black100);
    border-top: 1px solid (var--black100);
    padding: 20px;
    width: calc(100% - 260px);
    color: var(--black400);
    font-size: 0.8rem;
`;
