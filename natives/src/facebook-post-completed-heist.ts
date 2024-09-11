/**
 * NETWORK:FACEBOOK_POST_COMPLETED_HEIST
 *
 * 0xA1EF53B581B6B4A9

 * 
 * ------------------------------------------------------------------
 * @param {string} heistId
 * @param {number} cashEarned
 * @param {number} xpEarned
 * @returns {boolean}  
 */
export function facebookPostCompletedHeist(heistId: string, cashEarned: number, xpEarned: number): boolean {
	const facebookPostCompletedHeist_result = Citizen.invokeNative<boolean>('0xA1EF53B581B6B4A9', heistId, cashEarned, xpEarned);
	return facebookPostCompletedHeist_result;
}