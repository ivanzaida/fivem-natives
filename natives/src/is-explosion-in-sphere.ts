import { EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:IS_EXPLOSION_IN_SPHERE
 *
 * 0x8764A5B95AE1F967

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
 * @returns {boolean}  
 */
export function isExplosionInSphere(explosionTag: EExplosionTag | number, centrePosX: number, centrePosY: number, centrePosZ: number, radius: number): boolean {
	const isExplosionInSphere_result = Citizen.invokeNative<boolean>('0x8764A5B95AE1F967', explosionTag, centrePosX, centrePosY, centrePosZ, radius);
	return isExplosionInSphere_result;
}