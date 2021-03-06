import React from 'react'

import styled from 'styled-components'
import banner_img1 from '../../img/Home/banner_img1.svg'
import banner_img2 from '../../img/Home/banner_img2.svg'
import banner_img3 from '../../img/Home/banner_img3.svg'

import { ButtonWrapper, StyledDownloadButton, StyledTextButton} from '../GlobalReusableStyles'


const Banner = () => {

    return (
        <StyledBanner>
            <Background />
            <StyledTexts>
                <h1>Your place to talk</h1>
                <p>Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.</p>
                <ButtonWrapper>
                    <StyledDownloadButton>
                        <ion-icon name="download-outline" />
                        Download for Windows
                    </StyledDownloadButton>
                    <StyledTextButton>Open Discord in your Browser</StyledTextButton>
                </ButtonWrapper>
            </StyledTexts>
            <BannerImage1 src={banner_img1} alt=""/>
            <BannerImage2 src={banner_img2} alt=""/>
            <BannerImage3 src={banner_img3} alt=""/>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    min-height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    img {
        position: absolute;
        bottom: 0;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 620px;
    background: linear-gradient(to bottom, #2A5EE8, #638BFB);
    position: absolute;
    top: -80px;
    z-index: -3;
`

const StyledTexts = styled.div`
    text-align: center;
    width: 800px;
    color: #fff;

    h1 {
        font-size: 50px;
        margin-bottom: 3rem;
    }
    
    p {
        font-size: 18px;
        line-height: 2rem;
        margin-bottom: 2rem;
    }
`

const BannerImage1 = styled.img`
    margin-left: -1670px;
    z-index: -1;
`

const BannerImage2 = styled.img`
    margin-right: -1670px;
    z-index: -1;
`

const BannerImage3 = styled.img`
    margin-right: -120px;
    z-index: -2;
`

export default Banner