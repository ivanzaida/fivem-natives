import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:ADD_AMMO_TO_PED
 *
 * 0x0574074EDCCCBD5E

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {number} amountOfAmmo
 */
export function addAmmoToPed(ped: PedIndex, typeOfWeapon: EWeaponType | number, amountOfAmmo: number): void {
	const addAmmoToPed_result = Citizen.invokeNative<void>('0x0574074EDCCCBD5E', ped, typeOfWeapon, amountOfAmmo);
	return addAmmoToPed_result;
}