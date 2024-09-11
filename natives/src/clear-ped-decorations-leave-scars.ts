import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_DECORATIONS_LEAVE_SCARS
 *
 * 0x98E00E3ED7D61628

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedDecorationsLeaveScars(ped: PedIndex): void {
	const clearPedDecorationsLeaveScars_result = Citizen.invokeNative<void>('0x98E00E3ED7D61628', ped);
	return clearPedDecorationsLeaveScars_result;
}