import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_COLLISION_DISABLED
 *
 * 0x8473361800D1B85B

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function getEntityCollisionDisabled(entity: EntityIndex): boolean {
	const getEntityCollisionDisabled_result = Citizen.invokeNative<boolean>('0x8473361800D1B85B', entity);
	return getEntityCollisionDisabled_result;
}