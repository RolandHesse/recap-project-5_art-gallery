import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const routerSlug = router.query.slug;

  const finddata = data.find((arrayItem) => {
    return arrayItem.slug === routerSlug;
  });

  const { imageSource, name, artist, year, genre } = finddata;

  return (
    <ArtPieceDetails
      image={imageSource}
      name={name}
      artist={artist}
      year={year}
      genre={genre}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      slug={routerSlug}
    />
  );
}
