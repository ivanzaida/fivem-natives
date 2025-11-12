import { EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_DAMAGE
 *
 * 0xFE2B29CE6AE93F62

 * 
 * This native does not return damages of weapons from the melee and explosive group.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {EWeaponcomponentType} weaponComponent
 * @returns {number}  
 */
export function getWeaponDamage(weaponType: EWeaponType | number, weaponComponent: EWeaponcomponentType | number): number {
	const getWeaponDamage_result = Citizen.invokeNative<number>('0xFE2B29CE6AE93F62', weaponType, weaponComponent);
	return getWeaponDamage_result;
}