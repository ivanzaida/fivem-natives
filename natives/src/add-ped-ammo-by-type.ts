import { PedIndex, EAmmoType } from '@ivanzaida/structures'

/**
 * WEAPON:ADD_PED_AMMO_BY_TYPE
 *
 * 0x5D80B7A4B4BA4D49

 * 
 * Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAmmoType} ammoType
 * @param {number} ammoAmount
 */
export function addPedAmmoByType(ped: PedIndex, ammoType: EAmmoType | number, ammoAmount: number): void {
	const addPedAmmoByType_result = Citizen.invokeNative<void>('0x5D80B7A4B4BA4D49', ped, ammoType, ammoAmount);
	return addPedAmmoByType_result;
}