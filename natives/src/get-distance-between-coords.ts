/**
 * MISC:GET_DISTANCE_BETWEEN_COORDS
 *
 * 0xED977E2AE2CB16EE

 * 
 * For 2d checks use only the x and y components of the vector as the z value is zeroed by the code.
 * 
 * Returns the distance between two three-dimensional points, optionally ignoring the Z values.
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 * 
 * Consider using this faster native instead: SYSTEM::VDIST - DVIST always takes in consideration the 3D coordinates.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} firstCoorsX
 * @param {number} firstCoorsY
 * @param {number} firstCoorsZ
 * @param {number} secondCoorsX
 * @param {number} secondCoorsY
 * @param {number} secondCoorsZ
 * @param {boolean} check3d
 * @returns {number}  
 */
export function getDistanceBetweenCoords(firstCoorsX: number, firstCoorsY: number, firstCoorsZ: number, secondCoorsX: number, secondCoorsY: number, secondCoorsZ: number, check3d: boolean = true): number {
	const getDistanceBetweenCoords_result = Citizen.invokeNative<number>('0xED977E2AE2CB16EE', firstCoorsX, firstCoorsY, firstCoorsZ, secondCoorsX, secondCoorsY, secondCoorsZ, check3d);
	return getDistanceBetweenCoords_result;
}