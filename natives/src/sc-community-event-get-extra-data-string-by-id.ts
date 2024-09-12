import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EXTRA_DATA_STRING_BY_ID
 *
 * 0x59632E3312C5FFDF

 * 
 * ------------------------------------------------------------------
 * @param {number} eventId
 * @param {string} name
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetExtraDataStringById(eventId: number, name: string, value: StringRef /* ptr */): boolean {
	const scCommunityEventGetExtraDataStringById_result = Citizen.invokeNative<boolean>('0x59632E3312C5FFDF', eventId, name, value.dataView);
	return scCommunityEventGetExtraDataStringById_result;
}