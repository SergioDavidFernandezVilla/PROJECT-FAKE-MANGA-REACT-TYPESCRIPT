// DEPENDES
import styled from "styled-components";

// TYPES
import { FormNewMangaType } from "../../../types/FormNewManga/FormNewMangaType";

// COMPONENTS
import { FormNewMangaComponent } from "../FormNewManga/FormNewMangaComponent";

// CSS COMPONENTS
const ModalFormNewManga = styled.div`
  .form_new_manga {
    background-color: red;
    position: absolute;
    z-index: 3;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NewMangaComponent: React.FC<FormNewMangaType> = ({
  model,
  setModel,
}) => {
  return (
    <>
      {model ? (
        <ModalFormNewManga className="modal">
          <FormNewMangaComponent model={model} setModel={setModel} />
        </ModalFormNewManga>
      ) : null}
    </>
  );
};
