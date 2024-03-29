import { FC } from "react";
import { ColumnGroup, LandingSideBarWrapper, SidebarWrapper } from "./styles";
import { FloatingDice } from "./floating-dice";
import { landingDice } from "../../assets";

export interface SidebarProps {
  isSidebarVisible?: boolean;
}

export const LeftLandingSideBar: FC<SidebarProps> = ({ isSidebarVisible }) => {
  return (
    <LandingSideBarWrapper>
      <SidebarWrapper isSidebarVisible={isSidebarVisible}>
        <ColumnGroup isDice>
          {landingDice.map((dice, index) => (
            <FloatingDice key={index} speed={dice.speed} customcolor={dice.color} />
          ))}
        </ColumnGroup>
      </SidebarWrapper>
    </LandingSideBarWrapper>
  );
};
