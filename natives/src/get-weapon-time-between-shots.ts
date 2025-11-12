import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_TIME_BETWEEN_SHOTS
 *
 * 0x4CC44EFF756524DC

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function getWeaponTimeBetweenShots(weaponType: EWeaponType | number): number {
	const getWeaponTimeBetweenShots_result = Citizen.invokeNative<number>('0x4CC44EFF756524DC', weaponType);
	return getWeaponTimeBetweenShots_result;
}