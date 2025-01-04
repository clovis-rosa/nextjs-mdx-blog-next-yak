import { styled } from "next-yak";

export default function PublishedDate({ date }: { date: string }) {
  return (
    <Time dateTime={date}>
      Published:{` `}
      {new Date(date).toLocaleDateString("en-GB", {
        dateStyle: "long",
      })}
    </Time>
  );
}

const Time = styled.time`
  font-size: 0.8rem;
  color: #666;
  display: block;
  margin-bottom: 1rem;
`;
