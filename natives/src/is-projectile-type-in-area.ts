import { EWeaponType } from '@ivanzaida/structures'

/**
 * MISC:IS_PROJECTILE_TYPE_IN_AREA
 *
 * 0x7A082DC02E5E00C1

 * 
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a axis-aligned bounding box.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {EWeaponType} weaponType
 * @param {boolean} isPlayer
 * @returns {boolean}  
 */
export function isProjectileTypeInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, weaponType: EWeaponType | number, isPlayer: boolean = false): boolean {
	const isProjectileTypeInArea_result = Citizen.invokeNative<boolean>('0x7A082DC02E5E00C1', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, weaponType, isPlayer);
	return isProjectileTypeInArea_result;
}