import { FormNewMangaType } from "../../types/FormNewManga/FormNewMangaType";
import { FormNewMangaComponent } from "./FormNewManga/FormNewMangaComponent";


export const NewMangaComponent: React.FC<FormNewMangaType> = ({model, setModel}) => {
    return ( 
        <>
        
        {model ? (
            <div className="modal">
              
             <FormNewMangaComponent model={model} setModel={setModel}/>
            </div>
          ) : null}

        </>
    )
}