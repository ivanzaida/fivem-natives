/**
 * MISC:ATAN2
 *
 * 0x4964D7A2BFD2F9A3

 * 
 * ------------------------------------------------------------------
 * @param {number} y
 * @param {number} x
 * @returns {number}  
 */
export function atan2(y: number, x: number): number {
	const atan2_result = Citizen.invokeNative<number>('0x4964D7A2BFD2F9A3', y, x);
	return atan2_result;
}