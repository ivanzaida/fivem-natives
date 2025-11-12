import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_TINT_COUNT
 *
 * 0xB302C203285E8234

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function getWeaponTintCount(weaponType: EWeaponType | number): number {
	const getWeaponTintCount_result = Citizen.invokeNative<number>('0xB302C203285E8234', weaponType);
	return getWeaponTintCount_result;
}