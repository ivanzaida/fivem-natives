/**
 * PATHFIND:GET_NEXT_GPS_DISABLED_ZONE_INDEX
 *
 * 0x278706F2D0A8F29B

 * 
 * Returns an int which is the next available slot for defining a gps disabled zone
 * 
 * Gets the next zone that has been disabled using SET_GPS_DISABLED_ZONE_AT_INDEX.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNextGpsDisabledZoneIndex(): number {
	const getNextGpsDisabledZoneIndex_result = Citizen.invokeNative<number>('0x278706F2D0A8F29B', );
	return getNextGpsDisabledZoneIndex_result;
}