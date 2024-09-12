import { CoverpointIndex, Vector3 } from '@ivanzaida/structures'

/**
 * TASK:GET_SCRIPTED_COVER_POINT_COORDS
 *
 * 0x8E8BD1A76D6D9230

 * 
 * ------------------------------------------------------------------
 * @param {CoverpointIndex} index
 * @returns {Vector3}  
 */
export function getScriptedCoverPointCoords(index: CoverpointIndex): Vector3 {
	const getScriptedCoverPointCoords_result = Citizen.invokeNative<Vector3>('0x8E8BD1A76D6D9230', index);
	return getScriptedCoverPointCoords_result;
}