import { FC, ReactNode } from "react";
import { buttonSize } from "../../design";
import { TertiaryButton } from "../buttons";
import { DropdownChildrenContainer, DropdownContainer } from "./styles";

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  buttonIcon: ReactNode;
  buttonText: string;
  isBorderless?: boolean;

  expand: () => void;
}

/**
 *
 * This is the dropdown component where the children are what is displayed when you open the dropdown.
 * @param {boolean} isOpen - If the dropdown is open.
 * @param {ReactNode} children - The children of the dropdown, what is displayed when open.
 * @param {ReactNode} buttonIcon - The icon of the button.
 * @param {string} buttonText - The text for the button.
 * @param {boolean} isBorderless - A boolean to define if the button has no border. i.e if it is the first item displayed in the menu then it has no divider.
 * @param {Function} expand - A function whose use is to define how to open and close the dropdown.
 */

export const Dropdown: FC<Props> = ({ isOpen, children, buttonText, buttonIcon, expand, isBorderless }) => {
  return (
    <DropdownContainer isBorderless={isBorderless}>
      <TertiaryButton text={buttonText} icon={buttonIcon} padding={buttonSize.md} onClick={() => expand()} isActive={isOpen} />
      <DropdownChildrenContainer isHidden={!isOpen}>{children}</DropdownChildrenContainer>
    </DropdownContainer>
  );
};
