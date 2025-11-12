import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_SPEED_VECTOR
 *
 * 0x4ED40BE47D8C1896

 * 
 * Relative can be used for getting speed relative to the frame of the vehicle, to determine for example, if you are going in reverse (-y speed) or not (+y speed).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} localResult Gives the result in local coordinates to the entity (x=right, y=forward, z=up)
 * @returns {Vector3}  
 */
export function getEntitySpeedVector(entity: EntityIndex, localResult: boolean = false): Vector3 {
	const getEntitySpeedVector_result = Citizen.invokeNative<Vector3>('0x4ED40BE47D8C1896', entity, localResult);
	return getEntitySpeedVector_result;
}