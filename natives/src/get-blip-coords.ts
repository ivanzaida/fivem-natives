import { BlipIndex, Vector3 } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_COORDS
 *
 * 0x3CF9D442F2C902BD

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {Vector3}  
 */
export function getBlipCoords(blip: BlipIndex): Vector3 {
	const getBlipCoords_result = Citizen.invokeNative<Vector3>('0x3CF9D442F2C902BD', blip);
	return getBlipCoords_result;
}