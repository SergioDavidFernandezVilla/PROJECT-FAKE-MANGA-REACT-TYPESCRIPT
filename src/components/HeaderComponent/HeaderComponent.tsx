import { Link } from "react-router-dom"

export const HeaderComponent = () => {
    return (
        <header className="header">
          <div className="container_title">
            <Link to="/" className="link">
            <h2 className="title">FakeManga</h2>
            </Link>
          </div>

          <nav className="nav">
            <ul className="ul">
              <li className="li">
                <a href="#" className="link">
                  Inicio
                </a>
              </li>

              <li className="li">
                <a href="#" className="link">
                  Mangas
                </a>
              </li>
            </ul>
          </nav>
        </header>
    )
}