import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

import { text } from "../../assets";
import { InputLegend } from "../../components";
import { BaseOption, BaseSelect } from "../../atoms";
import { MAX_DICE_PER_PLAYER, MAX_PLAYERS, MIN_DICE_PER_PLAYER, MIN_PLAYERS } from "../../constants";
import { MatchSettings } from "../../types";
import { range } from "../../util";
import { PlayersDiceContainer } from "./styles";

interface Props {
  register: UseFormRegister<MatchSettings>;
}

export const PlayersField: FC<Props> = ({ register }) => {
  return (
    <PlayersDiceContainer>
      <InputLegend
        label={text.newMatch.players}
        isRow
        tooltipInfo={text.general.toolTipPlayerInfo}
        tooltipTitle={text.general.toolTipPlayerTitle}
      >
        <BaseSelect {...register("players")}>
          {range(MAX_PLAYERS, MIN_PLAYERS).map((n) => (
            <BaseOption key={n} value={n}>
              {text.param.players(n)}
            </BaseOption>
          ))}
        </BaseSelect>
      </InputLegend>
      <InputLegend
        label={text.newMatch.dicePerPlayer}
        isRow
        childNode={2}
        tooltipInfo={text.general.toolTipDiceInfo}
        tooltipTitle={text.general.toolTipDiceTitle}
      >
        <BaseSelect {...register("dicePerPlayer")}>
          {range(MAX_DICE_PER_PLAYER, MIN_DICE_PER_PLAYER).map((n) => (
            <BaseOption key={n} value={n}>
              {text.param.dice(n)}
            </BaseOption>
          ))}
        </BaseSelect>
      </InputLegend>
    </PlayersDiceContainer>
  );
};
