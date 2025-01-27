//TYPES
import { Link } from "react-router-dom";
import { MangaComponentProps } from "../../../types/MangaType";

//COMPONENTS
import { CardMangaComponent } from "../CardManga/CardMangaComponent";

// DEPENDES
import styled from "styled-components";

//CSS COMPONENTS
const LinkToManga = styled(Link)`
text-decoration: none;
width:fit-content;
`

export const MangaComponent: React.FC<MangaComponentProps> = ({ manga }) => {
  return (
    <>
      {manga.map((data) => (
        <LinkToManga to={`library/manga/${data.id}`} key={data.id} className="link_to_manga">
          <CardMangaComponent manga={data} />
        </LinkToManga>
      ))}
    </>
  );
};
