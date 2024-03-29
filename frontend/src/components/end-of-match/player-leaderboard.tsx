import { FC } from "react";

import { avatars, text } from "../../assets";
import { color, fontWeights, handSizeLeaderboard } from "../../design";
import { useViewport } from "../../hooks";
import { useLocalPlayer } from "../../service";
import { useStore } from "../../store";
import { PlayerRanked } from "../../types";
import { prefixDigit } from "../../util";
import { WinnerBadge } from "../badges";
import { Hand } from "../hand";
import { DiceIcon, PowerUpIcon } from "../icons";
import {
  BoldDescription,
  DataWrapper,
  Description,
  DiceAndPowerUps,
  LeaderboardDetails,
  LeaderboardStanding,
  LeaderboardWrapper,
  Username,
} from "./styles";

interface Props {
  player: PlayerRanked;
  rank: number;
}

export const PlayerLeaderboard: FC<Props> = ({ player, rank }) => {
  const localPlayer = useLocalPlayer();
  const { width } = useViewport();
  const lastAction = useStore((state) => state.lastAction);
  const avatarColor = avatars[player.avatarId].color;
  const isWinner = rank === 1;
  const isSecond = rank === 2;

  const [normalDescription, boldDescription] = (() => {
    if (isWinner && lastAction === "lostByTimeOut") return text.endOfMatch.wonByTimeOut;
    if (isWinner) return text.endOfMatch.wonCalling(lastAction);
    if (isSecond) return text.endOfMatch.lostOnRound("last");
    return text.endOfMatch.lostOnRound(player.lostAtRound);
  })();

  return (
    <LeaderboardWrapper place={rank}>
      {isWinner && <WinnerBadge />}

      <DataWrapper isWinner={isWinner}>
        <LeaderboardStanding customcolor={color.white}>{prefixDigit(rank)}</LeaderboardStanding>
        <Hand
          avatarName={avatars[player.avatarId].name}
          isAnimationDisabled
          height={handSizeLeaderboard.height}
          width={handSizeLeaderboard.width}
          isLeaderboard
        />
        <LeaderboardDetails>
          <Username>{localPlayer && text.endOfMatch.username(player.username, player.userId, localPlayer.userId)}</Username>
          <DiceAndPowerUps screenWidth={width}>
            <DiceIcon diceAmount={player.diceAmount} iconColor={avatarColor} />
            <PowerUpIcon powerUpAmount={player.powerUpsAmount} strokeColor={color.darkGrey} />
          </DiceAndPowerUps>
          <Description customcolor={color.darkGrey}>{normalDescription}</Description>
          <BoldDescription fontWeight={fontWeights.bold}>{boldDescription}</BoldDescription>
        </LeaderboardDetails>
      </DataWrapper>
    </LeaderboardWrapper>
  );
};
