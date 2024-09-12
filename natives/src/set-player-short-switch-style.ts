import { EShortSwitchStyle } from '@ivanzaida/structures'

/**
 * STREAMING:SET_PLAYER_SHORT_SWITCH_STYLE
 *
 * 0xEDACB682D42B6786

 * 
 * ------------------------------------------------------------------
 * @param {EShortSwitchStyle} style
 */
export function setPlayerShortSwitchStyle(style: EShortSwitchStyle | number): void {
	const setPlayerShortSwitchStyle_result = Citizen.invokeNative<void>('0xEDACB682D42B6786', style);
	return setPlayerShortSwitchStyle_result;
}