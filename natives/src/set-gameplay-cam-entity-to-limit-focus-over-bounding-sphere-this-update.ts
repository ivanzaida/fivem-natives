import { EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_CAM_ENTITY_TO_LIMIT_FOCUS_OVER_BOUNDING_SPHERE_THIS_UPDATE
 *
 * 0xFE751F9213345C58

 * 
 * The gameplay camera will prevent the adaptive depth of field focus distance from going beyond the bounding sphere of this entity, so long as the camera (the centre of the frame) is pointing at it, on this update (only.) This setting automatically resets for safety.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} index
 */
export function setGameplayCamEntityToLimitFocusOverBoundingSphereThisUpdate(index: EntityIndex): void {
	const setGameplayCamEntityToLimitFocusOverBoundingSphereThisUpdate_result = Citizen.invokeNative<void>('0xFE751F9213345C58', index);
	return setGameplayCamEntityToLimitFocusOverBoundingSphereThisUpdate_result;
}