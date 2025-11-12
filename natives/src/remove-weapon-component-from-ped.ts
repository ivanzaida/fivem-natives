import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:REMOVE_WEAPON_COMPONENT_FROM_PED
 *
 * 0x80E6FC2ACEAF8AA3

 * 
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EWeaponcomponentType} typeOfComponent
 */
export function removeWeaponComponentFromPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, typeOfComponent: EWeaponcomponentType | number): void {
	const removeWeaponComponentFromPed_result = Citizen.invokeNative<void>('0x80E6FC2ACEAF8AA3', ped, typeOfWeapon, typeOfComponent);
	return removeWeaponComponentFromPed_result;
}