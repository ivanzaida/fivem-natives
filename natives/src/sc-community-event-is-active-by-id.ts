/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_IS_ACTIVE_BY_ID
 *
 * 0x0DA41896C7810BBB

 * 
 * ------------------------------------------------------------------
 * @param {number} eventId
 * @returns {boolean}  
 */
export function scCommunityEventIsActiveById(eventId: number): boolean {
	const scCommunityEventIsActiveById_result = Citizen.invokeNative<boolean>('0x0DA41896C7810BBB', eventId);
	return scCommunityEventIsActiveById_result;
}