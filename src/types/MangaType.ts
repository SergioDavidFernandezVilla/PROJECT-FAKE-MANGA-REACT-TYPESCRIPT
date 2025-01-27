export interface MangaType {
    id: number,
    title: string,
    description: string,
    imgUrl: string,
    imgAlt: string,
    Estado: string,
    author: string,
    genre: string[],
    chapters: ChapterType[],
    published: {
        start: string,
        end: string
    
    }
}

export interface ChapterType {
    chapterNumber: number;
    title: string;
    description: string;
    publishedDate: string;
    imgUrl: string;
    imgAlt: string;
  }

// ARREGLO DE MANGA
export interface MangaComponentProps {
    manga: MangaType[]; // Nota: Usar "manga" (minúscula) para la prop por convención
}

export interface MangaCardProps {
    manga: MangaType; // Un manga individual
  }

