/**
 * PATHFIND:SET_GPS_DISABLED_ZONE
 *
 * 0x4F30C4E212ACCAAA

 * 
 * Defines a rectangular zone which the GPS will not pathfind through.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 */
export function setGpsDisabledZone(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void {
	const setGpsDisabledZone_result = Citizen.invokeNative<void>('0x4F30C4E212ACCAAA', minX, minY, minZ, maxX, maxY, maxZ);
	return setGpsDisabledZone_result;
}