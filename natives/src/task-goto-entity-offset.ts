import { PedIndex, EntityIndex, EEseekEntityOffsetFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_GOTO_ENTITY_OFFSET
 *
 * 0xF3812FC874B9C273

 * 
 * if Time is chosen to be -1 the ped will never warp.
 * 
 * enum ESEEK_ENTITY_OFFSET_FLAGS
 * {
 * 	ESEEK_OFFSET_ORIENTATES_WITH_ENTITY = 0x01,
 * 	ESEEK_KEEP_TO_PAVEMENTS = 0x02
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} time
 * @param {number} seekRadius
 * @param {number} seekAngle
 * @param {number} moveBlendRatio
 * @param {EEseekEntityOffsetFlags} offsetFlags
 */
export function taskGotoEntityOffset(ped: PedIndex, entity: EntityIndex, time: number = 20000, seekRadius: number = 0.5, seekAngle: number = 0, moveBlendRatio: number = 2, offsetFlags: EEseekEntityOffsetFlags | number = 0): void {
	const taskGotoEntityOffset_result = Citizen.invokeNative<void>('0xF3812FC874B9C273', ped, entity, time, seekRadius, seekAngle, moveBlendRatio, offsetFlags);
	return taskGotoEntityOffset_result;
}