import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_GAMERDATA_GET_STRING
 *
 * 0xA11E96BAF56824EE

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scGamerdataGetString(name: string, value: StringRef /* ptr */): boolean {
	const scGamerdataGetString_result = Citizen.invokeNative<boolean>('0xA11E96BAF56824EE', name, value.dataView);
	return scGamerdataGetString_result;
}