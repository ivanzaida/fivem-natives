/**
 * AUDIO:SET_MOBILE_PHONE_RADIO_STATE
 *
 * 0xFFC0556FB7074B1F

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isActive
 */
export function setMobilePhoneRadioState(isActive: boolean): void {
	const setMobilePhoneRadioState_result = Citizen.invokeNative<void>('0xFFC0556FB7074B1F', isActive);
	return setMobilePhoneRadioState_result;
}