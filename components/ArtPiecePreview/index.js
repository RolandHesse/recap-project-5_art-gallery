import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <StyledListEntry>
      <Link href={`/art-pieces/${slug}`}>
        {" "}
        <Image width={200} height={200} alt={title} src={image} />
      </Link>
      <br />
      <small>{`"${title}" by ${artist}`}</small>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        slug={slug}
      />
    </StyledListEntry>
  );
}

const StyledListEntry = styled.li`
  list-style: none;
  margin: 2rem;
`;
