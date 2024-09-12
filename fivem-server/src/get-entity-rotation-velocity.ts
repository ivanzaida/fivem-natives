import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ROTATION_VELOCITY
 *
 * 0x9BF8A73F

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function getEntityRotationVelocity(entity: EntityIndex): Vector3 {
	const getEntityRotationVelocity_result = Citizen.invokeNative<Vector3>('0x9BF8A73F', entity);
	return getEntityRotationVelocity_result;
}