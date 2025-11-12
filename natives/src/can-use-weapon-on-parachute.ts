import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:CAN_USE_WEAPON_ON_PARACHUTE
 *
 * 0xBE2AF59B33F9F92A

 * 
 * this returns if you can use the weapon while using a parachute
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weapon
 * @returns {boolean}  
 */
export function canUseWeaponOnParachute(weapon: EWeaponType | number): boolean {
	const canUseWeaponOnParachute_result = Citizen.invokeNative<boolean>('0xBE2AF59B33F9F92A', weapon);
	return canUseWeaponOnParachute_result;
}