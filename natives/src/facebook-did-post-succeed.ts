/**
 * NETWORK:FACEBOOK_DID_POST_SUCCEED
 *
 * 0x220ABB0D55961BE1

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function facebookDidPostSucceed(): boolean {
	const facebookDidPostSucceed_result = Citizen.invokeNative<boolean>('0x220ABB0D55961BE1', );
	return facebookDidPostSucceed_result;
}