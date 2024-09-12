/**
 * HUD:GET_CURRENT_WEBSITE_ID
 *
 * 0x118B88D02A49C812

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCurrentWebsiteId(): number {
	const getCurrentWebsiteId_result = Citizen.invokeNative<number>('0x118B88D02A49C812', );
	return getCurrentWebsiteId_result;
}