import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ORPHAN_MODE
 *
 * 0xD16EA02F

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the orphan mode of
 * @returns {number}  Returns the entities current orphan mode, refer to enum in [SET_ENTITY_ORPHAN_MODE](#_0x489E9162)
 */
export function getEntityOrphanMode(entity: EntityIndex): number {
	const getEntityOrphanMode_result = Citizen.invokeNative<number>('0xD16EA02F', entity);
	return getEntityOrphanMode_result;
}