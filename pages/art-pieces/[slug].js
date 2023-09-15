import ArtPieceDetails from "@/components/ArtPieceDetails";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ArtPieceDetailPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();
  const routerSlug = router.query.slug;

  const finddata = data.find((arrayItem) => {
    return arrayItem.slug === routerSlug;
  });

  const { imageSource, name, artist, year, genre } = finddata;

  const currentArtPiece = artPiecesInfo.find(
    (artPiece) => artPiece.slug === routerSlug
  );

  const comments = currentArtPiece?.comments;

  return (
    <PageWrapper>
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
      <Comments comments={comments} />
      <CommentForm onSubmitComment={onSubmitComment} slug={routerSlug} />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
