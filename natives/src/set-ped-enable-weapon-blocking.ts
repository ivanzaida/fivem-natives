import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ENABLE_WEAPON_BLOCKING
 *
 * 0x9590C8D34FFFCE10

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enableWeaponBlocking
 */
export function setPedEnableWeaponBlocking(ped: PedIndex, enableWeaponBlocking: boolean): void {
	const setPedEnableWeaponBlocking_result = Citizen.invokeNative<void>('0x9590C8D34FFFCE10', ped, enableWeaponBlocking);
	return setPedEnableWeaponBlocking_result;
}