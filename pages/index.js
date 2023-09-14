import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  let randomArt = {};

  if (slug === "") {
    randomArt = data[Math.floor(Math.random() * data.length)];
  } else randomArt = data.find((art) => art.slug === slug);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        name={randomArt.name}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={randomArt.slug}
      />
    </div>
  );
}
