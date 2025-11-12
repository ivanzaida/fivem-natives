import { PedIndex, EntityIndex, EEgotoEntityFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_ENTITY
 *
 * 0xAB3658A740EED98E

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
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} time Is chosen to be 1 the ped will never warp.
 * @param {number} seekRadius
 * @param {number} moveBlendRatio
 * @param {number} slowDownDistance
 * @param {EEgotoEntityFlags} gotoFlags
 */
export function taskGoToEntity(ped: PedIndex, entity: EntityIndex, time: number = 20000, seekRadius: number = 0.5, moveBlendRatio: number = 2, slowDownDistance: number = 2, gotoFlags: EEgotoEntityFlags | number = 0): void {
	const taskGoToEntity_result = Citizen.invokeNative<void>('0xAB3658A740EED98E', ped, entity, time, seekRadius, moveBlendRatio, slowDownDistance, gotoFlags);
	return taskGoToEntity_result;
}