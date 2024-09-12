import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:_GET_LAST_ENTITY_HIT_BY_ENTITY
 *
 * 0xDA02F6FBBDEBF43D

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {EntityIndex}  
 */
export function getLastEntityHitByEntity(entity: EntityIndex): EntityIndex {
	const getLastEntityHitByEntity_result = Citizen.invokeNative<EntityIndex>('0xDA02F6FBBDEBF43D', entity);
	return getLastEntityHitByEntity_result;
}