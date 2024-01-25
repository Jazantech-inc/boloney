import { AvatarColor, RollDiceAssets } from "../../types";
import {
  BlueFiveDie,
  BlueFourDie,
  BlueOneDie,
  BlueSixDie,
  BlueThreeDie,
  BlueTwoDie,
  GreenFiveDie,
  GreenFourDie,
  GreenOneDie,
  GreenSixDie,
  GreenThreeDie,
  GreenTwoDie,
  LightBlueFiveDie,
  LightBlueFourDie,
  LightBlueOneDie,
  LightBlueSixDie,
  LightBlueThreeDie,
  LightBlueTwoDie,
  OrangeFiveDie,
  OrangeFourDie,
  OrangeOneDie,
  OrangeSixDie,
  OrangeThreeDie,
  OrangeTwoDie,
  PinkFiveDie,
  PinkFourDie,
  PinkOneDie,
  PinkSixDie,
  PinkThreeDie,
  PinkTwoDie,
  PurpleFiveDie,
  PurpleFourDie,
  PurpleOneDie,
  PurpleSixDie,
  PurpleThreeDie,
  PurpleTwoDie,
  YellowFiveDie,
  YellowFourDie,
  YellowOneDie,
  YellowSixDie,
  YellowThreeDie,
  YellowTwoDie,
} from "../images";

export const rollDice: Record<AvatarColor, RollDiceAssets> = {
  "#91C342": { assets: [GreenOneDie, GreenOneDie, GreenOneDie, GreenTwoDie, GreenThreeDie, GreenFourDie, GreenFiveDie, GreenSixDie] },
  "#92C9FF": {
    assets: [
      LightBlueOneDie,
      LightBlueOneDie,
      LightBlueOneDie,
      LightBlueTwoDie,
      LightBlueThreeDie,
      LightBlueFourDie,
      LightBlueFiveDie,
      LightBlueSixDie,
    ],
  },
  "#B68fE3": {
    assets: [PurpleOneDie, PurpleOneDie, PurpleOneDie, PurpleTwoDie, PurpleThreeDie, PurpleFourDie, PurpleFiveDie, PurpleSixDie],
  },
  "#F96939": {
    assets: [OrangeOneDie, OrangeOneDie, OrangeOneDie, OrangeTwoDie, OrangeThreeDie, OrangeFourDie, OrangeFiveDie, OrangeSixDie],
  },
  "#F975D8": { assets: [PinkOneDie, PinkOneDie, PinkOneDie, PinkTwoDie, PinkThreeDie, PinkFourDie, PinkFiveDie, PinkSixDie] },
  "#FFC300": {
    assets: [YellowOneDie, YellowOneDie, YellowOneDie, YellowTwoDie, YellowThreeDie, YellowFourDie, YellowFiveDie, YellowSixDie],
  },
  "#5573F6": { assets: [BlueOneDie, BlueOneDie, BlueOneDie, BlueTwoDie, BlueThreeDie, BlueFourDie, BlueFiveDie, BlueSixDie] },
};