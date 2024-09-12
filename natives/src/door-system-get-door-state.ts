import { EDoorState } from '@ivanzaida/structures'

/**
 * OBJECT:DOOR_SYSTEM_GET_DOOR_STATE
 *
 * 0x117BCCA03F7A311A

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {EDoorState}  
 */
export function doorSystemGetDoorState(doorEnumHash: number): EDoorState {
	const doorSystemGetDoorState_result = Citizen.invokeNative<EDoorState>('0x117BCCA03F7A311A', doorEnumHash);
	return doorSystemGetDoorState_result;
}