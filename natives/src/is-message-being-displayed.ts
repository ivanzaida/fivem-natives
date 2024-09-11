/**
 * HUD:IS_MESSAGE_BEING_DISPLAYED
 *
 * 0xFBA523E6F8ACE541

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMessageBeingDisplayed(): boolean {
	const isMessageBeingDisplayed_result = Citizen.invokeNative<boolean>('0xFBA523E6F8ACE541', );
	return isMessageBeingDisplayed_result;
}