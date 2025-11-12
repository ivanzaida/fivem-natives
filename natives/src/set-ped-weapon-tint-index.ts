import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_WEAPON_TINT_INDEX
 *
 * 0xC37D2709B04BD397

 * 
 * tintIndex can be the following:
 * 
 * 0 - Normal
 * 1 - Green
 * 2 - Gold
 * 3 - Pink
 * 4 - Army
 * 5 - LSPD
 * 6 - Orange
 * 7 - Platinum
 * Full list of weapons, components & tint indexes by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {number} tint
 */
export function setPedWeaponTintIndex(ped: PedIndex, weaponType: EWeaponType | number, tint: number): void {
	const setPedWeaponTintIndex_result = Citizen.invokeNative<void>('0xC37D2709B04BD397', ped, weaponType, tint);
	return setPedWeaponTintIndex_result;
}