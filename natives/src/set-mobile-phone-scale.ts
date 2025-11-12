/**
 * MOBILE:SET_MOBILE_PHONE_SCALE
 *
 * 0xBA290C9390813C9F

 * 
 * The minimum/default is 500.0f. If you plan to make it bigger set it's position as well. Also this seems to need to be called in a loop as when you close the phone the scale is reset. If not in a loop you'd need to call it everytime before you re-open the phone.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newPhoneScale
 */
export function setMobilePhoneScale(newPhoneScale: number): void {
	const setMobilePhoneScale_result = Citizen.invokeNative<void>('0xBA290C9390813C9F', newPhoneScale);
	return setMobilePhoneScale_result;
}