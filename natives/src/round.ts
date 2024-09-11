/**
 * SYSTEM:ROUND
 *
 * 0xF2DB717A73826179

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function round(value: number): number {
	const round_result = Citizen.invokeNative<number>('0xF2DB717A73826179', value);
	return round_result;
}