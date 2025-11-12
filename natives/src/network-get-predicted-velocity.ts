import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PREDICTED_VELOCITY
 *
 * 0xD23AF6BA9E38FE33

 * 
 * Returns the predicted velocity of a clone entity. Don't use it on local entities
 * maxSpeedToPredict should be set to the maximum we think this entity can travel (meter/second)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} maxSpeedToPredict
 * @returns {Vector3}  
 */
export function networkGetPredictedVelocity(entity: EntityIndex, maxSpeedToPredict: number): Vector3 {
	const networkGetPredictedVelocity_result = Citizen.invokeNative<Vector3>('0xD23AF6BA9E38FE33', entity, maxSpeedToPredict);
	return networkGetPredictedVelocity_result;
}