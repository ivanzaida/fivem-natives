/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_IS_ACTIVE_FOR_TYPE
 *
 * 0x80AD0C08672402C2

 * 
 * ------------------------------------------------------------------
 * @param {string} eventType
 * @returns {boolean}  
 */
export function scCommunityEventIsActiveForType(eventType: string): boolean {
	const scCommunityEventIsActiveForType_result = Citizen.invokeNative<boolean>('0x80AD0C08672402C2', eventType);
	return scCommunityEventIsActiveForType_result;
}