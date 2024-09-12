import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_COLLISION_NORMAL_OF_LAST_HIT_FOR_ENTITY
 *
 * 0xB6BF12B4CF844B3E

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function getCollisionNormalOfLastHitForEntity(entity: EntityIndex): Vector3 {
	const getCollisionNormalOfLastHitForEntity_result = Citizen.invokeNative<Vector3>('0xB6BF12B4CF844B3E', entity);
	return getCollisionNormalOfLastHitForEntity_result;
}