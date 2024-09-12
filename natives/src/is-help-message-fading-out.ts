/**
 * HUD:IS_HELP_MESSAGE_FADING_OUT
 *
 * 0xA5DAECD045AA8024

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isHelpMessageFadingOut(): boolean {
	const isHelpMessageFadingOut_result = Citizen.invokeNative<boolean>('0xA5DAECD045AA8024', );
	return isHelpMessageFadingOut_result;
}