import { Vector3 } from '@ivanzaida/structures'

/**
 * CAM:GET_GAMEPLAY_CAM_COORD
 *
 * 0xCF141FCD0940B0A3

 * 
 * ------------------------------------------------------------------
 * @returns {Vector3}  
 */
export function getGameplayCamCoord(): Vector3 {
	const getGameplayCamCoord_result = Citizen.invokeNative<Vector3>('0xCF141FCD0940B0A3', );
	return getGameplayCamCoord_result;
}