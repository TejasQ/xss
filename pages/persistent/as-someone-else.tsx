import { useState } from "react";
import { Button } from "../../components/Button";

const Index = () => {
  const [draftTweet, setDraftTweet] = useState("");
  const [tweets, setTweets] = useState([
    {
      id: Math.random(),
      author: "Me",
      value:
        "<script>alert('HACKED!');window.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ';</script>",
    },
    { id: Math.random(), author: "3l0n mu5k", value: "send nudes" },
    {
      id: Math.random(),
      author: "b3z0s",
      value: "i am 🥈🥈🥈🥈🥈🥈🥈🥈🥈 and proud!!!",
    },
    {
      id: Math.random(),
      author: "Tejas Kumar",
      avatarUrl: "https://github.com/tejasq.png",
      value: "please I'm begging you subscribe and hit the bell",
    },
    {
      id: Math.random(),
      author: "muk3sh 4mbani",
      value: "saala kamina kuttha kaise hooooo",
    },
  ]);

  return (
    <div>
      <div className="border-b border-zinc-200 justify-center h-14 flex items-center text-cyan-500 font-bold">
        tweetr
      </div>
      <div className="p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTweets([
              { id: Math.random(), author: "Me", value: draftTweet },
              ...tweets,
            ]);
            setDraftTweet("");
          }}
          className="flex flex-col items-center"
        >
          <textarea
            value={draftTweet}
            onChange={(e) => setDraftTweet(e.target.value)}
            className="mb-2 border p-2 w-80 rounded border-zinc-500"
            placeholder="Enter tweet plz..."
          />
          <Button>tweet</Button>
        </form>
        <div className="flex flex-col items-center mt-8">
          <div className="grid gap-2">
            {tweets.map(({ id, author, value, avatarUrl }, i) => (
              <div
                key={id}
                className="border border-zinc-200 rounded p-2 grid gap-2"
              >
                {console.log(value)}
                <div className="flex items-center gap-2">
                  <img
                    alt="lol"
                    width={32}
                    className="rounded-full"
                    src={avatarUrl || `https://picsum.photos/32/32?v=${author}`}
                  />
                  <strong>{author}</strong>
                </div>
                <div>
                  <p dangerouslySetInnerHTML={{ __html: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
