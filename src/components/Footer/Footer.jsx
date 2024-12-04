import S from "./footer.module.scss";
import face from "../../assets/facebook.png"
import passarinx from "../../assets/twitte.png"
import youtube from "../../assets/youtube.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/insta.png"
export default function Footer() {
    return (
      <footer>
        <section className={S.Sectioncima}>
          <p>4002-8922</p>
          <nav>
            <img src={face} alt="a" />
            <img src={passarinx} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedin} alt="" />
            <img src={insta} alt="" />
          </nav>
        </section>

        <section className={S.sectionbaixo}>
          <p>
            Layout desenvolvido pela Vai Na Web para fins educativos - 2024
          </p>
        </section>
      </footer>
    );
  }
  