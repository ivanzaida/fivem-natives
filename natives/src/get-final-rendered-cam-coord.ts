import { Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_FINAL_RENDERED_CAM_COORD
 *
 * 0x02AF3EA0F67D2329

 * 
 * ------------------------------------------------------------------
 * @returns {Vector3}  
 */
export function getFinalRenderedCamCoord(): Vector3 {
	const getFinalRenderedCamCoord_result = Citizen.invokeNative<Vector3>('0x02AF3EA0F67D2329', );
	return getFinalRenderedCamCoord_result;
}