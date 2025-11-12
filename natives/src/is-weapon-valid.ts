import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:IS_WEAPON_VALID
 *
 * 0x2A9ED010C087BF2B

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} typeOfWeapon
 * @returns {boolean}  
 */
export function isWeaponValid(typeOfWeapon: EWeaponType | number): boolean {
	const isWeaponValid_result = Citizen.invokeNative<boolean>('0x2A9ED010C087BF2B', typeOfWeapon);
	return isWeaponValid_result;
}