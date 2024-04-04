import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

import './Page.css';
export default ({ children, title = "Title" }) => {
    return (
        <section className="page">
            <Header title={title}></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </section>
    )
}