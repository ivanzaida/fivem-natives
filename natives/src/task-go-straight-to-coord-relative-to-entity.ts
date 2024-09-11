import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_STRAIGHT_TO_COORD_RELATIVE_TO_ENTITY
 *
 * 0x3713EFBC9B9F5150

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} moveBlendRatio
 * @param {number} time Is chosen to be 1 the ped will never warp.
 */
export function taskGoStraightToCoordRelativeToEntity(ped: PedIndex, entity: EntityIndex, offsetX: number, offsetY: number, offsetZ: number, moveBlendRatio: number, time: number = 20000): void {
	const taskGoStraightToCoordRelativeToEntity_result = Citizen.invokeNative<void>('0x3713EFBC9B9F5150', ped, entity, offsetX, offsetY, offsetZ, moveBlendRatio, time);
	return taskGoStraightToCoordRelativeToEntity_result;
}