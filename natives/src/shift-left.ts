/**
 * SYSTEM:SHIFT_LEFT
 *
 * 0xEDD95A39E5544DE8

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @param {number} bitShift
 * @returns {number}  
 */
export function shiftLeft(value: number, bitShift: number): number {
	const shiftLeft_result = Citizen.invokeNative<number>('0xEDD95A39E5544DE8', value, bitShift);
	return shiftLeft_result;
}