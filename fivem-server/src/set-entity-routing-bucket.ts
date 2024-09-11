import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_ROUTING_BUCKET
 *
 * 0X635E5289

 * Sets the routing bucket for the specified entity.Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to set the routing bucket for.
 * @param {number} bucket The bucket ID.
 */
export function setEntityRoutingBucket(entity: EntityIndex, bucket: number): void {
	const setEntityRoutingBucket_result = Citizen.invokeNative<void>('0X635E5289', entity, bucket);
	return setEntityRoutingBucket_result;
}