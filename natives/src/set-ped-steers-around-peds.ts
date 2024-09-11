import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STEERS_AROUND_PEDS
 *
 * 0x639E8A4EA31DD813

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} state
 */
export function setPedSteersAroundPeds(ped: PedIndex, state: boolean): void {
	const setPedSteersAroundPeds_result = Citizen.invokeNative<void>('0x639E8A4EA31DD813', ped, state);
	return setPedSteersAroundPeds_result;
}