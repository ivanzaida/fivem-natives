import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:UPDATE_TASK_SWEEP_AIM_ENTITY
 *
 * 0x2F1AD04B7C8A76C3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} targetEntity
 */
export function updateTaskSweepAimEntity(ped: PedIndex, targetEntity: EntityIndex): void {
	const updateTaskSweepAimEntity_result = Citizen.invokeNative<void>('0x2F1AD04B7C8A76C3', ped, targetEntity);
	return updateTaskSweepAimEntity_result;
}