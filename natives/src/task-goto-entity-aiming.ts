import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GOTO_ENTITY_AIMING
 *
 * 0xA1EF3D61667DA3F4

 * 
 * eg
 * 
 *  TASK::TASK_GOTO_ENTITY_AIMING(v_2, PLAYER::PLAYER_PED_ID(), 5.0, 25.0);
 * 
 * ped = Ped you want to perform this task.
 * target = the Entity they should aim at.
 * distanceToStopAt = distance from the target, where the ped should stop to aim.
 * StartAimingDist = distance where the ped should start to aim.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} seekRadius
 * @param {number} aimRadius
 */
export function taskGotoEntityAiming(ped: PedIndex, entity: EntityIndex, seekRadius: number, aimRadius: number): void {
	const taskGotoEntityAiming_result = Citizen.invokeNative<void>('0xA1EF3D61667DA3F4', ped, entity, seekRadius, aimRadius);
	return taskGotoEntityAiming_result;
}