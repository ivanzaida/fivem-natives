import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_COLLISION_DISABLED
 *
 * 0xE8C0C629

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The target entity.
 * @returns {boolean}  
 */
export function getEntityCollisionDisabled(entity: EntityIndex): boolean {
	const getEntityCollisionDisabled_result = Citizen.invokeNative<boolean>('0xE8C0C629', entity);
	return getEntityCollisionDisabled_result;
}