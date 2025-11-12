import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_VELOCITY
 *
 * 0xE5741C6B6539231F

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
	const getEntityVelocity_result = Citizen.invokeNative<Vector3>('0xE5741C6B6539231F', entity);
	return getEntityVelocity_result;
}