import { Vector3 } from '@ivanzaida/structures'

/**
 * MISC:GET_WIND_DIRECTION
 *
 * 0xF12BE04302B5836E

 * 
 * ------------------------------------------------------------------
 * @returns {Vector3}  
 */
export function getWindDirection(): Vector3 {
	const getWindDirection_result = Citizen.invokeNative<Vector3>('0xF12BE04302B5836E', );
	return getWindDirection_result;
}