/**
 * HUD:END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED
 *
 * 0x96DEE7666C9409E5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function endTextCommandIsMessageDisplayed(): boolean {
	const endTextCommandIsMessageDisplayed_result = Citizen.invokeNative<boolean>('0x96DEE7666C9409E5', );
	return endTextCommandIsMessageDisplayed_result;
}