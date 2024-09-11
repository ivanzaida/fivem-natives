import { FloatRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_FLOAT
 *
 * 0x8D59CDA8F573220D

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {FloatRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataFloat(name: string, value: FloatRef /* ptr */): boolean {
	const scCommunityEventGetExtraDataFloat_result = Citizen.invokeNative<boolean>('0x8D59CDA8F573220D', name, value.dataView);
	return scCommunityEventGetExtraDataFloat_result;
}