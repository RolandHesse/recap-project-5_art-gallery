import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const router = useRouter();
  function handleBack() {
    router.push("/art-pieces");
  }
  return (
    <>
      <button onClick={handleBack}>Back</button>
      <br />
      <Image width={200} height={200} alt={name} src={image} />
      <br />
      <h3>{`"${name}" by ${artist}`}</h3>
      <small>Year : {year}</small>
      <small>genre : {genre}</small>
      <br />
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
    </>
  );
}
