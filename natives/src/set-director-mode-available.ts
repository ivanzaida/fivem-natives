/**
 * HUD:SET_DIRECTOR_MODE_AVAILABLE
 *
 * 0x38236280C567C045

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setDirectorModeAvailable(active: boolean): void {
	const setDirectorModeAvailable_result = Citizen.invokeNative<void>('0x38236280C567C045', active);
	return setDirectorModeAvailable_result;
}