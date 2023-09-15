import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  favoritePieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces
        pieces={favoritePieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
