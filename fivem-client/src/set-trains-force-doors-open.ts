/**
 * CFX:SET_TRAINS_FORCE_DOORS_OPEN
 *
 * 0XD4D1BA63

 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} forceOpen Should force open.
 */
export function setTrainsForceDoorsOpen(forceOpen: boolean): void {
	const setTrainsForceDoorsOpen_result = Citizen.invokeNative<void>('0XD4D1BA63', forceOpen);
	return setTrainsForceDoorsOpen_result;
}