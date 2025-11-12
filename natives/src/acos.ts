/**
 * MISC:ACOS
 *
 * 0x42CDD13001C98400

 * 
 * see http:en.wikipedia.org/wiki/Inverse_trigonometric_function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @returns {number}  
 */
export function acos(x: number): number {
	const acos_result = Citizen.invokeNative<number>('0x42CDD13001C98400', x);
	return acos_result;
}