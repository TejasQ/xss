import { GetServerSideProps } from "next";
import { NoodlePage } from "../../components/NoodlePage";

type Props = {
  query: string;
};

const Results = (props: Props) => {
  return (
    <NoodlePage>
      <div>
        No results for{" "}
        <strong dangerouslySetInnerHTML={{ __html: props.query }} />.
      </div>
    </NoodlePage>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  return { props: { query: String(query.q) } };
};

export default Results;
