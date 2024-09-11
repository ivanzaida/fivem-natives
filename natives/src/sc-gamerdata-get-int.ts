import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_GAMERDATA_GET_INT
 *
 * 0x1B6B8B2C731B0C3B

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {IntRef} value [Ref]
 * @returns {boolean}  
 */
export function scGamerdataGetInt(name: string, value: IntRef /* ptr */): boolean {
	const scGamerdataGetInt_result = Citizen.invokeNative<boolean>('0x1B6B8B2C731B0C3B', name, value.dataView);
	return scGamerdataGetInt_result;
}