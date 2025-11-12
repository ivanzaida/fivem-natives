import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_AIM_GUN_AT_ENTITY
 *
 * 0x646DE293036A3499

 * 
 * The first ped must have a gun and it must be his current weapon to use this command.
 * 
 * duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} duration
 * @param {boolean} instantBlendToAim
 */
export function taskAimGunAtEntity(ped: PedIndex, entity: EntityIndex, duration: number, instantBlendToAim: boolean = false): void {
	const taskAimGunAtEntity_result = Citizen.invokeNative<void>('0x646DE293036A3499', ped, entity, duration, instantBlendToAim);
	return taskAimGunAtEntity_result;
}