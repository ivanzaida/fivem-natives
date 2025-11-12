/**
 * CAM:SET_CINEMATIC_MODE_ACTIVE
 *
 * 0xEC81A0FB4911A2C2

 * 
 * If there is a cinematic camera rendering, this can be overriden by the player using quick toggle or pressing select
 * 
 * Toggles the vehicle cinematic cam; requires the player ped to be in a vehicle to work.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setCinematicModeActive(active: boolean): void {
	const setCinematicModeActive_result = Citizen.invokeNative<void>('0xEC81A0FB4911A2C2', active);
	return setCinematicModeActive_result;
}