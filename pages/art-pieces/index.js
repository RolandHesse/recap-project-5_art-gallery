import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        pieces={data}
      />
    </>
  );
}
