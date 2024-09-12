import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_IGNORE_REQUEST_CONTROL_FILTER
 *
 * 0x9F7F8D36

 * It allows to flag an entity to ignore the request control filter policy.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity handle to ignore the request control filter.
 * @param {boolean} ignore Define if the entity ignores the request control filter policy.
 */
export function setEntityIgnoreRequestControlFilter(entity: EntityIndex, ignore: boolean): void {
	const setEntityIgnoreRequestControlFilter_result = Citizen.invokeNative<void>('0x9F7F8D36', entity, ignore);
	return setEntityIgnoreRequestControlFilter_result;
}