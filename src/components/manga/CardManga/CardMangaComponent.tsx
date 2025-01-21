
//DEPENDES
import { useLocation } from "react-router-dom";
import styled from "styled-components";


//TYPES
import { MangaType } from "../../../types/MangaType";

interface MangaComponentProps {
  manga: MangaType;
}

// CSS COMPONENTS
// Componentes estilizados
const CardMangaCss = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 250px;
`;

const ArticleMangaCss = styled.div`
  width: 100%;
`;

const FigureMangaCss = styled.figure`
  overflow: hidden;
  border-radius: 10px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const FigCaptionMangaCss = styled.figcaption<{ estado: string }>`
  color: white;
  background: ${(props) =>
    props.estado === "activo"
      ? "rgba(0, 128, 0, 0.8)"
      : "rgba(255, 0, 0, 0.8)"};
  position: absolute;
  top: 86%;
  width: 100%;
  height: 52px;
`;

const HeaderMangaCss = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
`;

const TextHeaderCss = styled.header`
  text-align: center;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  .container_text_anime_div {
    margin-top: 10px;

    button {
      background-color: #007acc;
      color: white;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #005fa3;
      }

      span {
        font-size: 14px;
      }
    }
  }
`;

export const CardMangaComponent: React.FC<MangaComponentProps> = ({
  manga,
}) => {
  const location = useLocation();

  // Verifica si estás en la ruta "/"
  const isHomePage = location.pathname === "/";

  // CONSEGUIR EL ULTIMO CAPITULO
  const ultimoCapitulo = manga.chapters[manga.chapters.length - 1];

  return (
    <CardMangaCss>
      <ArticleMangaCss>
        <FigureMangaCss>
          <img src={manga.imgUrl} alt={manga.imgAlt} />
          <FigCaptionMangaCss estado={manga.Estado}>
            <HeaderMangaCss>
              <span>{manga.Estado}</span>
            </HeaderMangaCss>
          </FigCaptionMangaCss>
        </FigureMangaCss>

        <TextHeaderCss>
          <h4>{manga.title}</h4>
          {isHomePage && (
            <div className="container_text_anime_div">
              {ultimoCapitulo && (
                <button>
                  <span>Ultimo capitulo {ultimoCapitulo.chapterNumber}</span>
                </button>
              )}
            </div>
          )}
        </TextHeaderCss>
      </ArticleMangaCss>
    </CardMangaCss>
  );
};
