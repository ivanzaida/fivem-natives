/**
 * GRAPHICS:GET_SAFE_ZONE_SIZE
 *
 * 0x897B441FF18ECBBB

 * 
 * Gets the scale of safe zone. if the safe zone size scale is max, it will return 1.0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getSafeZoneSize(): number {
	const getSafeZoneSize_result = Citizen.invokeNative<number>('0x897B441FF18ECBBB', );
	return getSafeZoneSize_result;
}