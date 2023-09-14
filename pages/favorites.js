import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  favoritePieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={favoritePieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
