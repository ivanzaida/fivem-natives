import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:SET_PED_AMMO_TO_DROP
 *
 * 0x5BD5570DF8DB6C39

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} ammoAmount
 */
export function setPedAmmoToDrop(ped: PedIndex, ammoAmount: number): void {
	const setPedAmmoToDrop_result = Citizen.invokeNative<void>('0x5BD5570DF8DB6C39', ped, ammoAmount);
	return setPedAmmoToDrop_result;
}