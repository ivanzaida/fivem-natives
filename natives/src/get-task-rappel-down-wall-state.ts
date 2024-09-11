import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:GET_TASK_RAPPEL_DOWN_WALL_STATE
 *
 * 0x29643B8A675F8422

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getTaskRappelDownWallState(ped: PedIndex): number {
	const getTaskRappelDownWallState_result = Citizen.invokeNative<number>('0x29643B8A675F8422', ped);
	return getTaskRappelDownWallState_result;
}