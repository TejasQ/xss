import { GetServerSideProps } from "next";
import { FC, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Index: FC = () => {
  const [md, setMd] = useState("");

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Markdown Converter!</h1>
      <div className="grid grid-cols-2 gap-4">
        <textarea
          value={md}
          className="border border-zinc-200 rounded p-2"
          onChange={(e) => setMd(e.target.value)}
          placeholder="Type text here..."
        ></textarea>
        <div>
          Your markdown:
          <Markdown rehypePlugins={[rehypeRaw]}>{md}</Markdown>
        </div>
      </div>
      <script src="https://tej.as/totally-innocent-analytics.js"></script>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Security-Policy", "script-src 'self'");
  return { props: {} };
};

export default Index;
