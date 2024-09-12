/**
 * SYSTEM:TO_FLOAT
 *
 * 0xBBDA792448DB5A89

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function toFloat(value: number): number {
	const toFloat_result = Citizen.invokeNative<number>('0xBBDA792448DB5A89', value);
	return toFloat_result;
}