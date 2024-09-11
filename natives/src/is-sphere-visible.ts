/**
 * CAM:IS_SPHERE_VISIBLE
 *
 * 0x7B780C491DEC834E

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isSphereVisible(coorsX: number, coorsY: number, coorsZ: number, radius: number): boolean {
	const isSphereVisible_result = Citizen.invokeNative<boolean>('0x7B780C491DEC834E', coorsX, coorsY, coorsZ, radius);
	return isSphereVisible_result;
}