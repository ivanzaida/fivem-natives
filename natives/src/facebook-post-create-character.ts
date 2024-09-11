/**
 * NETWORK:FACEBOOK_POST_CREATE_CHARACTER
 *
 * 0x5506E003A95C6373

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function facebookPostCreateCharacter(): boolean {
	const facebookPostCreateCharacter_result = Citizen.invokeNative<boolean>('0x5506E003A95C6373', );
	return facebookPostCreateCharacter_result;
}