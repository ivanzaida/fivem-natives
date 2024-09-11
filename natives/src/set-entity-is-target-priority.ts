import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_IS_TARGET_PRIORITY
 *
 * 0x87EDE48547CC8942

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} highPriority
 * @param {number} targetableDistance
 */
export function setEntityIsTargetPriority(entity: EntityIndex, highPriority: boolean, targetableDistance: number = 0): void {
	const setEntityIsTargetPriority_result = Citizen.invokeNative<void>('0x87EDE48547CC8942', entity, highPriority, targetableDistance);
	return setEntityIsTargetPriority_result;
}