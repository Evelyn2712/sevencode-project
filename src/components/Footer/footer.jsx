import style from "../Footer/footer.module.css";
import Logo from "../../assets/img/Sevencode.svg";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.footerWrapper}>
        <div className={style.textFooter}>
          <img src={Logo} />
          <p className={style.pTextFooter}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            aliquet justo
          </p>
        </div>
        <div className={style.footerInput}>
          <p className={style.pSubscribe}>
          Inscreva-se para saber de novidades do mundo uno. E receba atualizações direto no seu email!
          </p>
          <form action="post">
            <div className={style.wrapperInput}>
              <input
                type="text"
                placeholder="Digite seu email aqui"
                className={style.caixinhaFooter}
              />
              <div className={style.buttonContainer}>
                <button className={style.buttonFooter}>Cadastre-se</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={style.finalFooter}>
        <div className={style.politica}>
          <p className={style.p1}>
            © 2023 Ninesevem. Todos os direitos reservados.
          </p>
        </div>
        <div className={style.termos}>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
