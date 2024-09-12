/**
 * CFX:VERIFY_PASSWORD_HASH
 *
 * 0X2E310ACD

 * 
 * ------------------------------------------------------------------
 * @param {string} password
 * @param {string} hash
 * @returns {boolean}  
 */
export function verifyPasswordHash(password: string, hash: string): boolean {
	const verifyPasswordHash_result = Citizen.invokeNative<boolean>('0X2E310ACD', password, hash);
	return verifyPasswordHash_result;
}