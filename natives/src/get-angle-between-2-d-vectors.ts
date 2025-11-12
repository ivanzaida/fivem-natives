/**
 * MISC:GET_ANGLE_BETWEEN_2D_VECTORS
 *
 * 0x20A3B1C2EC4167BB

 * 
 * The returned value will be between 0 (2 vectors are parallel) to 180.0 (vectors are travelling in opposite directions).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}  
 */
export function getAngleBetween_2DVectors(x1: number, y1: number, x2: number, y2: number): number {
	const getAngleBetween_2DVectors_result = Citizen.invokeNative<number>('0x20A3B1C2EC4167BB', x1, y1, x2, y2);
	return getAngleBetween_2DVectors_result;
}