/**
 * HUD:SET_GPS_FLASHES
 *
 * 0xF138B49165C78B6E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} flash
 */
export function setGpsFlashes(flash: boolean): void {
	const setGpsFlashes_result = Citizen.invokeNative<void>('0xF138B49165C78B6E', flash);
	return setGpsFlashes_result;
}