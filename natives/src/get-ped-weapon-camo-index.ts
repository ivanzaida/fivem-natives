import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_WEAPON_CAMO_INDEX
 *
 * 0xB92D606AB30C334C

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @returns {number}  
 */
export function getPedWeaponCamoIndex(ped: PedIndex, weaponType: EWeaponType | number): number {
	const getPedWeaponCamoIndex_result = Citizen.invokeNative<number>('0xB92D606AB30C334C', ped, weaponType);
	return getPedWeaponCamoIndex_result;
}