/**
 * SYSTEM:COS
 *
 * 0xD0FFB162F40A139C

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function cos(value: number): number {
	const cos_result = Citizen.invokeNative<number>('0xD0FFB162F40A139C', value);
	return cos_result;
}