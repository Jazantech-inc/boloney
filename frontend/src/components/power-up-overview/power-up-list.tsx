import { FC } from "react";
import { text } from "../../assets";
import { MEDIUM_VIEWPORT_WIDTH, POWER_UP_DEFAULT_VIEW, POWER_UP_DEFAULT_VIEW_SMALL, SMALLER_VIEWPORT_WIDTH } from "../../constants";
import { useViewport } from "../../hooks";
import { useArePowerUpsDisabled } from "../../service";
import { useStore } from "../../store";
import { PowerUpId } from "../../types";
import { getPowerUp } from "../../util";
import { GeneralText } from "../../atoms";
import { PowerUpComponent } from "../power-up";

import { PowerUpWrapper } from "../power-up/styles";
import { PowerUpOverview, YourPowerUpContainer } from "./styles";

interface PowerUpListProps {
  powerUpIds: PowerUpId[];
  isInHud?: boolean;
}

export const PowerUpList: FC<PowerUpListProps> = ({ powerUpIds, isInHud }) => {
  const showModal = useStore((state) => state.showModal);
  const isPowerUpDisabled = useArePowerUpsDisabled();

  const { width } = useViewport();

  const initialPowerUpsShown = width > MEDIUM_VIEWPORT_WIDTH ? POWER_UP_DEFAULT_VIEW : POWER_UP_DEFAULT_VIEW_SMALL;
  const isSmallScreenSize = width < SMALLER_VIEWPORT_WIDTH;
  const toggleShowModal = () => {
    showModal("power-up-list");
  };

  if (isSmallScreenSize && powerUpIds.length > 3) {
    return (
      <YourPowerUpContainer>
        {powerUpIds.slice(0, 3).map((powerUpId, i) => (
          <PowerUpComponent key={i} powerUp={getPowerUp(powerUpId)} showPowerUps={toggleShowModal} isPowerUpDisabled={isPowerUpDisabled} />
        ))}
        <PowerUpWrapper onClick={() => toggleShowModal()}>
          <PowerUpOverview>
            <GeneralText>{text.param.powerUpAmount(powerUpIds.length - 3)}</GeneralText>
          </PowerUpOverview>
        </PowerUpWrapper>
      </YourPowerUpContainer>
    );
  }

  return (
    <YourPowerUpContainer>
      {powerUpIds.slice(0, initialPowerUpsShown).map((powerUpId, i) => (
        //! Don't use powerUpId as key since we allow for duplicate power-ups
        <PowerUpComponent
          key={i}
          powerUp={getPowerUp(powerUpId)}
          showPowerUps={toggleShowModal}
          isPowerUpDisabled={isPowerUpDisabled}
          isInHud={isInHud}
        />
      ))}
      {powerUpIds.length > initialPowerUpsShown && (
        <PowerUpWrapper onClick={() => toggleShowModal()}>
          <PowerUpOverview>
            <GeneralText>{text.param.powerUpAmount(powerUpIds.length - initialPowerUpsShown)}</GeneralText>
          </PowerUpOverview>
        </PowerUpWrapper>
      )}
    </YourPowerUpContainer>
  );
};
