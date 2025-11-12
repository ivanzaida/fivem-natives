/**
 * SYSTEM:CEIL
 *
 * 0x11E019C8F43ACC8A

 * 
 * I'm guessing this rounds a float value up to the next whole number, and FLOOR rounds it down
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function ceil(value: number): number {
	const ceil_result = Citizen.invokeNative<number>('0x11E019C8F43ACC8A', value);
	return ceil_result;
}