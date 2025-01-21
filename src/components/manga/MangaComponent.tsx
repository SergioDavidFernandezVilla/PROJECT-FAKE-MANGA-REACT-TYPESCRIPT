//TYPES
import { MangaComponentProps } from "../../types/MangaType";

//CSS
import "./MangaComponent.css"

export const MangaComponent: React.FC<MangaComponentProps> = ({ manga }) => {
  return (
    <>
      {manga.map((data) => (
        <section key={data.id} className="container_anime">
          <article className="article_anime">
            <figure className="figure_img_anime">
              <img className="img_anime" src={data.imgUrl} alt={data.imgAlt} />

              <figcaption className={`figcaption_img_anime_${data.Estado === "activo" ? "activo" : "finalizado"}`}>{data.Estado}</figcaption>
            </figure>

            <header className="container_text_anime_header">
              <h4 className="title_anime">{data.title}</h4>
              

              <div className="container_text_anime_div">
              
               {data.chapters.map((cap) => (
                <button className="btn_text_anime_p" key={cap.chapterNumber}>{
                  <strong>El capítulo {cap.chapterNumber}</strong>
                }</button>
               ))}
              
              </div>
            </header>
          </article>
        </section>
      ))}
    </>
  );
};
