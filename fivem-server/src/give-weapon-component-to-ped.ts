import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * CFX:GIVE_WEAPON_COMPONENT_TO_PED
 *
 * 0X3E1E286D

 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EWeaponcomponentType} typeOfComponent
 */
export function giveWeaponComponentToPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, typeOfComponent: EWeaponcomponentType | number): void {
	const giveWeaponComponentToPed_result = Citizen.invokeNative<void>('0X3E1E286D', ped, typeOfWeapon, typeOfComponent);
	return giveWeaponComponentToPed_result;
}