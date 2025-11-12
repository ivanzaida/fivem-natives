/**
 * SYSTEM:VDIST2
 *
 * 0xB7A628320EFF8E47

 * 
 * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
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
export function vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
	const vdist2_result = Citizen.invokeNative<number>('0xB7A628320EFF8E47', x1, y1, z1, x2, y2, z2);
	return vdist2_result;
}