import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const [slug, setSlug] = useState("");

  function handleToggleFavorite(slug) {
    setSlug(slug);

    setArtPiecesInfo((artPiecesInfo) => {
      // find the art piece in the state
      const info = artPiecesInfo.find((info) => info.slug === slug);
      // if the art piece is already in the state, toggle the isFavorite property;
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      // if the art piece is not in the state, add it with isFavorite set to true and comments set to an empty array;
      return [...artPiecesInfo, { slug, isFavorite: true, comments: [] }];
    });
  }

  function handleSubmitComment(event, slug) {
    event.preventDefault();
    const form = event.target;
    // Get the current date and time
    const currentTime = new Date();
    const comment = {
      commentText: form.elements.comment.value,
      commentDate: currentTime.toLocaleDateString(),
      commentTime: currentTime.toLocaleTimeString(),
    };
    form.reset();
    form.elements.comment.focus();

    setArtPiecesInfo((artPiecesInfo) => {
      // find the art piece in the state
      const info = artPiecesInfo.find((info) => info.slug === slug);
      // if the art piece is already in the state, add the comment to the comments array;
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug
            ? { ...info, comments: [...info.comments, comment] }
            : info
        );
      }
      // if the art piece is not in the state, add it with isFavorite set to false and add comment to comments array ;
      return [
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [comment] },
      ];
    });
  }

  const favoritePieces = artPiecesInfo.map((artPiece) => {
    const dataObjectByName = data.find(
      (artObject) => artObject.slug === artPiece.slug
    );
    return {
      ...artPiece,
      artist: dataObjectByName.artist,
      name: dataObjectByName.name,
      imageSource: dataObjectByName.imageSource,
      year: dataObjectByName.year,
    };
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        slug={slug}
        onToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        favoritePieces={favoritePieces}
        onSubmitComment={handleSubmitComment}
      />
      <Layout />
    </>
  );
}
