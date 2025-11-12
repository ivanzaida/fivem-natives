import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_FORWARD_VECTOR
 *
 * 0x90D0E0397D3F7690

 * 
 * Gets the entity's forward vector.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {Vector3}  
 */
export function getEntityForwardVector(entity: EntityIndex): Vector3 {
	const getEntityForwardVector_result = Citizen.invokeNative<Vector3>('0x90D0E0397D3F7690', entity);
	return getEntityForwardVector_result;
}