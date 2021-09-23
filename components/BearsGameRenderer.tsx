interface BearsGameProps {
  played: boolean;
  team1: string;
  score1: string;
  team2: string;
  score2: string;
  idx: number;
}

export default function BearsGameRenderer({
  played,
  team1,
  score1,
  team2,
  score2,
  idx,
}: BearsGameProps) {
  if (idx === 10) {
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
