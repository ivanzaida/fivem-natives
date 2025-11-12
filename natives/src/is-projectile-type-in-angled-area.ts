import { EWeaponType } from '@ivanzaida/structures'

/**
 * MISC:IS_PROJECTILE_TYPE_IN_ANGLED_AREA
 *
 * 0x9F8FB43463B75A3D

 * 
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} vecAngledAreaPoint1X
 * @param {number} vecAngledAreaPoint1Y
 * @param {number} vecAngledAreaPoint1Z
 * @param {number} vecAngledAreaPoint2X
 * @param {number} vecAngledAreaPoint2Y
 * @param {number} vecAngledAreaPoint2Z
 * @param {number} distanceOfOppositeFace
 * @param {EWeaponType} weaponType
 * @param {boolean} isPlayer
 * @returns {boolean}  
 */
export function isProjectileTypeInAngledArea(vecAngledAreaPoint1X: number, vecAngledAreaPoint1Y: number, vecAngledAreaPoint1Z: number, vecAngledAreaPoint2X: number, vecAngledAreaPoint2Y: number, vecAngledAreaPoint2Z: number, distanceOfOppositeFace: number, weaponType: EWeaponType | number, isPlayer: boolean = false): boolean {
	const isProjectileTypeInAngledArea_result = Citizen.invokeNative<boolean>('0x9F8FB43463B75A3D', vecAngledAreaPoint1X, vecAngledAreaPoint1Y, vecAngledAreaPoint1Z, vecAngledAreaPoint2X, vecAngledAreaPoint2Y, vecAngledAreaPoint2Z, distanceOfOppositeFace, weaponType, isPlayer);
	return isProjectileTypeInAngledArea_result;
}