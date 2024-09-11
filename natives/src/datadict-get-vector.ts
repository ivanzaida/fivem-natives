import { Vector3 } from '@ivanzaida/structures'

/**
 * DATAFILE:DATADICT_GET_VECTOR
 *
 * 0xEF1E4460FF33D01E

 * 
 * ------------------------------------------------------------------
 * @param {string} dict
 * @param {string} name
 * @returns {Vector3}  
 */
export function datadictGetVector(dict: string, name: string): Vector3 {
	const datadictGetVector_result = Citizen.invokeNative<Vector3>('0xEF1E4460FF33D01E', dict, name);
	return datadictGetVector_result;
}