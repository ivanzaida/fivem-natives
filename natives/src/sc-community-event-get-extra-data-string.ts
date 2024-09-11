import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING
 *
 * 0xC337674BFF27442B

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataString(name: string, value: StringRef /* ptr */): boolean {
	const scCommunityEventGetExtraDataString_result = Citizen.invokeNative<boolean>('0xC337674BFF27442B', name, value.dataView);
	return scCommunityEventGetExtraDataString_result;
}