import style from "../Conteudo3/conteudo3.module.css"
import img3 from "../../assets/img/img3.png"

const Conteudo3 = () => {
  return (
    <section className={style.Conteudo3}>
      <div className={style.conteudo3Action}>
        <div className={style.conteudo3Wrapper}>
          <div className={style.conteudo3Container}>
            <div className={style.conteudo3Content}>
              <h2>Sistemas feito de Devs para Devs.</h2>
              <p>
                Conheça nossos novos recursos, novos commits, novas propostas e
                muito mais.
              </p>
              <button className={style.buttonFooter}>Registrar</button>
            </div>
            <div>
              <img src={img3}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conteudo3
