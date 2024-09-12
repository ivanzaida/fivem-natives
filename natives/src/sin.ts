/**
 * SYSTEM:SIN
 *
 * 0x0BADBFA3B172435F

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function sin(value: number): number {
	const sin_result = Citizen.invokeNative<number>('0x0BADBFA3B172435F', value);
	return sin_result;
}