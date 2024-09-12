import { Vector3 } from '@ivanzaida/structures'

/**
 * DATAFILE:DATAARRAY_GET_VECTOR
 *
 * 0x83D3CBA972660C58

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} index
 * @returns {Vector3}  
 */
export function dataarrayGetVector(arr: string[], index: number): Vector3 {
	const dataarrayGetVector_result = Citizen.invokeNative<Vector3>('0x83D3CBA972660C58', arr, index);
	return dataarrayGetVector_result;
}