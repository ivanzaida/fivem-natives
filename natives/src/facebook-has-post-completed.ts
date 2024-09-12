/**
 * NETWORK:FACEBOOK_HAS_POST_COMPLETED
 *
 * 0x23ECFBF953F64001

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function facebookHasPostCompleted(): boolean {
	const facebookHasPostCompleted_result = Citizen.invokeNative<boolean>('0x23ECFBF953F64001', );
	return facebookHasPostCompleted_result;
}