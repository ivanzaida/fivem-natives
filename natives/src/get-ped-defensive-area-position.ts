import { PedIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PED:GET_PED_DEFENSIVE_AREA_POSITION
 *
 * 0x93B95A59CB61088B

 * 
 * Will return a zero vector if the requested defensive area does not exist
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} applyToSecondaryDefensiveArea If true will get you the position of the secondary area
 * @returns {Vector3}  
 */
export function getPedDefensiveAreaPosition(ped: PedIndex, applyToSecondaryDefensiveArea: boolean = false): Vector3 {
	const getPedDefensiveAreaPosition_result = Citizen.invokeNative<Vector3>('0x93B95A59CB61088B', ped, applyToSecondaryDefensiveArea);
	return getPedDefensiveAreaPosition_result;
}