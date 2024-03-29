import { FC, ReactElement, useEffect, useMemo, useState } from "react";

import { ArrowButtonSVG, text } from "../../assets";
import { color, fontSizes, iconSize, lineHeights } from "../../design";
import { useTotalDiceInMatch } from "../../service";
import { Bid } from "../../types";
import { BaseIcon } from "../../atoms";

import { usePlaceBidFormState } from "./bid-state";
import { ControlButton, ControlButtonWrapper, NumberList, NumberSliderWrapper, Number } from "./styles";

//TODO: Calculate range based amount of players and available dice

interface NumberSliderProps {
  lastBid?: Bid;
}

const getViewArray = (amount: number): number[] => {
  return [amount - 2, amount - 1, amount, amount + 1, amount + 2];
};

export const AmountSlider: FC<NumberSliderProps> = ({ lastBid }) => {
  const setDiceAmount = usePlaceBidFormState((state) => state.setDiceAmount);
  const diceAmount = usePlaceBidFormState((state) => state.diceAmount);
  const faceValue = usePlaceBidFormState((state) => state.faceValue);
  const diceInMatch = useTotalDiceInMatch();
  const [viewNumbers, setViewNumbers] = useState<number[]>([]);

  const lowerBound = useMemo(() => {
    if (!lastBid) return 1;
    if (lastBid && (lastBid.amount === diceInMatch || (faceValue && faceValue > lastBid.face))) return lastBid.amount;
    if (faceValue) return lastBid.amount + 1;
    return 1;
  }, [diceInMatch, faceValue, lastBid]);

  const upperBound = diceInMatch;

  const isFirstBid = diceAmount && !lastBid;
  const isFaceValueHigher = diceAmount && faceValue && lastBid && faceValue > lastBid?.face && diceAmount >= lastBid?.amount;
  const isBidHigher = diceAmount && lastBid && diceAmount > lastBid?.amount;

  const isBidValid = isFaceValueHigher || isBidHigher;
  const isDefaultViewNumber = isFirstBid || isBidValid;

  useEffect(() => {
    if (!faceValue) setDiceAmount(lowerBound);
    if (isDefaultViewNumber) {
      setViewNumbers(getViewArray(diceAmount));
    } else {
      setViewNumbers(getViewArray(lowerBound));
      setDiceAmount(lowerBound);
    }
  }, [diceAmount, faceValue, isDefaultViewNumber, lastBid, lowerBound, setDiceAmount]);

  const handleClick = (index: number) => {
    const nextAmount = (diceAmount || 1) + index;
    if (nextAmount > upperBound || nextAmount < lowerBound) return;
    setDiceAmount(nextAmount);
  };

  const getNumberList = (amount: number, index: number): ReactElement => {
    const isCurrent = index === 2;
    const fontDisplayed = isCurrent ? fontSizes.heading1 : fontSizes.heading4;
    const lineHeightsDisplayed = isCurrent ? fontSizes.heading1 : fontSizes.heading4;

    if (amount <= 0 || amount > diceInMatch) {
      return <Number key={index} isCurrent={false} isDisabled={true} height={lineHeights.heading4} />;
    }

    return (
      <Number
        key={index}
        isDisabled={amount < lowerBound}
        isCurrent={isCurrent}
        fontSize={fontDisplayed}
        lineHeight={lineHeightsDisplayed}
        height={lineHeightsDisplayed}
      >
        {text.param.xAmount(amount)}
      </Number>
    );
  };

  return (
    <NumberSliderWrapper>
      <ControlButtonWrapper>
        <ControlButton disabled={diceAmount === lowerBound} onClick={() => handleClick(-1)}>
          <BaseIcon
            src={<ArrowButtonSVG />}
            strokeColor={color.black}
            width={iconSize.lg}
            height={iconSize.lg}
            iconColor={color.transparent}
          />
        </ControlButton>
        <ControlButton disabled={diceAmount === upperBound} downButton onClick={() => handleClick(1)}>
          <BaseIcon
            src={<ArrowButtonSVG />}
            strokeColor={color.black}
            width={iconSize.lg}
            height={iconSize.lg}
            iconColor={color.transparent}
            pointer
          />
        </ControlButton>
      </ControlButtonWrapper>
      <NumberList>{viewNumbers.map((amount, index) => getNumberList(amount, index))}</NumberList>
    </NumberSliderWrapper>
  );
};
