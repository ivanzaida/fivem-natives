/**
 * NETWORK:FACEBOOK_CAN_POST_TO_FACEBOOK
 *
 * 0x6D230D68A9AD1134

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function facebookCanPostToFacebook(): boolean {
	const facebookCanPostToFacebook_result = Citizen.invokeNative<boolean>('0x6D230D68A9AD1134', );
	return facebookCanPostToFacebook_result;
}