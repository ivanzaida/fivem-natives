import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_DISPLAY_NAME_FOR_TYPE
 *
 * 0xD078F914C227CF7B

 * 
 * ------------------------------------------------------------------
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetDisplayNameForType(value: StringRef /* ptr */): boolean {
	const scCommunityEventGetDisplayNameForType_result = Citizen.invokeNative<boolean>('0xD078F914C227CF7B', value.dataView);
	return scCommunityEventGetDisplayNameForType_result;
}