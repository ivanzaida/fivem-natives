/**
 * MISC:TAN
 *
 * 0xD1AA84345B760931

 * 
 * see http:en.wikipedia.org/wiki/Inverse_trigonometric_function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @returns {number}  
 */
export function tan(x: number): number {
	const tan_result = Citizen.invokeNative<number>('0xD1AA84345B760931', x);
	return tan_result;
}