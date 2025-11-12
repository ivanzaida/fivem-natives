import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_TURN_PED_TO_FACE_ENTITY
 *
 * 0x0E95B96CFEFE7B61

 * 
 * duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} time
 */
export function taskTurnPedToFaceEntity(ped: PedIndex, entity: EntityIndex, time: number = 0): void {
	const taskTurnPedToFaceEntity_result = Citizen.invokeNative<void>('0x0E95B96CFEFE7B61', ped, entity, time);
	return taskTurnPedToFaceEntity_result;
}