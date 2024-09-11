/**
 * AUDIO:SET_FRONTEND_RADIO_ACTIVE
 *
 * 0x51E3279E9437131C

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setFrontendRadioActive(active: boolean): void {
	const setFrontendRadioActive_result = Citizen.invokeNative<void>('0x51E3279E9437131C', active);
	return setFrontendRadioActive_result;
}