import { ObjectIndex, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:REMOVE_WEAPON_COMPONENT_FROM_WEAPON_OBJECT
 *
 * 0xFA13077979C3DCB9

 * 
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {EWeaponcomponentType} weaponComponent
 */
export function removeWeaponComponentFromWeaponObject(weaponObject: ObjectIndex, weaponComponent: EWeaponcomponentType | number): void {
	const removeWeaponComponentFromWeaponObject_result = Citizen.invokeNative<void>('0xFA13077979C3DCB9', weaponObject, weaponComponent);
	return removeWeaponComponentFromWeaponObject_result;
}