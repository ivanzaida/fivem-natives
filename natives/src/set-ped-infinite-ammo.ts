import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_INFINITE_AMMO
 *
 * 0xA83DA0A0DF32920C

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} infinite
 * @param {EWeaponType} typeOfWeapon
 */
export function setPedInfiniteAmmo(ped: PedIndex, infinite: boolean, typeOfWeapon: EWeaponType | number = 0): void {
	const setPedInfiniteAmmo_result = Citizen.invokeNative<void>('0xA83DA0A0DF32920C', ped, infinite, typeOfWeapon);
	return setPedInfiniteAmmo_result;
}