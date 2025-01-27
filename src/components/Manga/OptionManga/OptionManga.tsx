import styled from "styled-components";

interface OptionsProps {}

const OptionsAnimesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

const GroupButtonsOptionsAnimes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 100%;
  justify-content: center;
`;

const ButtonOptionAnime = styled.button`
  border: none;
  border-radius: 40px;
  height: 100%;
  width: 240px;
  background-color: var(--background-color-menu-header);
  color: var(--color-title-menu-header);
  cursor: pointer;
`;

const TitleOptionAnime = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text-primary);
`;

export const OptionManga: React.FC<OptionsProps> = () => {
  return (
    <OptionsAnimesList>
      <TitleOptionAnime className="text_new_anime_h3">
        Lista de mangas:{" "}
      </TitleOptionAnime>

      <GroupButtonsOptionsAnimes className="container_btn_new_anime">
        <ButtonOptionAnime className="btn_all_new">Ver todos</ButtonOptionAnime>
        <ButtonOptionAnime className="btn_new_anime">
          New manga
        </ButtonOptionAnime>
      </GroupButtonsOptionsAnimes>
    </OptionsAnimesList>
  );
};
