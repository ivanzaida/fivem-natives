import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_DROPS_INVENTORY_WEAPON
 *
 * 0x6D796FB2594CA190

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} ammoAmount
 */
export function setPedDropsInventoryWeapon(ped: PedIndex, weaponType: EWeaponType | number, offsetX: number, offsetY: number, offsetZ: number, ammoAmount: number): void {
	const setPedDropsInventoryWeapon_result = Citizen.invokeNative<void>('0x6D796FB2594CA190', ped, weaponType, offsetX, offsetY, offsetZ, ammoAmount);
	return setPedDropsInventoryWeapon_result;
}