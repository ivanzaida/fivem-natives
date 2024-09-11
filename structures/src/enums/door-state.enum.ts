export enum EDoorState {
	DoorstateInvalid = -1,
	DoorstateUnlocked,
	DoorstateLocked,
	DoorstateForceLockedUntilOutOfArea,
	DoorstateForceUnlockedThisFrame,
	DoorstateForceLockedThisFrame,
	DoorstateForceOpenThisFrame,
	DoorstateForceClosedThisFrame,
}