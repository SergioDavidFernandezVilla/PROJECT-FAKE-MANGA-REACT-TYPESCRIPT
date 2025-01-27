// DEPENDES
import { useParams } from "react-router-dom";
import { useState } from "react";

// JSON
import DataManga from "../utils/json/ListManga";

//TYPES
import { MangaType } from "../types/MangaType";

//COMPONENTS
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { CardMangaComponent } from "../components/manga/CardManga/CardMangaComponent";
import styled from "styled-components";

//CSS COMPONENT
const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding:20px;
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
    <HeaderComponent/>
   
    <ContainerHome>
      {/* Mostrar solo el manga que coincide con el ID */}
      
        <CardMangaComponent manga={manga} />
    
    </ContainerHome>
    </>
  );
};
