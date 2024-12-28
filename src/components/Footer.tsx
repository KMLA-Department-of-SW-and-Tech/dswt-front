import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div className="footnavbar">
        <div className="footnabvar-container">
          <div className="footnavbar__name">GWAGIBU</div>
          <div className="footnavbar__websites">
            <a
              href="https://www.instagram.com/kmla_gwagibu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/KMLA-Department-of-SW-and-Tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://kmlaonline.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-k"></i>
            </a>
          </div>
        </div>

        <table className="footnavbar__table">
          <tr>
            <td>ABOUT US</td>
            <td>OUR JOURNEY</td>
            <td>WHAT WE DO</td>
            <td>PROJECTS</td>
            <td>ORGANIZATION CHART</td>
            <td>PEOPLE</td>
          </tr>
        </table>
      </div>

      <div className="footer">
        <div className="footer__name">
          <span>
            Department of SW&Tech, Korean Minjok Leadership Academy (KMLA)
          </span>
        </div>
        <address className="footer__address">
          800 Bonghwa-ro, Anheung-myeon, Hoengseong-gun, Gangwon-do
        </address>
        <div className="footer__copyright">
          <small>ⓒGWAGIBU</small>
        </div>
      </div>
    </>
  )
}
