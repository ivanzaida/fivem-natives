import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_FOLLOW_TO_OFFSET_OF_ENTITY
 *
 * 0x329B82704ED2A3E3

 * 
 * p6 always -1
 * p7 always 10.0
 * p8 always 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} moveBlendRatio
 * @param {number} time = 1 indicates continuous follow behaviour.
 * @param {number} radius
 * @param {boolean} relativeOffset
 */
export function taskFollowToOffsetOfEntity(ped: PedIndex, entity: EntityIndex, offsetX: number, offsetY: number, offsetZ: number, moveBlendRatio: number, time: number = 1, radius: number = 0.1, relativeOffset: boolean = true): void {
	const taskFollowToOffsetOfEntity_result = Citizen.invokeNative<void>('0x329B82704ED2A3E3', ped, entity, offsetX, offsetY, offsetZ, moveBlendRatio, time, radius, relativeOffset);
	return taskFollowToOffsetOfEntity_result;
}