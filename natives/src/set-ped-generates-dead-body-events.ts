import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_GENERATES_DEAD_BODY_EVENTS
 *
 * 0x338FB3F98A204FD0

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} flag
 */
export function setPedGeneratesDeadBodyEvents(ped: PedIndex, flag: boolean): void {
	const setPedGeneratesDeadBodyEvents_result = Citizen.invokeNative<void>('0x338FB3F98A204FD0', ped, flag);
	return setPedGeneratesDeadBodyEvents_result;
}