import React from 'react'
import AudioCard from '../components/contents/Audiocard'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from './Header'
import Player from './Player'
import styled from 'styled-components'

const contentMain = styled.main`
max-width: 2000px;
min-height: 100vh;
margin: 0 auto;
padding-left: 260px;
`
const Main = (props) => {
    return (
        <contentMain id="main" role="main">
            <HelmetProvider>
                <Helmet
                    titleTemplate="%s | Auda : 글이 내게로 오다"
                    defaultTitle="Auda : 글이 내게로 오다"
                    defer={false}
                >
                    {props.title && <title>{props.title}</title>}
                    <meta name="description" content={props.description} />
                </Helmet>

                <Header />
                <contentMain id="main" role="main">
                    {props.children}
                </contentMain>
                <Player />
            </HelmetProvider>
        </contentMain>
    )
}

export default Main

