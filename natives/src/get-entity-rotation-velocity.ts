import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_ROTATION_VELOCITY
 *
 * 0x47507DD57C93B472

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function getEntityRotationVelocity(entity: EntityIndex): Vector3 {
	const getEntityRotationVelocity_result = Citizen.invokeNative<Vector3>('0x47507DD57C93B472', entity);
	return getEntityRotationVelocity_result;
}