import { ObjectIndex } from '@ivanzaida/structures'

/**
 * CAM:DISABLE_CAM_COLLISION_FOR_OBJECT
 *
 * 0x148A0A307698B29B

 * 
 * This will allow the camera to clip into the object.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function disableCamCollisionForObject(object: ObjectIndex): void {
	const disableCamCollisionForObject_result = Citizen.invokeNative<void>('0x148A0A307698B29B', object);
	return disableCamCollisionForObject_result;
}