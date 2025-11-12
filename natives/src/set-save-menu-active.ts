/**
 * MISC:SET_SAVE_MENU_ACTIVE
 *
 * 0x20D668730B14B5F4

 * 
 * ignoreVehicle - bypasses vehicle check of the local player (it will not open if you are in a vehicle and this is set to false)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowWhilePlayerIsInAVehicle
 */
export function setSaveMenuActive(allowWhilePlayerIsInAVehicle: boolean = false): void {
	const setSaveMenuActive_result = Citizen.invokeNative<void>('0x20D668730B14B5F4', allowWhilePlayerIsInAVehicle);
	return setSaveMenuActive_result;
}