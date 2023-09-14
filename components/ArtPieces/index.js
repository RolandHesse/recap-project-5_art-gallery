import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
            key={piece.slug}
            slug={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </ul>
  );
}
