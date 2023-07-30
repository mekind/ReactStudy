import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import { styled } from 'styled-components';
import { BackgroundUrl } from './Store';
import { useRecoilValue } from 'recoil';

import home from '/assets/home/background-home-desktop.jpg';
import home_tablet from '/assets/home/background-home-tablet.jpg'
import home_mobile from '/assets/home/background-home-mobile.jpg'

import destination from '/assets/destination/background-destination-desktop.jpg';
import destination_tablet from '/assets/destination/background-destination-tablet.jpg';
import destination_mobile from '/assets/destination/background-destination-mobile.jpg';

import crew from '/assets/crew/background-crew-desktop.jpg';
import crew_tablet from '/assets/crew/background-crew-tablet.jpg';
import crew_mobile from '/assets/crew/background-crew-mobile.jpg';

import technology from '/assets/technology/background-technology-desktop.jpg';
import technology_tablet from '/assets/technology/background-technology-tablet.jpg';
import technology_mobile from '/assets/technology/background-technology-mobile.jpg';


const backgroudUrls = {
    home : {
        desktop: home,
        tablet: home_tablet,
        mobile: home_mobile
    },
    crew : {
        desktop: crew,
        tablet: crew_tablet,
        mobile: crew_mobile
    },
    destination : {
        desktop: destination,
        tablet: destination_tablet,
        mobile: destination_mobile
    },
    technology : {
        desktop: technology,
        tablet: technology_tablet,
        mobile: technology_mobile
    }
}

const Container = styled.div`
    display: block;
    width: 100vw;
    height: 100vh;
    @media (min-width: 850px) {
        background: url(${(props) => (backgroudUrls[props.url]['desktop'])}) no-repeat center fixed;
        background-size: cover;
    }

    @media (min-width: 400px) and (max-width: 850px) {
        width: 100%;
        height: 100%;
        background: url(${(props) => (backgroudUrls[props.url]['tablet'])}) repeat center fixed;
        background-size: cover;
    }

    @media (max-width: 400px){
        width: 100%;
        height: 100%;
        background: url(${(props) => (backgroudUrls[props.url]['mobile'])}) no-repeat center fixed;
        background-size: cover;
    }
`;

const Layout = () => {
    const backgroundUrl = useRecoilValue(BackgroundUrl);
    return (
        <Container url={backgroundUrl}>
            <Header/>
            <Outlet/>
        </Container>
    )
}



export default Layout
