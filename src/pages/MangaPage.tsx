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
import { CardMangaComponent } from "../components/Manga/CardManga/CardMangaComponent";

//STYLE COMPONENT
import { Container } from "../componentStyles/containerStyle";
import { DetailMangaComponent } from "../components/DetailManga/DetailMangaComponent";

const MangaDetailContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
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

          <DetailMangaComponent manga={manga} />
        </MangaDetailContainer>
      </Container>
    </>
  );
};
