import { FC } from "react";
import Highlighter from "react-highlight-words";
import { ResultData } from "../../assets/local-data/player-result";
import { color } from "../../design";
import { Heading1, Heading2 } from "../../atoms";
import { TextResultWrapper } from "./styles";

interface TextResultsProps {
  data: ResultData;
  isWinner?: boolean;
}

// TODO: Remove Highlighter dependency
export const ActivePlayerTextResults: FC<TextResultsProps> = ({ data, isWinner }) => {
  return (
    <TextResultWrapper>
      {isWinner ? (
        <>
          <Heading1>{data.activeWinner.headingTitle}</Heading1>
          <Heading2 customcolor={color.darkGrey}>
            <Highlighter
              highlightClassName="bold"
              searchWords={[data.playerName]}
              autoEscape
              textToHighlight={data.activeWinner.subHeadingTitle}
            />
          </Heading2>
        </>
      ) : (
        <>
          <Heading1>{data.activeLoser.headingTitle}</Heading1>
          <Heading2 customcolor={color.darkGrey}>
            <Highlighter
              highlightClassName="bold"
              searchWords={[data.playerName]}
              autoEscape
              textToHighlight={data.activeLoser.subHeadingTitle}
            />
          </Heading2>
        </>
      )}
    </TextResultWrapper>
  );
};

export const TargetPlayerTextResults: FC<TextResultsProps> = ({ data, isWinner }) => {
  return (
    <TextResultWrapper>
      {isWinner ? (
        <>
          <Heading1>{data.targetWinner.headingTitle}</Heading1>
          <Heading2 customcolor={color.darkGrey}>{data.targetWinner.subHeadingTitle}</Heading2>
        </>
      ) : (
        <>
          <Heading1>{data.targetLoser.headingTitle}</Heading1>
          <Heading2 customcolor={color.darkGrey}>
            <Highlighter
              highlightClassName="bold"
              searchWords={[data.playerName]}
              autoEscape
              textToHighlight={data.targetLoser.subHeadingTitle}
            />
          </Heading2>
        </>
      )}
    </TextResultWrapper>
  );
};

export const PlayerLostTextResults: FC<TextResultsProps> = ({ data }) => {
  return (
    <TextResultWrapper>
      <Heading1>{data.lostAllDice.headingTitle}</Heading1>
      <Heading2 customcolor={color.darkGrey}>{data.lostAllDice.subHeadingTitle}</Heading2>
    </TextResultWrapper>
  );
};
