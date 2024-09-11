import { EEHelpMessageId } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED
 *
 * 0x7EBCD400E7DE179C

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpMessageId} helpId
 * @returns {boolean}  
 */
export function endTextCommandIsThisHelpMessageBeingDisplayed(helpId: EEHelpMessageId | number): boolean {
	const endTextCommandIsThisHelpMessageBeingDisplayed_result = Citizen.invokeNative<boolean>('0x7EBCD400E7DE179C', helpId);
	return endTextCommandIsThisHelpMessageBeingDisplayed_result;
}