/**
 * HUD:BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED
 *
 * 0x39DCBE5519BD783A

 * 
 * BOOL IsContextActive(char ctx)
 *     {
 *      BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(ctx);
 *      return END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(0);
 *   }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandIsThisHelpMessageBeingDisplayed(mainTextLabel: string): void {
	const beginTextCommandIsThisHelpMessageBeingDisplayed_result = Citizen.invokeNative<void>('0x39DCBE5519BD783A', mainTextLabel);
	return beginTextCommandIsThisHelpMessageBeingDisplayed_result;
}