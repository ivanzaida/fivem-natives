import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_DISPLAY_NAME
 *
 * 0xD0333868D1D47D97

 * 
 * ------------------------------------------------------------------
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetDisplayName(value: StringRef /* ptr */): boolean {
	const scCommunityEventGetDisplayName_result = Citizen.invokeNative<boolean>('0xD0333868D1D47D97', value.dataView);
	return scCommunityEventGetDisplayName_result;
}