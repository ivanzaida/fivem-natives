import { EEHelpTextFloatingId, EHelpMessageStyle, EHudColours, EEArrowDirection } from '@ivanzaida/structures'

/**
 * HUD:SET_FLOATING_HELP_TEXT_STYLE
 *
 * 0x02E651988A21FA54

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpTextFloatingId} id
 * @param {EHelpMessageStyle} style
 * @param {EHudColours} colour
 * @param {number} alpha
 * @param {EEArrowDirection} arrowPosition
 * @param {number} floatingTextOffset
 */
export function setFloatingHelpTextStyle(id: EEHelpTextFloatingId | number, style: EHelpMessageStyle | number, colour: EHudColours | number, alpha: number = 1, arrowPosition: EEArrowDirection | number = 0, floatingTextOffset: number = 0): void {
	const setFloatingHelpTextStyle_result = Citizen.invokeNative<void>('0x02E651988A21FA54', id, style, colour, alpha, arrowPosition, floatingTextOffset);
	return setFloatingHelpTextStyle_result;
}