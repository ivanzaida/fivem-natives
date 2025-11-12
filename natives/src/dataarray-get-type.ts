import { EDatafileType } from '@ivanzaida/structures'

/**
 * DATAFILE:DATAARRAY_GET_TYPE
 *
 * 0x939FE19A2CFC3266

 * 
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} index
 * @returns {EDatafileType}  
 */
export function dataarrayGetType(arr: string[], index: number): EDatafileType {
	const dataarrayGetType_result = Citizen.invokeNative<EDatafileType>('0x939FE19A2CFC3266', arr, index);
	return dataarrayGetType_result;
}