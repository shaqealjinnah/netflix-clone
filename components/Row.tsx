import { Movie } from "@/typings";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from "react";
import { DocumentData } from "firebase/firestore";

interface Props {
  title: string;
  movies: Movie[] | DocumentData[]
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  function handleclick(direction: string) {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white
      md:text-2xl"
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <button className={`absolute top-0 bottom-0 z-40 bg-black/60 opacity-0 group-hover:opacity-100 transition`}>
          <ChevronLeftIcon
            className={`h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleclick("left")}
          />
        </button>
        <div className="space-y-0.5 md:space-y-2">
          <div
            ref={rowRef}
            className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5"
          >
            {movies.map((movie) => (
              <Thumbnail key={movie.id} movie={movie}/>
            ))}
          </div>
        </div>
        <button className="absolute top-0 bottom-0 right-0 z-40 bg-black/60 opacity-0 group-hover:opacity-100 transition">
          <ChevronRightIcon
            className={`h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
            onClick={() => handleclick("right")}
          />
        </button>
      </div>
    </div>
  );
}

export default Row;
