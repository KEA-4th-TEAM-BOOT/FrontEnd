import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <menu>Header</menu>
    )
}

export default Header

const menu = styled.header`
position: fixed;
left: 0;
top: 0;
width: 260px;
height: 100%;
overflow-y: auto;
z-index: 10000;
border-right: 1px solid var(--black100);

`

