// IMAGES
import PortadaNaruto from "../../assets/images/portada_naruto.jpg";
import PortadaOnePunch from "../../assets/images/portada_one_punch.jpg";
import PortadaBleach from "../../assets/images/portada_bleach.jpg";
import PortadaAttackOnTitan from "../../assets/images/portada_attack_on_titan.jpg";
import PortadaDragonBall from "../../assets/images/portada_dragon_ball.jpg";
import PortadaDemonSlayer from "../../assets/images/portada_demon_slayer.jpg";
import PortadaJujutsuKaisen from "../../assets/images/portada_jujutsu_kaisen.jpg";
import PortadaMyHeroAcademia from "../../assets/images/portada_my_hero_academia.jpg";

// TIPOS
import { MangaType } from "../../types/MangaType";

// Definimos el tipo de los capítulos
export interface ChapterType {
  chapterNumber: number;
  title: string;
  description: string;
  publishedDate: string;
  imgUrl: string;
  imgAlt: string;
}

export const DataManga: MangaType[] = [
  {
    id: 1,
    title: "Naruto",
    description:
      "La historia de Naruto Uzumaki, un joven ninja lleno de energía y determinación, sigue su camino para convertirse en Hokage, el líder y protector de su aldea. Portador del espíritu del poderoso zorro demonio Nueve Colas, Naruto enfrenta el rechazo de su aldea desde su infancia. A pesar de los desafíos, no se rinde y lucha por superar sus límites, aprender el valor de la amistad y proteger a quienes ama. A lo largo de su viaje, se enfrenta a enemigos formidables, descubre secretos ocultos sobre su mundo y forja vínculos inquebrantables con amigos que se convierten en su familia elegida. 'Naruto' combina intensas batallas, momentos emotivos y enseñanzas inspiradoras, convirtiéndose en una historia icónica de superación y esperanza.",
    imgUrl: PortadaNaruto,
    imgAlt: "Portada del manga Naruto",
    Estado: "finalizado",
    author: "Masashi Kishimoto",
    genre: ["Acción", "Aventura", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "El inicio de la aventura",
        description: "Naruto comienza su entrenamiento como ninja.",
        publishedDate: "1999-09-21",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "Primer encuentro con Sasuke",
        description: "Naruto conoce a su compañero de equipo, Sasuke.",
        publishedDate: "1999-09-28",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "Prueba de los Exámenes Ninja",
        description:
          "Naruto se enfrenta a las pruebas del examen para convertirse en un ninja.",
        publishedDate: "1999-10-05",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "1999-09-21",
      end: "2014-11-10",
    },
  },

  {
    id: 2,
    title: "One Punch Man",
    description:
      "La historia sigue a Saitama, un héroe que puede derrotar a cualquier enemigo de un solo golpe, pero lucha contra el aburrimiento y la falta de desafíos.",
    imgUrl: PortadaOnePunch,
    imgAlt: "Portada del manga One Punch Man",
    Estado: "activo",
    author: "ONE & Yusuke Murata",
    genre: ["Acción", "Comedia", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "El inicio de la aventura",
        description: "Saitama derrota a su primer enemigo con un solo golpe.",
        publishedDate: "2012-06-14",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "Encuentro con Genos",
        description:
          "Saitama conoce a Genos, un joven cyborg que se convierte en su discípulo.",
        publishedDate: "2012-06-21",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "Desafío contra los monstruos",
        description: "Saitama se enfrenta a varios monstruos poderosos.",
        publishedDate: "2012-07-05",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "2012-06-14",
      end: "presente",
    },
  },
  {
    id: 3,
    title: "Bleach",
    description:
      "Ichigo Kurosaki obtiene poderes de shinigami y lucha para proteger a los vivos y a las almas en el más allá.",
    imgUrl: PortadaBleach,
    imgAlt: "Portada del manga Bleach",
    Estado: "finalizado",
    author: "Tite Kubo",
    genre: ["Acción", "Aventura", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "El encuentro con Rukia",
        description:
          "Ichigo recibe sus poderes de shinigami después de salvar a una niña de un hollow.",
        publishedDate: "2001-08-07",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "Primer enfrentamiento",
        description: "Ichigo se enfrenta a su primer enemigo como shinigami.",
        publishedDate: "2001-08-14",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "El entrenamiento de Ichigo",
        description:
          "Ichigo comienza su entrenamiento para perfeccionar sus habilidades como shinigami.",
        publishedDate: "2001-08-21",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "2001-08-07",
      end: "2016-08-22",
    },
  },
  {
    id: 4,
    title: "Attack on Titan",
    description:
      "La humanidad vive detrás de murallas gigantes para protegerse de los titanes, mientras descubren secretos sobre su verdadera naturaleza.",
    imgUrl: PortadaAttackOnTitan,
    imgAlt: "Portada del manga Attack on Titan",
    Estado: "finalizado",
    author: "Hajime Isayama",
    genre: ["Acción", "Drama", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "La invasión de los titanes",
        description: "Los titanes atacan la muralla y destruyen la ciudad.",
        publishedDate: "2009-09-09",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "La lucha contra los titanes",
        description: "Eren, Mikasa y Armin luchan para defender la muralla.",
        publishedDate: "2009-09-16",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "El descubrimiento de los secretos",
        description:
          "Eren y sus amigos descubren los secretos detrás de los titanes.",
        publishedDate: "2009-09-23",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "2009-09-09",
      end: "2021-04-09",
    },
  },
  {
    id: 5,
    title: "Dragon Ball",
    description:
      "Goku, un guerrero Saiyajin, defiende la Tierra junto a sus amigos, enfrentando enemigos poderosos en busca de las Esferas del Dragón.",
    imgUrl: PortadaDragonBall,
    imgAlt: "Portada del manga Dragon Ball",
    Estado: "finalizado",
    author: "Akira Toriyama",
    genre: ["Acción", "Aventura", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "La búsqueda de las esferas",
        description:
          "Goku comienza su aventura para encontrar las Esferas del Dragón.",
        publishedDate: "1984-12-03",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "El encuentro con Bulma",
        description: "Goku conoce a Bulma, quien se une a él en su búsqueda.",
        publishedDate: "1984-12-10",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "El torneo de artes marciales",
        description:
          "Goku participa en el torneo de artes marciales para demostrar sus habilidades.",
        publishedDate: "1984-12-17",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "1984-12-03",
      end: "1995-06-06",
    },
  },
  {
    id: 6,
    title: "Demon Slayer",
    description:
      "Tanjiro Kamado lucha contra demonios para vengar a su familia y salvar a su hermana Nezuko, quien fue convertida en demonio.",
    imgUrl: PortadaDemonSlayer,
    imgAlt: "Portada del manga Demon Slayer",
    Estado: "finalizado",
    author: "Koyoharu Gotouge",
    genre: ["Acción", "Sobrenatural", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "La tragedia de la familia Kamado",
        description:
          "Tanjiro encuentra a su familia muerta y a su hermana convertida en demonio.",
        publishedDate: "2016-02-15",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "Tanjiro se convierte en cazador",
        description:
          "Tanjiro decide convertirse en cazador de demonios para salvar a su hermana.",
        publishedDate: "2016-02-22",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "La primera misión",
        description: "Tanjiro enfrenta su primer demonio en una misión.",
        publishedDate: "2016-03-01",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "2016-02-15",
      end: "2020-05-18",
    },
  },
  {
    id: 7,
    title: "Jujutsu Kaisen",
    description:
      "Yuji Itadori se une a la escuela de hechicería Jujutsu para luchar contra maldiciones y proteger a las personas.",
    imgUrl: PortadaJujutsuKaisen,
    imgAlt: "Portada del manga Jujutsu Kaisen",
    Estado: "activo",
    author: "Gege Akutami",
    genre: ["Acción", "Sobrenatural", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "El despertar de Yuji",
        description:
          "Yuji descubre el mundo de las maldiciones después de comer un fragmento de una maldición poderosa.",
        publishedDate: "2018-03-05",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "El hechizo de maldición",
        description:
          "Yuji es entrenado en el arte de las maldiciones por Satoru Gojo.",
        publishedDate: "2018-03-12",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "Lucha contra la maldición",
        description:
          "Yuji lucha contra una maldición poderosa para salvar a sus amigos.",
        publishedDate: "2018-03-19",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "2018-03-05",
      end: "presente",
    },
  },
  {
    id: 8,
    title: "My Hero Academia",
    description:
      "Izuku Midoriya sueña con ser un héroe en un mundo donde las personas tienen poderes llamados 'Quirks'.",
    imgUrl: PortadaMyHeroAcademia,
    imgAlt: "Portada del manga My Hero Academia",
    Estado: "activo",
    author: "Kohei Horikoshi",
    genre: ["Acción", "Superhéroes", "Shonen"],
    chapters: [
      {
        chapterNumber: 1,
        title: "El sueño de un héroe",
        description:
          "Izuku decide seguir el camino de héroe a pesar de no tener un Quirk.",
        publishedDate: "2014-07-07",
        imgUrl: "url_del_capitulo_1",
        imgAlt: "Portada del capítulo 1",
      },
      {
        chapterNumber: 2,
        title: "El encuentro con All Might",
        description: "Izuku conoce a All Might, el héroe más grande del mundo.",
        publishedDate: "2014-07-14",
        imgUrl: "url_del_capitulo_2",
        imgAlt: "Portada del capítulo 2",
      },
      {
        chapterNumber: 3,
        title: "La primera prueba",
        description:
          "Izuku comienza sus estudios en la U.A. y enfrenta su primera prueba.",
        publishedDate: "2014-07-21",
        imgUrl: "url_del_capitulo_3",
        imgAlt: "Portada del capítulo 3",
      },
    ],
    published: {
      start: "2014-07-07",
      end: "presente",
    },
  },
];

export default DataManga;
