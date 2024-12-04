import Inicio from "../../Pages/Inicio/inicio.jsx"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar.jsx"
import LivrosDoados from "../../Pages/LivrosDoados/LivrosDoados.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import livrocolorido from "../../assets/livro_color.png"
import procura from "../../assets/search.png"
import S from "./header.module.scss"

export default function Header() {
    return(
        <BrowserRouter>
            <header className={S.HeaderBox}>
                <div className={S.DivBox}>
                    <img src={livrocolorido} alt="imagem" />
                    <h2>Livros Vai na Web</h2>
                </div>
                 <nav>
                    <ul className={S.textos}>
                        <li><Link className={S.link} to="/">Inicio</Link></li>
                        <li><Link className={S.link}  to = "/Livros Doados">Livros Doados</Link></li>
                        <li><Link className={S.link}    to = "/Quero Doar">Quero Doar</Link></li>
                    </ul>
                </nav> 
                <div className={S.quadrado}>
                    <section className={S.barradeprocura}>
                        <input type="search" placeholder="O que você procura?" />
                        <button><img src={procura} alt="" /></button>
                    </section>
                </div>
            </header>
            <Routes>
                <Route path = "/" element = {<Inicio />} />
                <Route path = "/Livros Doados" element = {<LivrosDoados />} />
                <Route path = "/Quero Doar" element = {<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    );

}