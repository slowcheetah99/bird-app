import { FeedWrapper } from "../styles/FeedStyles";
import Sidebar from "../components/feed/Sidebar";
import Center from "../components/feed/Center";
import Right from "../components/Right";
export default function Feed() {
  return (
    <FeedWrapper>
      <Sidebar />
      <Center />
      <Right />
    </FeedWrapper>
  );
}
