/**
 * CFX:GET_PASSWORD_HASH
 *
 * 0x23473EA4

 * 
 * ------------------------------------------------------------------
 * @param {string} password
 * @returns {string}  
 */
export function getPasswordHash(password: string): string {
	const getPasswordHash_result = Citizen.invokeNative<string>('0x23473EA4', password);
	return getPasswordHash_result;
}