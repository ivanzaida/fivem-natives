/**
 * SYSTEM:VDIST
 *
 * 0x2A488C176D52CCA5

 * 
 * Calculates distance between vectors.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x1
 * @param {number} y1
 * @param {number} z1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z2
 * @returns {number}  
 */
export function vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
	const vdist_result = Citizen.invokeNative<number>('0x2A488C176D52CCA5', x1, y1, z1, x2, y2, z2);
	return vdist_result;
}