import { text } from "../assets";
import { PowerUp } from "../types";

export const countNumber = (n: number): string => {
  switch (n) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return n + "th";
  }
};

export const prefixDigit = (n: number): string => {
  if (n >= 10) return String(n);
  return "0" + n;
};

export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const getRandomMessage = (randomMessages: string[]): string => {
  const randomIndex = Math.floor(Math.random() * randomMessages.length);
  return randomMessages[randomIndex];
};

export const getDescriptionExample = (powerUp: PowerUp): string | undefined => {
  if (powerUp.id === "1") {
    return text.powerUps.grillExample;
  } else if (powerUp.id === "2") {
    return text.powerUps.birdsEyeViewExample;
  }
};
