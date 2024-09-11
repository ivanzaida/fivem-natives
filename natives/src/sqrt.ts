/**
 * SYSTEM:SQRT
 *
 * 0x71D93B57D07F9804

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function sqrt(value: number): number {
	const sqrt_result = Citizen.invokeNative<number>('0x71D93B57D07F9804', value);
	return sqrt_result;
}