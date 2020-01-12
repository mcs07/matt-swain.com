import Prism from "@theme-ui/prism"
import SlideDeck from "../components/slide-deck"

const components = {
  pre: props => props.children,
  code: Prism,
  SlideDeck: SlideDeck,
}

export default components
