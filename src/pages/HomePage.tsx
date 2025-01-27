// DEPENDES
import { useState } from "react";

//COMPONENTS
import { MangaComponent } from "../components/manga/MangaComponent/MangaComponent";
import { NewMangaComponent } from "../components/newManga/NewMangaComponent/NewMangaComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";

//JSON
import { DataManga } from "./../utils/json/ListManga";

//TYPES
import { MangaType } from "./../types/MangaType";
import { OptionManga } from "../components/manga/OptionManga/OptionManga";
import styled from "styled-components";

// CSS COMPONENTS
const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding:20px;
`;


const ContainerAnimes = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  display: grid;
  gap: 15px 5px;
`;

export const HomePage = () => {
  const [dataManga, setDataManga] = useState<MangaType[]>(DataManga);
  const [model, setModel] = useState(false);

  const handleNewManga = () => {
    console.log("CLikc");
    console.log("Model: " + model);
    setModel(!model);
  };

  return (
    <>
      <div className={`container_relative`}>
        {model == true && (
          <div className={`${model == true ? "modal_open" : ""}`}></div>
        )}

        <HeaderComponent />

        <ContainerHome>
          <NewMangaComponent model={model} setModel={setModel} />

          <OptionManga handleNewManga={handleNewManga} />

          <ContainerAnimes>
            <MangaComponent manga={dataManga} />
          </ContainerAnimes>
        </ContainerHome>
      </div>
    </>
  );
};
