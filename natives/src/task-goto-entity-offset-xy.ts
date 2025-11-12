import { PedIndex, EntityIndex, EEseekEntityOffsetFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_GOTO_ENTITY_OFFSET_XY
 *
 * 0x35CBF41D628A3871

 * 
 * if Time is chosen to be -1 the ped will never warp.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} time
 * @param {number} targetRadius
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} moveBlendRatio
 * @param {EEseekEntityOffsetFlags} offsetFlags
 */
export function taskGotoEntityOffsetXy(ped: PedIndex, entity: EntityIndex, time: number = 20000, targetRadius: number = 0.5, xOffset: number = 0, yOffset: number = 0, moveBlendRatio: number = 2, offsetFlags: EEseekEntityOffsetFlags | number = 0): void {
	const taskGotoEntityOffsetXy_result = Citizen.invokeNative<void>('0x35CBF41D628A3871', ped, entity, time, targetRadius, xOffset, yOffset, moveBlendRatio, offsetFlags);
	return taskGotoEntityOffsetXy_result;
}