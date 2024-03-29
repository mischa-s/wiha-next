interface FoursGameProps {
  played: boolean;
  team1: string;
  score1: string;
  team2: string;
  score2: string;
  idx: number;
}

export default function FoursGameRenderer({
  played,
  team1,
  score1,
  team2,
  score2,
  idx,
}: FoursGameProps) {
  if (idx === 12) {
    return <>Semifinals</>;
  }

  if (idx === 13) {
    return <>Finals</>;
  }

  return (
    <>
      {played && score1 ? `${team1} (${score1})` : team1}
      &nbsp;vs.&nbsp;
      {played && score2 ? `${team2} (${score2})` : team2}
    </>
  );
}
