// DEPENDES
import { useState } from "react";
import styled from "styled-components";

//COMPONENTS
import { MangaComponent } from "../components/manga/MangaComponent/MangaComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";

//JSON
import { DataManga } from "./../utils/json/ListManga";

//TYPES
import { MangaType } from "./../types/MangaType";
import { OptionManga } from "../components/manga/OptionManga/OptionManga";

// STYLE COMPONENTS
import {Container} from "../componentStyles/containerStyle"

// CSS COMPONENTS

const ContainerAnimes = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  display: grid;
  gap: 15px 5px;
`;

export const HomePage = () => {
  const [dataManga, setDataManga] = useState<MangaType[]>(DataManga);

  return (
    <>
      <div className={`container_relative`}>

        <HeaderComponent />

        <Container>

          <OptionManga/>

          <ContainerAnimes>
            <MangaComponent manga={dataManga} />
          </ContainerAnimes>
        </Container>
      </div>
    </>
  );
};
