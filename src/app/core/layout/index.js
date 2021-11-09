import './index.css'
import Header from './header/index';



const Layout = ({ children }) => {
    return (
        <div id='layout'>
            <Header/>
            <main className='main'>{children}</main>
        </div>
    );
}

export default Layout;