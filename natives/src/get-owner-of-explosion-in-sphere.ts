import { EExplosionTag, EntityIndex } from '@ivanzaida/structures'

/**
 * FIRE:GET_OWNER_OF_EXPLOSION_IN_SPHERE
 *
 * 0x4E890D800CBC4BD9

 * 
 * explosionType: See ADD_EXPLOSION.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EExplosionTag} explosionTag
 * @param {number} centrePosX
 * @param {number} centrePosY
 * @param {number} centrePosZ
 * @param {number} radius
 * @returns {EntityIndex}  
 */
export function getOwnerOfExplosionInSphere(explosionTag: EExplosionTag | number, centrePosX: number, centrePosY: number, centrePosZ: number, radius: number): EntityIndex {
	const getOwnerOfExplosionInSphere_result = Citizen.invokeNative<EntityIndex>('0x4E890D800CBC4BD9', explosionTag, centrePosX, centrePosY, centrePosZ, radius);
	return getOwnerOfExplosionInSphere_result;
}