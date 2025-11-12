/**
 * SYSTEM:VMAG2
 *
 * 0xA8CEACB4F35AE058

 * 
 * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}  
 */
export function vmag2(x: number, y: number, z: number): number {
	const vmag2_result = Citizen.invokeNative<number>('0xA8CEACB4F35AE058', x, y, z);
	return vmag2_result;
}