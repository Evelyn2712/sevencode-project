import style from "../Conteudo1/conteudo1.module.css";
import img1 from "../../assets/img/img1.png";
import ButtonLine from "../buttonLine/buttonLine";
import Button from "../button/button";

function Conteudo1() {
  return (
    <section className={style.conteudo1}>
      <div className={style.conteudo1Wrapper}>
        <div className={style.conteudo1Content}>
          <h2>Poderoso para Devs. Rápido e fácil uso.</h2>
          <p>
            Leve nossa IDE para sua equipe. Ninesevem oferece suporte a
            experiências para usuários avançados, novos consumidores e todos os
            demais.
          </p>
          <div className={style.containerBtn}>
            <ButtonLine Link="/">Sobre nós</ButtonLine>
            <Button Link="/">Saiba mais</Button>
          </div>
        </div>
        <div className={img1}>
          <img src={img1} />
        </div>
      </div>
    </section>
  );
}

export default Conteudo1;
