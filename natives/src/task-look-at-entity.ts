import { PedIndex, EntityIndex, EScriptLookFlag, EScriptLookPriority } from '@ivanzaida/structures'

/**
 * TASK:TASK_LOOK_AT_ENTITY
 *
 * 0xE67051907958B5EB

 * 
 * For flags, please refer to TASK_LOOK_AT_COORD.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} time
 * @param {EScriptLookFlag} lookFlags
 * @param {EScriptLookPriority} priority
 */
export function taskLookAtEntity(ped: PedIndex, entity: EntityIndex, time: number, lookFlags: EScriptLookFlag | number = 0, priority: EScriptLookPriority | number = 2): void {
	const taskLookAtEntity_result = Citizen.invokeNative<void>('0xE67051907958B5EB', ped, entity, time, lookFlags, priority);
	return taskLookAtEntity_result;
}