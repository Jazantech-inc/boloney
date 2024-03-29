import { FC } from "react";

import { avatars } from "../../assets/local-data/avatar";
import { fonts, handProportion, measurements } from "../../design";
import { useLatestBid, useLocalPlayer } from "../../service";
import { useStore } from "../../store";
import { Die, PlayerPublic, PowerUpId } from "../../types";
import { filterDice, getDieColor } from "../../util";
import { PlayerBadge } from "../badges";
import { DiceOverview } from "../dice-overview";
import { PlayerLastBid } from "../match-players-overview";
import { PlayerNameContainer } from "../match-players-overview/styles";
import { RadioButton } from "../power-up-checkbox";
import { PowerUpOverview } from "../power-up-overview";
import {
  LocalAvatarWrapper,
  LocalPlayer,
  LocalPlayerAvatar,
  LocalPlayerInfoContainer,
  Paint,
  PlayerLastBidWrapper,
  PlayerOverview,
  RadioButtonContainer,
} from "./styles";

interface HUDProps {
  dice?: Die[];
  powerUpIds?: PowerUpId[];
  player: PlayerPublic;
}

export const HUD: FC<HUDProps> = ({ dice, powerUpIds, player }) => {
  const hasPlayerLost = player.status === "lost";
  const { avatar } = handProportion(hasPlayerLost ? "grave" : avatars[player.avatarId].name);
  const lastBid = useLatestBid();
  const localPlayer = useLocalPlayer();
  const dieColor = getDieColor(player);
  const isPlayerLastBid = lastBid?.userId === player.userId;
  const setPowerUpState = useStore((state) => state.setPowerUpState);
  const lastAction = useStore((state) => state.lastAction);
  const stage = useStore((state) => state.matchStage);
  const { targetPlayerId: targetPlayerId, active: activePowerUp, result: result } = useStore((state) => state.powerUpState);
  const hand = handProportion(avatars[player.avatarId].name);

  if (!localPlayer) return <></>;

  const isTargetable = activePowerUp?.id === "7" && stage === "playerTurnLoopStage";
  const playerDice = result && result.id === "6" ? filterDice(result.data.newRolledDice, dice) : dice;
  const isDisabled = localPlayer.powerUpsAmount <= 1 && activePowerUp?.id === "7";

  const handleSelect = () => {
    setPowerUpState({ targetPlayerId: player.userId });
  };

  return (
    <PlayerOverview isActive={player.isActive}>
      <PlayerBadge player={player} lastAction={lastAction} />

      <LocalPlayer isLastBid={isPlayerLastBid} onClick={() => isTargetable && handleSelect()} isTargetable={isTargetable}>
        <LocalAvatarWrapper isTargetable={isTargetable} height={measurements.localAvatarHeight}>
          <LocalPlayerAvatar height={measurements.localAvatarHeight} src={avatar} />
          {!hasPlayerLost && <Paint src={hand.paint} alt={avatar} />}
        </LocalAvatarWrapper>
        {isTargetable && (
          <RadioButtonContainer>
            <RadioButton onSelect={handleSelect} isDisabled={isDisabled} isChecked={targetPlayerId === player.userId} />
          </RadioButtonContainer>
        )}
        {isPlayerLastBid && (
          <PlayerLastBidWrapper isLastBid={isPlayerLastBid} isTargetable={isTargetable}>
            <PlayerLastBid lastBid={lastBid} player={player} />
          </PlayerLastBidWrapper>
        )}
        <LocalPlayerInfoContainer>
          <PlayerNameContainer font={fonts.tertiary}>{localPlayer.username}</PlayerNameContainer>
        </LocalPlayerInfoContainer>
      </LocalPlayer>

      <DiceOverview dice={playerDice} dieColor={dieColor} extraDice={player.extraDice} />
      <PowerUpOverview powerUpIds={powerUpIds} isInHud />
    </PlayerOverview>
  );
};
