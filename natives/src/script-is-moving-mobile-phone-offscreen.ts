/**
 * MOBILE:SCRIPT_IS_MOVING_MOBILE_PHONE_OFFSCREEN
 *
 * 0xFC75D88023832ED9

 * 
 * If bool Toggle = true so the mobile is hide to screen.
 * If bool Toggle = false so the mobile is show to screen.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function scriptIsMovingMobilePhoneOffscreen(value: boolean): void {
	const scriptIsMovingMobilePhoneOffscreen_result = Citizen.invokeNative<void>('0xFC75D88023832ED9', value);
	return scriptIsMovingMobilePhoneOffscreen_result;
}