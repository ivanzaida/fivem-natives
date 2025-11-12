import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_CAN_PED_SELECT_INVENTORY_WEAPON
 *
 * 0xC3A0D70539BCA8F9

 * 
 * Disables selecting the given weapon. Ped isn't forced to put the gun away. However you can't reselect the weapon if you holster then unholster. Weapon is also grayed out on the weapon wheel.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponHash
 * @param {boolean} canSelect
 */
export function setCanPedSelectInventoryWeapon(ped: PedIndex, weaponHash: EWeaponType | number, canSelect: boolean): void {
	const setCanPedSelectInventoryWeapon_result = Citizen.invokeNative<void>('0xC3A0D70539BCA8F9', ped, weaponHash, canSelect);
	return setCanPedSelectInventoryWeapon_result;
}