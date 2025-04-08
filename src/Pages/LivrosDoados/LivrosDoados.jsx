import livro from "../../assets/livrored.png"
import S from './livrosdoados.module.scss'
import { useState, useEffect } from "react"
import axios from "axios"

export default function LivrosDoados() {

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const resposta = await axios.get("https://api-t1-e296.onrender.com/livros")
        setLivros(resposta.data)
    }
    
    useEffect(() => {
        getLivros()
    }, [])

    return(
        <section className={S.livrosdoados}>
            <h2 className={S.titulo2}>Livros Doados</h2>
            <section className={S.livros}>

                {livros.map((item) => (
                    <section className={S.container}>
                        <h3>{item.titulo}</h3>
                        <img src={item.image_url} alt="" />
                        <p>{item.autor}</p>
                        <p>{item.categoria}</p>
                    </section>

                ))}
            </section>
        </section>
    )

}
