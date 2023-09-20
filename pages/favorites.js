import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  favoritePieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log("favoritePieces: ", favoritePieces);
  console.log("artPiecesInfo: ", artPiecesInfo);
  if (favoritePieces) {
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
  } else {
    return <h1>Art Gallery</h1>;
  }
}
