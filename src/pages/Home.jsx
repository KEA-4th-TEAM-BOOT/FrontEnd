import React from 'react'
import Main from './Main'
import Banner from '../components/contents/Banner'
import Feed from '../components/contents/Feed'
import Trend from '../components/contents/Trend'
import Footer from './Footer'

const Home = () => {
  return (
    <Main 
            title = "Auda : 글이 내게로 오다"
            description="내 목소리로 들려주는 글 : Auda">
            
            <Banner
            imageUrl= "https://t1.kakaocdn.net/friends/prod/main_tab/home/home_20201106164745_kr.jpg?type=thumb&opt=R329x247@2xa"
            contentTitle= "카카오"
            contentWriter= "Suzuki"
              />
            <Feed />
            <Trend />
            <Footer />

        </Main>
  )
}

export default Home