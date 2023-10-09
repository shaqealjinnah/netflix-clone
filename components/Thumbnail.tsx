import { modalState, movieState } from "@/atoms/modalAtom";
import { Genre, Movie } from "@/typings";
import { ChevronDownIcon, PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRecoilState } from "recoil";

interface Props {
  movie: Movie;
  // movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative h-20 min-w-[180px] cursor-pointer transition duration-200 ease-out
    md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="Thumbnail"
        layout="fill"
        className="rounded-sm object-cover md:rounded" style={{opacity: '100'}}
      />
    </div>
  );
}

export default Thumbnail;
