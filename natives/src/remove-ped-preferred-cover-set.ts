import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REMOVE_PED_PREFERRED_COVER_SET
 *
 * 0x97FD4A8DDB09A043

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function removePedPreferredCoverSet(ped: PedIndex): void {
	const removePedPreferredCoverSet_result = Citizen.invokeNative<void>('0x97FD4A8DDB09A043', ped);
	return removePedPreferredCoverSet_result;
}