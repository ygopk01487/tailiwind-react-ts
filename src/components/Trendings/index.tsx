import { moviesData } from "./moviesData";
import MovieCard from "./MovieCard";

const Index = () => {
  return (
    <>
      <h3 className="border-b border-primary mt-12 mb-6 pb-4 text-3xl">
        Trending
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 cursor-pointer">
        {moviesData.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn hover:scale-125 duration-700 hover:bg-primary hover:text-white">
          Load more
        </button>
      </div>
    </>
  );
};

export default Index;
