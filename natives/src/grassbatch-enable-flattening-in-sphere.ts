/**
 * GRAPHICS:GRASSBATCH_ENABLE_FLATTENING_IN_SPHERE
 *
 * 0x400EE8EE61051687

 * 
 * Wraps 0xAAE9BE70EC7C69AB with FLT_MAX as p7, Jenkins: 0x73E96210?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @param {number} lookVecX
 * @param {number} lookVecY
 * @param {number} lookVecZ
 */
export function grassbatchEnableFlatteningInSphere(centerX: number, centerY: number, centerZ: number, radius: number, lookVecX: number, lookVecY: number, lookVecZ: number): void {
	const grassbatchEnableFlatteningInSphere_result = Citizen.invokeNative<void>('0x400EE8EE61051687', centerX, centerY, centerZ, radius, lookVecX, lookVecY, lookVecZ);
	return grassbatchEnableFlatteningInSphere_result;
}