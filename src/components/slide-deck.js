/** @jsx jsx */
import { jsx } from "theme-ui"

export const SlideDeck = ({ id, ratio, title }) => {
  return (
    <div
      sx={{
        paddingBottom: `${ratio * 100}%`,
        position: "relative",
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        frameBorder="0"
        title={title}
        src={`https://speakerdeck.com/player/${id}?`}
        allowFullScreen={true}
        width="752"
        height="564"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          m: 0,
          p: 0,
          width: "100%",
          height: "100%",
          bg: "card",
          border: "none",
          borderRadius: "6px",
        }}
      />
    </div>
  )
}

SlideDeck.defaultProps = {
  ratio: 0.75,
}

export default SlideDeck
