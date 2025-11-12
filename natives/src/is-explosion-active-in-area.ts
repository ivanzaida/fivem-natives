import { EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:IS_EXPLOSION_ACTIVE_IN_AREA
 *
 * 0x9C5BA0994231CF92

 * 
 * explosionType: See ADD_EXPLOSION.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EExplosionTag} explosionTag
 * @param {number} posMinX
 * @param {number} posMinY
 * @param {number} posMinZ
 * @param {number} posMaxX
 * @param {number} posMaxY
 * @param {number} posMaxZ
 * @returns {boolean}  
 */
export function isExplosionActiveInArea(explosionTag: EExplosionTag | number, posMinX: number, posMinY: number, posMinZ: number, posMaxX: number, posMaxY: number, posMaxZ: number): boolean {
	const isExplosionActiveInArea_result = Citizen.invokeNative<boolean>('0x9C5BA0994231CF92', explosionTag, posMinX, posMinY, posMinZ, posMaxX, posMaxY, posMaxZ);
	return isExplosionActiveInArea_result;
}