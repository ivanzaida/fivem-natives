import { EHelpMessageStyle, EHudColours, EEArrowDirection } from '@ivanzaida/structures'

/**
 * HUD:SET_HELP_MESSAGE_STYLE
 *
 * 0x55DAC9CDA320120B

 * 
 * ------------------------------------------------------------------
 * @param {EHelpMessageStyle} style
 * @param {EHudColours} colour
 * @param {number} alpha
 * @param {EEArrowDirection} arrowPosition
 * @param {number} floatingTextOffset
 */
export function setHelpMessageStyle(style: EHelpMessageStyle | number, colour: EHudColours | number, alpha: number = 1, arrowPosition: EEArrowDirection | number = 0, floatingTextOffset: number = 0): void {
	const setHelpMessageStyle_result = Citizen.invokeNative<void>('0x55DAC9CDA320120B', style, colour, alpha, arrowPosition, floatingTextOffset);
	return setHelpMessageStyle_result;
}