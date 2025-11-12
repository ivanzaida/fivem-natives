import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:HAS_PED_GOT_WEAPON_COMPONENT
 *
 * 0x5EDED4B3E1A48E68

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
export function hasPedGotWeaponComponent(ped: PedIndex, typeOfWeapon: EWeaponType | number, typeOfComponent: EWeaponcomponentType | number): boolean {
	const hasPedGotWeaponComponent_result = Citizen.invokeNative<boolean>('0x5EDED4B3E1A48E68', ped, typeOfWeapon, typeOfComponent);
	return hasPedGotWeaponComponent_result;
}