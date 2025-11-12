/**
 * SYSTEM:VMAG
 *
 * 0x652D2EEEF1D3E62C

 * 
 * Calculates the magnitude of a vector.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}  
 */
export function vmag(x: number, y: number, z: number): number {
	const vmag_result = Citizen.invokeNative<number>('0x652D2EEEF1D3E62C', x, y, z);
	return vmag_result;
}