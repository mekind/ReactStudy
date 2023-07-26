import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import { styled } from 'styled-components';
import { BackgroundUrl } from './Store';
import { useRecoilValue } from 'recoil';


const Container = styled.div`
    display: block;
    width: 100vw;
    height: 100vh;
    background: url(${(props) => (props.url)}) no-repeat center fixed;
    background-size: cover;
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
