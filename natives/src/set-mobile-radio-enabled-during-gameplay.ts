/**
 * AUDIO:SET_MOBILE_RADIO_ENABLED_DURING_GAMEPLAY
 *
 * 0x048A57C4A90E9F0D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setMobileRadioEnabledDuringGameplay(enabled: boolean): void {
	const setMobileRadioEnabledDuringGameplay_result = Citizen.invokeNative<void>('0x048A57C4A90E9F0D', enabled);
	return setMobileRadioEnabledDuringGameplay_result;
}