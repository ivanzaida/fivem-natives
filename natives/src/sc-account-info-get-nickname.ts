/**
 * SOCIALCLUB:SC_ACCOUNT_INFO_GET_NICKNAME
 *
 * 0xE5546772B54C0EEE

 * 
 * Returns the nickname of the logged-in Rockstar Social Club account.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function scAccountInfoGetNickname(): string {
	const scAccountInfoGetNickname_result = Citizen.invokeNative<string>('0xE5546772B54C0EEE', );
	return scAccountInfoGetNickname_result;
}