/**
 * MOBILE:CAN_PHONE_BE_SEEN_ON_SCREEN
 *
 * 0xE2EDC80BDB9A514F

 * 
 * This one is weird and seems to return a TRUE state regardless of whether the phone is visible on screen or tucked away.
 * 
 * 
 * I can confirm the above. This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function canPhoneBeSeenOnScreen(): boolean {
	const canPhoneBeSeenOnScreen_result = Citizen.invokeNative<boolean>('0xE2EDC80BDB9A514F', );
	return canPhoneBeSeenOnScreen_result;
}