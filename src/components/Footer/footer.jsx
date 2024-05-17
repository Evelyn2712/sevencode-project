import style from "../Footer/footer.module.css"

const Footer = () => {
    return (
        <footer className={style.Footer}>
          <div className={style.footerWrapper}>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>
            <div>
              <form action="post">
                <div>
                    <input type="text" />
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </footer>
      );
}

export default Footer