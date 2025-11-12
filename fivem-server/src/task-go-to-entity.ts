import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_GO_TO_ENTITY
 *
 * 0x374827C2

 * 
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * 
 * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
 * 
 * Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
 * 
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 * 
 * enum EGOTO_ENTITY_SCRIPT_FLAGS
 * {
 * 	EGOTO_ENTITY_NEVER_SLOW_FOR_PATH_LENGTH = 0x01,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EntityIndex} target
 * @param {number} duration
 * @param {number} distance
 * @param {number} speed
 * @param {number} p5
 * @param {number} p6
 */
export function taskGoToEntity(entity: EntityIndex, target: EntityIndex, duration: number, distance: number, speed: number, p5: number, p6: number): void {
	const taskGoToEntity_result = Citizen.invokeNative<void>('0x374827C2', entity, target, duration, distance, speed, p5, p6);
	return taskGoToEntity_result;
}