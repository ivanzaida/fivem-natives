/**
 * CFX:SET_LIGHT_PLANE
 *
 * 0xE46E0CDF

 * Set the plane parameters for a light.
 * 
 * ------------------------------------------------------------------
 * @param {number} x X component of the plane
 * @param {number} y Y component of the plane
 * @param {number} z Z component of the plane
 * @param {number} w W component of the plane
 */
export function setLightPlane(x: number, y: number, z: number, w: number): void {
	const setLightPlane_result = Citizen.invokeNative<void>('0xE46E0CDF', x, y, z, w);
	return setLightPlane_result;
}