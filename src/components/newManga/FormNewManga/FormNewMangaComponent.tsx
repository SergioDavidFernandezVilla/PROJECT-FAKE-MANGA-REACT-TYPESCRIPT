//TYPES
import { FormNewMangaType } from "../../../types/FormNewManga/FormNewMangaType";

//CSS
import "./FormNewManga.css";

export const FormNewMangaComponent: React.FC<FormNewMangaType> = ({
  setModel,
}) => {
  return (
    <form className="form_new_manga">
      <header className="header_new_manga">
        <h2 className="h2_header_new_manga_text">Agregar un nuevo manga</h2>
      </header>

      <div className="div_input_new_manga">
        <div>
          <label className="label_input_new_manga">
            Nombre del manga:
            <input type="text" className="input_manga_name" />
          </label>
        </div>

        <div>
          <label className="label_input_new_manga">
            Nombre del manga:
            <input type="text" className="input_manga_name" />
          </label>
        </div>

        <div>
          <label className="label_input_new_manga">
            Nombre del manga:
            <input type="text" className="input_manga_name" />
          </label>
        </div>

        <div>
          <label className="label_input_new_manga">
            Nombre del manga:
            <input type="text" className="input_manga_name" />
          </label>
        </div>

        <div>
          <label className="label_input_new_manga">
            Nombre del manga:
            <input type="text" className="input_manga_name" />
          </label>
        </div>

        <div>
          <label className="label_input_new_manga">
            Nombre del manga:
            <input type="text" className="input_manga_name" />
          </label>
        </div>

      </div>

      <button type="submit" className="btn_submit_manga">
        Guardar
      </button>
      <button
        type="button"
        className="btn_close_modal"
        onClick={() => setModel(false)}
      >
        Cerrar
      </button>
    </form>
  );
};
