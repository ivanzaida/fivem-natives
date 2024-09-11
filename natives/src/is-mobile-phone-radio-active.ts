/**
 * AUDIO:IS_MOBILE_PHONE_RADIO_ACTIVE
 *
 * 0x92BAF57CC368DFC5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMobilePhoneRadioActive(): boolean {
	const isMobilePhoneRadioActive_result = Citizen.invokeNative<boolean>('0x92BAF57CC368DFC5', );
	return isMobilePhoneRadioActive_result;
}