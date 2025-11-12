import { EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:IS_EXPLOSION_IN_AREA
 *
 * 0x8AC0662A292C36F4

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
export function isExplosionInArea(explosionTag: EExplosionTag | number, posMinX: number, posMinY: number, posMinZ: number, posMaxX: number, posMaxY: number, posMaxZ: number): boolean {
	const isExplosionInArea_result = Citizen.invokeNative<boolean>('0x8AC0662A292C36F4', explosionTag, posMinX, posMinY, posMinZ, posMaxX, posMaxY, posMaxZ);
	return isExplosionInArea_result;
}