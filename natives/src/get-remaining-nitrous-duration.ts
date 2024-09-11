/**
 * VEHICLE:_GET_REMAINING_NITROUS_DURATION
 *
 * 0xBEC4B8653462450E

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getRemainingNitrousDuration(): number {
	const getRemainingNitrousDuration_result = Citizen.invokeNative<number>('0xBEC4B8653462450E', );
	return getRemainingNitrousDuration_result;
}