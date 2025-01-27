//DEPENDES

import styled from "styled-components";

// COLORS TEXT
import { TextTagPrimary, TextTagSecundary } from "../../../const/ColorText";

// BACKGROUNDS COLORS
import { BackgroundTagAccion, BackgroundTagAdventura, BackgroundTagDrama } from "../../../const/BackgroundColor";

// TYPES
import { MangaCardProps } from "../../../types/MangaType";

const ListGenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ButtonGenre = styled.button`
border:none;
`

const GenreTag = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "genre",
})<{ genre: string }>`
  transition: 0.3s ease-in-out;
  width: 100px;
  height: 27px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) =>
    props.genre === "Acción"
      ? TextTagPrimary
      : props.genre === "Aventura"
      ? TextTagPrimary
      : props.genre === "Shonen"
      ? TextTagPrimary
      : props.genre === "Drama"
      ? TextTagPrimary
      : TextTagSecundary};

  background: ${(props) =>
    props.genre === "Acción"
      ? BackgroundTagAccion
      : props.genre === "Aventura"
      ? BackgroundTagAdventura
      : props.genre === "Shonen"
      ? "rgb(255 80 143)"
      : props.genre === "Drama"
      ? BackgroundTagDrama
      : "#10d975"};

  &:hover {
    width: 105px;
    box-shadow: 2px 4px #9b9797;
  }
`;

export const ListGenreAnime: React.FC<MangaCardProps> = ({manga}) => {
    return (
        <ListGenreContainer>
        {manga.genre.map((genre) => (
          <ButtonGenre key={genre}>
            <GenreTag  genre={genre}>
              {genre}
            </GenreTag>
          </ButtonGenre>
        ))}
      </ListGenreContainer>
    )
}