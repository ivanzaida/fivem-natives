import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_DYNAMIC
 *
 * 0xC7D381E526A969D3

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} isDynamic
 */
export function setEntityDynamic(entity: EntityIndex, isDynamic: boolean): void {
	const setEntityDynamic_result = Citizen.invokeNative<void>('0xC7D381E526A969D3', entity, isDynamic);
	return setEntityDynamic_result;
}