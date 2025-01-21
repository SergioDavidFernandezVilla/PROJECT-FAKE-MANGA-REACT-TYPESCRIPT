// DEPENDES
import { useState } from "react";

//COMPONENTS
import { MangaComponent } from "./../components/manga/MangaComponent";

//JSON
import { MangaType } from "./../types/MangaType";
import { DataManga } from "./../utils/json/ListManga";
import { NewMangaComponent } from "../components/newManga/NewMangaComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";

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
          <div className={`${model == true ? "modal_open" : ""}`}>

          </div>

        <HeaderComponent/>

        <main className={`main`}>
            
            <NewMangaComponent model={model} setModel={setModel}/>

          <section className="section">
            <div className="container_new_anime">
              <h3 className="text_new_anime_h3">Lista de mangas: </h3>

              <div className="container_btn_new_anime">
                <button className="btn_all_new">Ver todos</button>
                <button className="btn_new_anime" onClick={handleNewManga}>
                  New manga
                </button>
              </div>
            </div>

            <div className="container_animes_list">
              <MangaComponent manga={dataManga} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
