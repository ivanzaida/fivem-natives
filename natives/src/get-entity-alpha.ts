import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_ALPHA
 *
 * 0x3D2DD3A02C8AA9A8

 * 
 * Return the alpha of an entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityAlpha(entity: EntityIndex): number {
	const getEntityAlpha_result = Citizen.invokeNative<number>('0x3D2DD3A02C8AA9A8', entity);
	return getEntityAlpha_result;
}