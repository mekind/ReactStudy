import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import '../css/Layout.css'

const Layout = () => {

    return (
        <div className='layout-container'>
            <Header/>
            <main>
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout
