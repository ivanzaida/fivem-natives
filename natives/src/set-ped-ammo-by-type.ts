import { PedIndex, EAmmoType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_AMMO_BY_TYPE
 *
 * 0x8DF178F67D660DC7

 * 
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAmmoType} ammoType
 * @param {number} ammoAmount
 */
export function setPedAmmoByType(ped: PedIndex, ammoType: EAmmoType | number, ammoAmount: number): void {
	const setPedAmmoByType_result = Citizen.invokeNative<void>('0x8DF178F67D660DC7', ped, ammoType, ammoAmount);
	return setPedAmmoByType_result;
}