/**
 * AUDIO:SET_GPS_ACTIVE
 *
 * 0xAA3A5AD85A475137

 * 
 * ------------------------------------------------------------------
 * @param {boolean} disableGps
 */
export function setGpsActive(disableGps: boolean): void {
	const setGpsActive_result = Citizen.invokeNative<void>('0xAA3A5AD85A475137', disableGps);
	return setGpsActive_result;
}