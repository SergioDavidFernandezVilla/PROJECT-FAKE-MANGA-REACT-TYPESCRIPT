import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

// TYPES
import { MangaType } from "../../../types/MangaType";
import { BackgroundTagActivo, BackgroundTagFinalizado } from "../../../const/BackgroundColor";

interface MangaComponentProps {
  manga: MangaType;
}

// CSS COMPONENTS
const ArticleMangaCss = styled.article`
  width: fit-content;
`;

const FigureMangaCss = styled.figure`
  overflow: hidden;
  border-radius: 10px;
  display: inline-grid;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;



const FigCaptionMangaCss = styled.figcaption.withConfig({
  shouldForwardProp: (prop) => prop !== 'estado',
})<{ estado: string }>`
  color: white;
  background: ${(props) =>
    props.estado === "activo"
      ? BackgroundTagActivo
      : BackgroundTagFinalizado};
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

export const CardMangaComponent: React.FC<MangaComponentProps> = ({ manga }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const ultimoCapitulo = manga.chapters[manga.chapters.length - 1];

  // Estado para controlar la carga de la imagen
  const [isLoading, setIsLoading] = useState(true);

  // Función para manejar cuando la imagen se haya cargado
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <ArticleMangaCss>
      <FigureMangaCss>

        
        <img
          src={manga.imgUrl}
          alt={manga.imgAlt}
          onLoad={handleImageLoad} // Llamar a handleImageLoad cuando la imagen se carga
        />

        <FigCaptionMangaCss estado={manga.Estado}>
          <HeaderMangaCss>
            <span>{manga.Estado}</span>
          </HeaderMangaCss>
        </FigCaptionMangaCss>
      </FigureMangaCss>

      <TextHeaderCss>
        {isHomePage && (
          <div className="container_text_anime_div">
            <h4>{manga.title}</h4>

            {ultimoCapitulo && (
              <button>
                <span>Último capítulo {ultimoCapitulo.chapterNumber}</span>
              </button>
            )}
          </div>
        )}
      </TextHeaderCss>
    </ArticleMangaCss>
  );
};
