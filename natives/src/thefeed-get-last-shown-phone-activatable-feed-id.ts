/**
 * HUD:THEFEED_GET_LAST_SHOWN_PHONE_ACTIVATABLE_FEED_ID
 *
 * 0x8DB6B5124B5217E1

 * 
 * Returns the handle for the notification currently displayed on the screen. Name may be a hash collision, but describes the function accurately.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function thefeedGetLastShownPhoneActivatableFeedId(): number {
	const thefeedGetLastShownPhoneActivatableFeedId_result = Citizen.invokeNative<number>('0x8DB6B5124B5217E1', );
	return thefeedGetLastShownPhoneActivatableFeedId_result;
}