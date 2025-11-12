import { PedIndex, EWeaponType, EGeneralweaponType } from '@ivanzaida/structures'

/**
 * WEAPON:HAS_PED_GOT_WEAPON
 *
 * 0x66B90BA528CFEBCE

 * 
 * p2 should be FALSE, otherwise it seems to always return FALSE
 * 
 * Bool does not check if the weapon is current equipped, unfortunately.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EGeneralweaponType} generalWeaponType
 * @returns {boolean}  
 */
export function hasPedGotWeapon(ped: PedIndex, typeOfWeapon: EWeaponType | number, generalWeaponType: EGeneralweaponType | number = 0): boolean {
	const hasPedGotWeapon_result = Citizen.invokeNative<boolean>('0x66B90BA528CFEBCE', ped, typeOfWeapon, generalWeaponType);
	return hasPedGotWeapon_result;
}