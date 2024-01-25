export const error = {
  somethingWentWrong: "something went wrong!",
  errorTitle: "error!",
  pageNotFound: "page not found...",
  dataNotFound: "data not found...",
  couldNotFindEvent: "could not find event",
  sorrySomethingWentWrong:
    "sorry, something went wrong and the page you were looking for is not available right now! We are working hard to solve this problem!",
  goBack: "go back",
  goHome: "go home",
  noSocketConnected: "no socket connected",
  noSessionAvailable: "no session available",
  noUsernameFound: "no username found",
  noPayloadReturned: "no payload returned",
  receivedUnexpectedPayload: "received unexpected payload",
  noMatchIdFound: "no match id found",
  selectedPowerUpsMustBeEqualTo: "selected power-ups must be more than the initial power-up amount",
  noActivePowerUp: "no active power-up",
  powerUpRequiresTarget: "power-up requires a target",
  powerUpDataRequired: "power-up data required",
  powerUpNotImplemented: "power-up not implemented",
  noDiceAvailable: "player has no dice available",
  // TODO: update these placeholders
  somethingWentWrongNotification: "something went wrong, zero-knowledge features are not available at this time.",
  invalidPayloadNotification: "invalid payload, last action could not be verified.",
  rollDiceErrorNotification: "roll action failed, try again.",
  usePowerUpErrorNotification: "could not apply the effects of the power-up.",
  healDiceErrorNotification: "could not heal the dice, try again.",
  invalidPayloadErrorNotification: "invalid payload, last action could not be performed.",

  required: (valueName: string): string => `${valueName} required`,
};
