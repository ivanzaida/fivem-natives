import { EWeaponType } from '@ivanzaida/structures'

/**
 * MISC:IS_PROJECTILE_TYPE_WITHIN_DISTANCE
 *
 * 0x8EC0BB480F11446F

 * 
 * ------------------------------------------------------------------
 * @param {number} vecCoorsX
 * @param {number} vecCoorsY
 * @param {number} vecCoorsZ
 * @param {EWeaponType} weaponType
 * @param {number} distance
 * @param {boolean} isPlayer
 * @returns {boolean}  
 */
export function isProjectileTypeWithinDistance(vecCoorsX: number, vecCoorsY: number, vecCoorsZ: number, weaponType: EWeaponType | number, distance: number, isPlayer: boolean = false): boolean {
	const isProjectileTypeWithinDistance_result = Citizen.invokeNative<boolean>('0x8EC0BB480F11446F', vecCoorsX, vecCoorsY, vecCoorsZ, weaponType, distance, isPlayer);
	return isProjectileTypeWithinDistance_result;
}