import livro_logo from "../../assets/Vector.png"

import S from './querodoar.module.scss'

export default function QueroDoar() {
    return(
        <section className={S.querodoar}>
            <p className={S.Texte}>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <section className={S.caixa}>
                <div className={S.titulo}>
                    <img src={livro_logo} alt="" />
                    <h2>Informações do Livro</h2>
                </div>
                <section className={S.inputss}>
                    <input className={S.barra} type="text" placeholder="Título" />
                    <input className={S.barra} type="text" placeholder="Categoria" />
                    <input className={S.barra} type="text" placeholder="Autor" />
                    <input className={S.barra} type="text" placeholder="Link da Imagem" />
                </section>
                <section className={S.butao}>
                    <button className={S.butal}>
                        Doar
                    </button>
                </section>
            </section>
        </section>

    )

}