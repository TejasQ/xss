import { Button } from "../../components/Button";
import { NoodlePage } from "../../components/NoodlePage";

const Index = () => (
  <NoodlePage>
    <form action="/results">
      <input
        name="q"
        autoComplete="off"
        className="border p-2 border-zinc-600 rounded"
        type="text"
        placeholder="Search for..."
      />
      <Button>Search!</Button>
    </form>
  </NoodlePage>
);

export default Index;
