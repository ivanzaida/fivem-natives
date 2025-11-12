/**
 * PATHFIND:CLEAR_GPS_DISABLED_ZONE_AT_INDEX
 *
 * 0x0887AF6FA4371E08

 * 
 * Clears the gps disabled zone at the provided index
 * 
 * Clears a disabled GPS route area from a certain index previously set using `SET_GPS_DISABLED_ZONE_AT_INDEX`.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 */
export function clearGpsDisabledZoneAtIndex(index: number): void {
	const clearGpsDisabledZoneAtIndex_result = Citizen.invokeNative<void>('0x0887AF6FA4371E08', index);
	return clearGpsDisabledZoneAtIndex_result;
}