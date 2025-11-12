/**
 * MISC:ABSI
 *
 * 0x510D0699BE9C6D06

 * 
 * See http:en.wikipedia.org/wiki/Absolute_value
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} n
 * @returns {number}  
 */
export function absi(n: number): number {
	const absi_result = Citizen.invokeNative<number>('0x510D0699BE9C6D06', n);
	return absi_result;
}