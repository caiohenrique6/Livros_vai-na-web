import livro from "../../assets/livrored.png"
import S from './livrosdoados.module.scss'

export default function LivrosDoados() {
    return(
        <section className={S.livrosdoados}>
            <h2 className={S.titulo2}>Livros Doados</h2>
            <section className={S.livros}>
                <section className={S.container}>
                    <img src={livro} alt="" />
                    <section className={S.textos}>
                        <p>O protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </section>
                </section>
            </section>
        </section>

    )

}
