/**
 * MISC:ASIN
 *
 * 0x1670C66FA901C0D8

 * 
 * see http:en.wikipedia.org/wiki/Inverse_trigonometric_function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @returns {number}  
 */
export function asin(x: number): number {
	const asin_result = Citizen.invokeNative<number>('0x1670C66FA901C0D8', x);
	return asin_result;
}