import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_TREATED_AS_FRIENDLY
 *
 * 0x3B3AC5F69E21EAB7

 * 
 * This sets the ped to be treated as if it was in a friendly relationship with everyone.
 * Stops the ped from being damaged, targeted, locked on or being shot at. Can't be set on players, only peds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 * @param {boolean} localOnly
 */
export function setPedTreatedAsFriendly(ped: PedIndex, enable: boolean, localOnly: boolean = false): void {
	const setPedTreatedAsFriendly_result = Citizen.invokeNative<void>('0x3B3AC5F69E21EAB7', ped, enable, localOnly);
	return setPedTreatedAsFriendly_result;
}