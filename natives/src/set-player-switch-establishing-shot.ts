/**
 * STREAMING:SET_PLAYER_SWITCH_ESTABLISHING_SHOT
 *
 * 0xC1DDC33C72C3B5A9

 * 
 * sets an establishing shot to be used for player switch, occurs before outro
 * 
 * All names can be found in playerswitchestablishingshots.meta
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} establishingShotName
 */
export function setPlayerSwitchEstablishingShot(establishingShotName: string): void {
	const setPlayerSwitchEstablishingShot_result = Citizen.invokeNative<void>('0xC1DDC33C72C3B5A9', establishingShotName);
	return setPlayerSwitchEstablishingShot_result;
}