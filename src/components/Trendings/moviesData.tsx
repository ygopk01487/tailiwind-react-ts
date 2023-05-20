import BatmanBegins from "../../asset/batman_begins.jpg";
import Dune from "../../asset/dune.jpg";
import Sing2 from "../../asset/sing_2.jpg";
import SpiderMan from "../../asset/spider_man.jpg";
import TheDarkKnight from "../../asset/the_dark_knight.jpg";
import TheDarkKnightRises from "../../asset/the_dark_knight_rises.jpg";

export interface Movie {
  src: string;
  title: string;
  main: string;
  runtime: string;
}

export const moviesData: Movie[] = [
  {
    src: BatmanBegins,
    title: "Batman Begins",
    main: "Christian",
    runtime: "120m",
  },
  { src: Dune, title: "Dune", main: "Timothée Chalamet", runtime: "120m" },
  { src: Sing2, title: "Sing", main: "Matthew McConaughey", runtime: "120m" },
  { src: SpiderMan, title: "Spider Man", main: "Tom Holland", runtime: "120m" },
  {
    src: TheDarkKnight,
    title: "The Dark Knight",
    main: "Christian Bale",
    runtime: "120m",
  },
  {
    src: TheDarkKnightRises,
    title: "The Dark Knight Rises",
    main: "Christian Bale",
    runtime: "120m",
  },
];
