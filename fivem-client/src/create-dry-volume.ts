/**
 * CFX:CREATE_DRY_VOLUME
 *
 * 0XEB1C6DD

 * Creates a volume where water effects do not apply.Useful for preventing water collisions from flooding areas underneath them.This has no effect on waterquads, only water created from drawables and collisions.Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 * 
 * ------------------------------------------------------------------
 * @param {number} xMin The min X component of the AABB volume where water does not affect the player.
 * @param {number} yMin The min Y component for the AABB volume.
 * @param {number} zMin The min Z component for the AABB volume.
 * @param {number} xMax The max X component for the AABB volume.
 * @param {number} yMax The max Y component for the AABB volume.
 * @param {number} zMax The max Z component for the AABB volume.
 * @returns {number}  
 */
export function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number {
	const createDryVolume_result = Citizen.invokeNative<number>('0XEB1C6DD', xMin, yMin, zMin, xMax, yMax, zMax);
	return createDryVolume_result;
}