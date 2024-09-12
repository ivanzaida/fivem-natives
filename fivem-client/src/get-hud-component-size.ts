import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_HUD_COMPONENT_SIZE
 *
 * 0X12217D33

 * 
 * ------------------------------------------------------------------
 * @param {number} id The hud component id.
 * @returns {Vector3Ref}  A Vector3 with the hud component size X and size Y values.
 */
export function getHudComponentSize(id: number): Vector3Ref {
	const getHudComponentSize_result = Citizen.invokeNative<Vector3Ref>('0X12217D33', id);
	return getHudComponentSize_result;
}