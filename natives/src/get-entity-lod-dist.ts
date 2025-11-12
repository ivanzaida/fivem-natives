import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_LOD_DIST
 *
 * 0x5748CF36AE9EC4E1

 * 
 * Returns the LOD distance of an entity.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityLodDist(entity: EntityIndex): number {
	const getEntityLodDist_result = Citizen.invokeNative<number>('0x5748CF36AE9EC4E1', entity);
	return getEntityLodDist_result;
}