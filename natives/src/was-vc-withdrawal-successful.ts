/**
 * MONEY:WAS_VC_WITHDRAWAL_SUCCESSFUL
 *
 * 0x7E903F2F588C9435

 * 
 * Query whether a VC transfer was successful. Take as a parameter a transfer ID returned by TRANSFER_VC
 * WARNING: Will return false until HAS_VC_TRANSFER_COMPLETED is returning true, so be sure to check HAS_VC_TRANSFER_COMPLETED first.
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} transferId
 * @returns {boolean}  
 */
export function wasVcWithdrawalSuccessful(transferId: number): boolean {
	const wasVcWithdrawalSuccessful_result = Citizen.invokeNative<boolean>('0x7E903F2F588C9435', transferId);
	return wasVcWithdrawalSuccessful_result;
}