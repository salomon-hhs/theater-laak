import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {
    return <div className="flex flex-col min-h-screen bg-darkest text-white">
        <Header/>
        <div className="x-responsive flex-grow py-16 px-4">
            {children}
        </div>
        <Footer/>
    </div>
}

export default Layout;
