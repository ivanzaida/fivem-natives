import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_IS_AVOIDED_BY_OTHERS
 *
 * 0xC55B2DE435555EC3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} state
 */
export function setPedIsAvoidedByOthers(ped: PedIndex, state: boolean): void {
	const setPedIsAvoidedByOthers_result = Citizen.invokeNative<void>('0xC55B2DE435555EC3', ped, state);
	return setPedIsAvoidedByOthers_result;
}