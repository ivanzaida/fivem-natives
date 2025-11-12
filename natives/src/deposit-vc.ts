/**
 * MONEY:DEPOSIT_VC
 *
 * 0xAC3F47C6E026FB48

 * 
 * Deposit cash into the VC bank. Returns true on success.
 * 
 * Does nothing and always returns false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {boolean}  
 */
export function depositVc(amount: number): boolean {
	const depositVc_result = Citizen.invokeNative<boolean>('0xAC3F47C6E026FB48', amount);
	return depositVc_result;
}