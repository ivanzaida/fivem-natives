import { GrassCullSphereHandle } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_GRASS_CULL_SPHERE
 *
 * 0x5F3592B356EE3A4C

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @returns {GrassCullSphereHandle}  
 */
export function setGrassCullSphere(centerX: number, centerY: number, centerZ: number, radius: number): GrassCullSphereHandle {
	const setGrassCullSphere_result = Citizen.invokeNative<GrassCullSphereHandle>('0x5F3592B356EE3A4C', centerX, centerY, centerZ, radius);
	return setGrassCullSphere_result;
}