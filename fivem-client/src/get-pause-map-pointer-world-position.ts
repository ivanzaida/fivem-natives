import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_PAUSE_MAP_POINTER_WORLD_POSITION
 *
 * 0xE5AF7A82

 * Returns the world position the pointer is hovering on the pause map.
 * 
 * ------------------------------------------------------------------
 * @returns {Vector3Ref}  A Vector3 with the pause map pointer world position X and Y values.
 */
export function getPauseMapPointerWorldPosition(): Vector3Ref {
	const getPauseMapPointerWorldPosition_result = Citizen.invokeNative<Vector3Ref>('0xE5AF7A82', );
	return getPauseMapPointerWorldPosition_result;
}