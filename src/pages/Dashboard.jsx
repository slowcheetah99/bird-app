import { Container } from "../styles/Globals";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Right from "../components/Right";
import { useBirdContext } from "../helpers/hooks/useBirdContext";
export default function Dashboard() {
  const { currPost } = useBirdContext();
  return (
    <Container>
      <div className="dashboard">
        <Sidebar />
        <Center post={currPost[0]} />
        <Right post={currPost[0]} />
      </div>
    </Container>
  );
}
