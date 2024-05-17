import style from "../Conteudo2/conteudo2.module.css"
import Button from "../button/button"
import img2 from "../../assets/img/img2.png"

const Conteudo2 = () => {
  return (
    <section className={style.Conteudo2}>
      <div className={style.conteudo2Wrapper}>
        <div>
          <img src={img2}/>
        </div>
        <div className={style.conteudo2Content}>
          <h2>
            É hora de se juntar aos milhares de criadores, artistas e
            desenvolvedores que usam Nineseven.
          </h2>
          <Button link="/">Saiba mais</Button>
        </div>
      </div>
    </section>
  );
};

export default Conteudo2
