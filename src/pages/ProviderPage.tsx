import Heading from "../components/Heading";
import Carousels from "../components/Carousels";
import Body from "../components/Body";
import forest from "../assets/forest.png";
import SearchProvider from "../components/SearchProvider";


export default function ProviderPage() {

  return (
    <div className="home-video-container">
      <Heading variant="default" />
      <img src={forest} className="img-forest"/>
      <Body sidebar={true}>
      <Carousels />
      <SearchProvider />
      </Body>
    </div>
  )
}
