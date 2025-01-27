//DEPENDES
import styled from "styled-components";

// TYPES
import { MangaCardProps } from "../../../types/MangaType";

// COMPONENTS
import { ListGenreAnime } from "./ListGenreAnime/ListGenreAnimeComponent";


const DescriptionDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;



export const DetailMangaComponent: React.FC<MangaCardProps> = ({manga}) => {
    return (
        <DescriptionDetailContainer>
            <header>
              <h2>{manga.title}</h2>
              <p>{manga.description}</p>
            </header>

           <ListGenreAnime manga={manga}/>
          </DescriptionDetailContainer>
    )
}