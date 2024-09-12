import { FloatRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_GAMERDATA_GET_FLOAT
 *
 * 0x974E385E2B593AD0

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {FloatRef} value [Ref]
 * @returns {boolean}  
 */
export function scGamerdataGetFloat(name: string, value: FloatRef /* ptr */): boolean {
	const scGamerdataGetFloat_result = Citizen.invokeNative<boolean>('0x974E385E2B593AD0', name, value.dataView);
	return scGamerdataGetFloat_result;
}