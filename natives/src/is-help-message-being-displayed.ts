/**
 * HUD:IS_HELP_MESSAGE_BEING_DISPLAYED
 *
 * 0x4C705AAF75363287

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isHelpMessageBeingDisplayed(): boolean {
	const isHelpMessageBeingDisplayed_result = Citizen.invokeNative<boolean>('0x4C705AAF75363287', );
	return isHelpMessageBeingDisplayed_result;
}