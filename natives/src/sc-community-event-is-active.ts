/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_IS_ACTIVE
 *
 * 0x23AB41CD7BD481B9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function scCommunityEventIsActive(): boolean {
	const scCommunityEventIsActive_result = Citizen.invokeNative<boolean>('0x23AB41CD7BD481B9', );
	return scCommunityEventIsActive_result;
}