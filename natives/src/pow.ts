/**
 * SYSTEM:POW
 *
 * 0xE3621CC40F31FE2E

 * 
 * ------------------------------------------------------------------
 * @param {number} base
 * @param {number} exponent
 * @returns {number}  
 */
export function pow(base: number, exponent: number): number {
	const pow_result = Citizen.invokeNative<number>('0xE3621CC40F31FE2E', base, exponent);
	return pow_result;
}