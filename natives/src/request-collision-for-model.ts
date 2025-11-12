import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:REQUEST_COLLISION_FOR_MODEL
 *
 * 0x91AA33D82EA60124

 * 
 * If you need the collision for that object
 * immediately you will need to call LOAD_ALL_OBJECTS_NOW and create the object in the same frame, otherwise the
 * collision management code will delete the collision you requested
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 */
export function requestCollisionForModel(model: ModelNames): void {
	const requestCollisionForModel_result = Citizen.invokeNative<void>('0x91AA33D82EA60124', model);
	return requestCollisionForModel_result;
}