import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ROUTING_BUCKET
 *
 * 0XED4B0486

 * Gets the routing bucket for the specified entity.Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the routing bucket for.
 * @returns {number}  The routing bucket ID.
 */
export function getEntityRoutingBucket(entity: EntityIndex): number {
	const getEntityRoutingBucket_result = Citizen.invokeNative<number>('0XED4B0486', entity);
	return getEntityRoutingBucket_result;
}