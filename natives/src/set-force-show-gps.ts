/**
 * HUD:SET_FORCE_SHOW_GPS
 *
 * 0x7F13032016798DAB

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function setForceShowGps(onOff: boolean): void {
	const setForceShowGps_result = Citizen.invokeNative<void>('0x7F13032016798DAB', onOff);
	return setForceShowGps_result;
}