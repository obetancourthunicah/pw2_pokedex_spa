import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

import './Page.css';
export default ({ children }) => {
    return (
        <section className="page">
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </section>
    )
}