import { EExplosionTag, EntityIndex } from '@ivanzaida/structures'

/**
 * FIRE:GET_OWNER_OF_EXPLOSION_IN_ANGLED_AREA
 *
 * 0xCBE5AFAE59C1BB3A

 * 
 * Returns a handle to the first entity within the a circle spawned inside the 2 points from a radius.
 * 
 * explosionType: See ADD_EXPLOSION.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EExplosionTag} explosionTag
 * @param {number} pos1X
 * @param {number} pos1Y
 * @param {number} pos1Z
 * @param {number} pos2X
 * @param {number} pos2Y
 * @param {number} pos2Z
 * @param {number} areaWidth
 * @returns {EntityIndex}  
 */
export function getOwnerOfExplosionInAngledArea(explosionTag: EExplosionTag | number, pos1X: number, pos1Y: number, pos1Z: number, pos2X: number, pos2Y: number, pos2Z: number, areaWidth: number): EntityIndex {
	const getOwnerOfExplosionInAngledArea_result = Citizen.invokeNative<EntityIndex>('0xCBE5AFAE59C1BB3A', explosionTag, pos1X, pos1Y, pos1Z, pos2X, pos2Y, pos2Z, areaWidth);
	return getOwnerOfExplosionInAngledArea_result;
}