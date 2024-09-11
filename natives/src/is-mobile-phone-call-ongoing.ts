/**
 * AUDIO:IS_MOBILE_PHONE_CALL_ONGOING
 *
 * 0xE87F28FD4128D063

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMobilePhoneCallOngoing(): boolean {
	const isMobilePhoneCallOngoing_result = Citizen.invokeNative<boolean>('0xE87F28FD4128D063', );
	return isMobilePhoneCallOngoing_result;
}