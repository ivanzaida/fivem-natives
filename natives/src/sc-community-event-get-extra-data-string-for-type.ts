import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING_FOR_TYPE
 *
 * 0x0D777171FC10DBDA

 * 
 * ------------------------------------------------------------------
 * @param {string} name
 * @param {StringRef} value [Ref]
 * @param {string} eventType
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataStringForType(name: string, value: StringRef /* ptr */, eventType: string): boolean {
	const scCommunityEventGetExtraDataStringForType_result = Citizen.invokeNative<boolean>('0x0D777171FC10DBDA', name, value.dataView, eventType);
	return scCommunityEventGetExtraDataStringForType_result;
}