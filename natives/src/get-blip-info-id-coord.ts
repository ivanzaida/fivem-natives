import { BlipIndex, Vector3 } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_INFO_ID_COORD
 *
 * 0x7DFE6973AE84B6ED

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blipId
 * @returns {Vector3}  
 */
export function getBlipInfoIdCoord(blipId: BlipIndex): Vector3 {
	const getBlipInfoIdCoord_result = Citizen.invokeNative<Vector3>('0x7DFE6973AE84B6ED', blipId);
	return getBlipInfoIdCoord_result;
}