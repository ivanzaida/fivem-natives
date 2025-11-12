/**
 * MISC:ABSF
 *
 * 0x1D5CD3EAAA7422B0

 * 
 * See http:en.wikipedia.org/wiki/Absolute_value
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} n
 * @returns {number}  
 */
export function absf(n: number): number {
	const absf_result = Citizen.invokeNative<number>('0x1D5CD3EAAA7422B0', n);
	return absf_result;
}