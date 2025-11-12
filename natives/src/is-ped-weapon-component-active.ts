import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:IS_PED_WEAPON_COMPONENT_ACTIVE
 *
 * 0x85718B993F8FC553

 * 
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EWeaponcomponentType} typeOfComponent
 * @returns {boolean}  
 */
export function isPedWeaponComponentActive(ped: PedIndex, typeOfWeapon: EWeaponType | number, typeOfComponent: EWeaponcomponentType | number): boolean {
	const isPedWeaponComponentActive_result = Citizen.invokeNative<boolean>('0x85718B993F8FC553', ped, typeOfWeapon, typeOfComponent);
	return isPedWeaponComponentActive_result;
}