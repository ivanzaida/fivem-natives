import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:GIVE_WEAPON_COMPONENT_TO_PED
 *
 * 0x6D5FA72F8C43D132

 * 
 * Full list of weapons & components by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {EWeaponcomponentType} typeOfComponent
 */
export function giveWeaponComponentToPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, typeOfComponent: EWeaponcomponentType | number): void {
	const giveWeaponComponentToPed_result = Citizen.invokeNative<void>('0x6D5FA72F8C43D132', ped, typeOfWeapon, typeOfComponent);
	return giveWeaponComponentToPed_result;
}