import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * CFX:REMOVE_WEAPON_COMPONENT_FROM_PED
 *
 * 0X412AA00D

 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EWeaponcomponentType} typeOfComponent
 */
export function removeWeaponComponentFromPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, typeOfComponent: EWeaponcomponentType | number): void {
	const removeWeaponComponentFromPed_result = Citizen.invokeNative<void>('0X412AA00D', ped, typeOfWeapon, typeOfComponent);
	return removeWeaponComponentFromPed_result;
}