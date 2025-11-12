import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_NET_TYPE_FROM_ENTITY
 *
 * 0x23B2A641

 * Gets the specific entity type (as an integer), which can be one of the following defined down below:
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the specific type of.
 * @returns {number}  The specific entity type returned as an integer value or -1 if the entity is invalid.
 */
export function getNetTypeFromEntity(entity: EntityIndex): number {
	const getNetTypeFromEntity_result = Citizen.invokeNative<number>('0x23B2A641', entity);
	return getNetTypeFromEntity_result;
}