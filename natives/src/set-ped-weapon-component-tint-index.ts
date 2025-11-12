import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_WEAPON_COMPONENT_TINT_INDEX
 *
 * 0x834F4286803834DE

 * 
 * Colors:
 * 0 = Gray
 * 1 = Dark Gray
 * 2 = Black
 * 3 = White
 * 4 = Blue
 * 5 = Cyan
 * 6 = Aqua
 * 7 = Cool Blue
 * 8 = Dark Blue
 * 9 = Royal Blue
 * 10 = Plum
 * 11 = Dark Purple
 * 12 = Purple
 * 13 = Red
 * 14 = Wine Red
 * 15 = Magenta
 * 16 = Pink
 * 17 = Salmon
 * 18 = Hot Pink
 * 19 = Rust Orange
 * 20 = Brown
 * 21 = Earth
 * 22 = Orange
 * 23 = Light Orange
 * 24 = Dark Yellow
 * 25 = Yellow
 * 26 = Light Brown
 * 27 = Lime Green
 * 28 = Olive
 * 29 = Moss
 * 30 = Turquoise
 * 31 = Dark Green
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {EWeaponcomponentType} componentType
 * @param {number} tint
 */
export function setPedWeaponComponentTintIndex(ped: PedIndex, weaponType: EWeaponType | number, componentType: EWeaponcomponentType | number, tint: number): void {
	const setPedWeaponComponentTintIndex_result = Citizen.invokeNative<void>('0x834F4286803834DE', ped, weaponType, componentType, tint);
	return setPedWeaponComponentTintIndex_result;
}