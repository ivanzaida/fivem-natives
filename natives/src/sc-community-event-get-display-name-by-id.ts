import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_DISPLAY_NAME_BY_ID
 *
 * 0xF5EB76164CE420A5

 * 
 * ------------------------------------------------------------------
 * @param {number} eventID
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scCommunityEventGetDisplayNameById(eventID: number, value: StringRef /* ptr */): boolean {
	const scCommunityEventGetDisplayNameById_result = Citizen.invokeNative<boolean>('0xF5EB76164CE420A5', eventID, value.dataView);
	return scCommunityEventGetDisplayNameById_result;
}