import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PARACHUTE_TO_TARGET
 *
 * 0xD62DC69EB22834CE

 * 
 * makes ped parachute to coords x y z. Works well with PATHFIND::GET_SAFE_COORD_FOR_PED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetLocationX
 * @param {number} targetLocationY
 * @param {number} targetLocationZ
 */
export function taskParachuteToTarget(ped: PedIndex, targetLocationX: number, targetLocationY: number, targetLocationZ: number): void {
	const taskParachuteToTarget_result = Citizen.invokeNative<void>('0xD62DC69EB22834CE', ped, targetLocationX, targetLocationY, targetLocationZ);
	return taskParachuteToTarget_result;
}