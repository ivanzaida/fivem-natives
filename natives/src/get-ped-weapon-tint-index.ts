import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_WEAPON_TINT_INDEX
 *
 * 0x6C81F95CADD1E6D0

 * 
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function getPedWeaponTintIndex(ped: PedIndex, weaponType: EWeaponType | number): number {
	const getPedWeaponTintIndex_result = Citizen.invokeNative<number>('0x6C81F95CADD1E6D0', ped, weaponType);
	return getPedWeaponTintIndex_result;
}