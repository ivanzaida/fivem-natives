import { EExplosionTag } from '@ivanzaida/structures'

/**
 * FIRE:IS_EXPLOSION_IN_ANGLED_AREA
 *
 * 0x9D27D35452DED6B5

 * 
 * explosionType: See ADD_EXPLOSION, -1 for any explosion type
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
 * @returns {boolean}  
 */
export function isExplosionInAngledArea(explosionTag: EExplosionTag | number, pos1X: number, pos1Y: number, pos1Z: number, pos2X: number, pos2Y: number, pos2Z: number, areaWidth: number): boolean {
	const isExplosionInAngledArea_result = Citizen.invokeNative<boolean>('0x9D27D35452DED6B5', explosionTag, pos1X, pos1Y, pos1Z, pos2X, pos2Y, pos2Z, areaWidth);
	return isExplosionInAngledArea_result;
}