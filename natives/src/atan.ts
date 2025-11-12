/**
 * MISC:ATAN
 *
 * 0x21CDF75488EFB98B

 * 
 * see http:en.wikipedia.org/wiki/Inverse_trigonometric_function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @returns {number}  
 */
export function atan(x: number): number {
	const atan_result = Citizen.invokeNative<number>('0x21CDF75488EFB98B', x);
	return atan_result;
}