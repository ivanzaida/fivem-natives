import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_VELOCITY
 *
 * 0xC14C9B6B

 * 
 * Gets the current velocity of the entity. If the entity is a ped in a vehicle, then the
 * velocity of the vehicle is returned;
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function getEntityVelocity(entity: EntityIndex): Vector3 {
	const getEntityVelocity_result = Citizen.invokeNative<Vector3>('0xC14C9B6B', entity);
	return getEntityVelocity_result;
}