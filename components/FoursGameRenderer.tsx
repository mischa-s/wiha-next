interface FoursGameProps {
  played: boolean;
  team1: string;
  score1: string;
  team2: string;
  score2: string;
}

export default function FoursGameRenderer({
  played,
  team1,
  score1,
  team2,
  score2,
}: FoursGameProps) {
  return (
    <>
      {played && score1 ? `${team1} (${score1})` : team1}
      &nbsp;vs.&nbsp;
      {played && score2 ? `${team2} (${score2})` : team2}
    </>
  );
}
