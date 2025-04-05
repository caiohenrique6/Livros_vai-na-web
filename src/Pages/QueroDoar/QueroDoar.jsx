import livro_logo from "../../assets/Vector.png"
import S from './querodoar.module.scss'
import { useState } from "react"
import axios from "axios"

export default function QueroDoar() {

    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImg = (e) =>{
        setImage_url(e.target.value)
    }

    const envioDados = async() =>{

        const dadosPEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-t1-e296.onrender.com/doar", dadosPEnviar)

    }

    return(
        <section className={S.querodoar}>
            <p className={S.Texte}>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <section className={S.caixa}>
                <div className={S.titulo}>
                    <img src={livro_logo} alt="" />
                    <h2>Informações do Livro</h2>
                </div>
                <section className={S.inputss}>
                    <input className={S.barra} type="text" placeholder="Título" onChange={capturaTitulo} />
                    <input className={S.barra} type="text" placeholder="Categoria" onChange={capturaCategoria}/>
                    <input className={S.barra} type="text" placeholder="Autor" onChange={capturaAutor}/>
                    <input className={S.barra} type="text" placeholder="Link da Imagem" onChange={capturaImg}/>
                </section>
                <section className={S.butao}>
                    <button className={S.butal} type = "button" onClick={envioDados} >
                        Doar
                    </button>
                </section>
            </section>
        </section>

    )

}