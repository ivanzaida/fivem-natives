import { GrassCullSphereHandle } from '@ivanzaida/structures'

/**
 * GRAPHICS:REMOVE_GRASS_CULL_SPHERE
 *
 * 0xB7F6A8F981EF6068

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GrassCullSphereHandle} handle
 */
export function removeGrassCullSphere(handle: GrassCullSphereHandle): void {
	const removeGrassCullSphere_result = Citizen.invokeNative<void>('0xB7F6A8F981EF6068', handle);
	return removeGrassCullSphere_result;
}