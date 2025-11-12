import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_AMMO
 *
 * 0x45FC566246B3511B

 * 
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @param {number} amountOfAmmo
 * @param {boolean} ignoreDeadCheck
 */
export function setPedAmmo(ped: PedIndex, typeOfWeapon: EWeaponType | number, amountOfAmmo: number, ignoreDeadCheck: boolean = false): void {
	const setPedAmmo_result = Citizen.invokeNative<void>('0x45FC566246B3511B', ped, typeOfWeapon, amountOfAmmo, ignoreDeadCheck);
	return setPedAmmo_result;
}