import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
      <div className="body">
        <Header/>

        <div>
            { children }
        </div>
        
        <Footer/>
      </div>
    );
}
 
export default Layout;