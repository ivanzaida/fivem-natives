import { EDatafileType } from '@ivanzaida/structures'

/**
 * DATAFILE:DATADICT_GET_TYPE
 *
 * 0xA8F96580C10C5F9E

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
 * @param {string} dict
 * @param {string} name
 * @returns {EDatafileType}  
 */
export function datadictGetType(dict: string, name: string): EDatafileType {
	const datadictGetType_result = Citizen.invokeNative<EDatafileType>('0xA8F96580C10C5F9E', dict, name);
	return datadictGetType_result;
}