/**
 * AUDIO:IS_MOBILE_INTERFERENCE_ACTIVE
 *
 * 0x56D84C8BC3CE3EF9

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMobileInterferenceActive(): boolean {
	const isMobileInterferenceActive_result = Citizen.invokeNative<boolean>('0x56D84C8BC3CE3EF9', );
	return isMobileInterferenceActive_result;
}