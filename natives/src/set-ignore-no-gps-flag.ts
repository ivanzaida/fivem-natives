/**
 * PATHFIND:SET_IGNORE_NO_GPS_FLAG
 *
 * 0xAD69CF046AA50E85

 * 
 * ------------------------------------------------------------------
 * @param {boolean} ignore
 */
export function setIgnoreNoGpsFlag(ignore: boolean): void {
	const setIgnoreNoGpsFlag_result = Citizen.invokeNative<void>('0xAD69CF046AA50E85', ignore);
	return setIgnoreNoGpsFlag_result;
}