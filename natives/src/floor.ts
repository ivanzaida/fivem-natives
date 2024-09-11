/**
 * SYSTEM:FLOOR
 *
 * 0xF34EE736CF047844

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function floor(value: number): number {
	const floor_result = Citizen.invokeNative<number>('0xF34EE736CF047844', value);
	return floor_result;
}