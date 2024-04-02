import React from 'react'
import styled from 'styled-components'

const Menu = styled.header`
position: fixed;
left: 0;
top: 0;
width: 260px;
height: 90%;
overflow-y: auto;
z-index: 10000;
border-right: 1px solid var(--black100);
`

const Header = () => {
    return (
        <Menu>Header</Menu>
    )
}

export default Header



