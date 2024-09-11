import { EDoorState } from '@ivanzaida/structures'

/**
 * OBJECT:DOOR_SYSTEM_GET_DOOR_PENDING_STATE
 *
 * 0xE2A2194077783E19

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {EDoorState}  
 */
export function doorSystemGetDoorPendingState(doorEnumHash: number): EDoorState {
	const doorSystemGetDoorPendingState_result = Citizen.invokeNative<EDoorState>('0xE2A2194077783E19', doorEnumHash);
	return doorSystemGetDoorPendingState_result;
}