/**
 * GRAPHICS:GRASSBATCH_ENABLE_FLATTENING_EXT_IN_SPHERE
 *
 * 0x69F7527E6819E2B5

 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @param {number} lookVecX
 * @param {number} lookVecY
 * @param {number} lookVecZ
 * @param {number} groundZ
 */
export function grassbatchEnableFlatteningExtInSphere(centerX: number, centerY: number, centerZ: number, radius: number, lookVecX: number, lookVecY: number, lookVecZ: number, groundZ: number): void {
	const grassbatchEnableFlatteningExtInSphere_result = Citizen.invokeNative<void>('0x69F7527E6819E2B5', centerX, centerY, centerZ, radius, lookVecX, lookVecY, lookVecZ, groundZ);
	return grassbatchEnableFlatteningExtInSphere_result;
}