import { EEHelpMessageId } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_DISPLAY_HELP
 *
 * 0x5E01B6B1F460FE3F

 * 
 * shape goes from -1 to 50 (may be more).
 * p0 is always 0.
 * 
 * Example:
 * void FloatingHelpText(const char text)
 * {
 *     BEGIN_TEXT_COMMAND_DISPLAY_HELP("STRING");
 *   ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 *    END_TEXT_COMMAND_DISPLAY_HELP (0, 0, 1, -1);
 * }
 * 
 * Image:
 * - imgbin.org/images/26209.jpg
 * 
 * more inputs/icons:
 * - https://pastebin.com/nqNYWMSB
 * 
 * Used to be known as _DISPLAY_HELP_TEXT_FROM_STRING_LABEL
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEHelpMessageId} helpId
 * @param {boolean} displayForever
 * @param {boolean} playSound
 * @param {number} overrideDuration
 */
export function endTextCommandDisplayHelp(helpId: EEHelpMessageId | number, displayForever: boolean, playSound: boolean, overrideDuration: number = 1): void {
	const endTextCommandDisplayHelp_result = Citizen.invokeNative<void>('0x5E01B6B1F460FE3F', helpId, displayForever, playSound, overrideDuration);
	return endTextCommandDisplayHelp_result;
}