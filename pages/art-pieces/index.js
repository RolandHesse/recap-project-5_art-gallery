import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
      pieces={data}
    />
  );
}
