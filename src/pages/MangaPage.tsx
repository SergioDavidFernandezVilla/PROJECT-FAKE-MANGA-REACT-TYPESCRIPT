// DEPENDES
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

// JSON
import DataManga from "../utils/json/ListManga";

//TYPES
import { MangaType } from "../types/MangaType";

//COMPONENTS
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { CardMangaComponent } from "../components/manga/CardManga/CardMangaComponent";

//STYLE COMPONENT
import { Container } from "../componentStyles/containerStyle";

const MangaDetailContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;

const DescriptionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListGenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GenreTag = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "genre",
})<{ genre: string }>`
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  display: inline-block;
  color: ${(props) =>
    props.genre === "Acción"
      ? "white"
      : props.genre === "Aventura"
      ? "black"
      : props.genre === "Shonen"
      ? "white"
      : props.genre === "Drama"
      ? "white"
      :  "white"};

  background: ${(props) =>
    props.genre === "Acción"
      ? "rgb(37 108 219)"
      : props.genre === "Aventura"
      ? "rgb(249 223 22)"
      : props.genre === "Shonen"
      ? "rgb(255 80 143)"
      : props.genre === "Drama"
      ? "#e17bcf" 
      : "#10d975"};
`;

export const MangaPage = () => {
  const [dataManga, setDataManga] = useState<MangaType[]>(DataManga);

  const { id } = useParams(); // Obtiene el ID del manga desde la URL
  const manga = dataManga.find((manga) => manga.id === Number(id)); // Encuentra el manga correspondiente al ID

  if (!manga) {
    return <div>Manga no encontrado</div>; // Si no se encuentra el manga
  }

  return (
    <>
      <HeaderComponent />

      <Container>
        {/* Mostrar solo el manga que coincide con el ID */}

        <MangaDetailContainer>
          <CardMangaComponent manga={manga} />

          <DescriptionDetailContainer>
            <header>
              <h2>{manga.title}</h2>
              <p>{manga.description}</p>
            </header>

            <ListGenreContainer>
              {manga.genre.map((genre) => (
                <GenreTag key={genre} genre={genre}>
                  {genre}
                </GenreTag>
              ))}
            </ListGenreContainer>
          </DescriptionDetailContainer>
        </MangaDetailContainer>
      </Container>
    </>
  );
};
