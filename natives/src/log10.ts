/**
 * SYSTEM:LOG10
 *
 * 0xE816E655DE37FE20

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 * @returns {number}  
 */
export function log10(value: number): number {
	const log10_result = Citizen.invokeNative<number>('0xE816E655DE37FE20', value);
	return log10_result;
}