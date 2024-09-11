/**
 * SYSTEM:SHIFT_RIGHT
 *
 * 0x97EF1E5BCE9DC075

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @param {number} bitShift
 * @returns {number}  
 */
export function shiftRight(value: number, bitShift: number): number {
	const shiftRight_result = Citizen.invokeNative<number>('0x97EF1E5BCE9DC075', value, bitShift);
	return shiftRight_result;
}