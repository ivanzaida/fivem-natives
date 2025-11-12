/**
 * MONEY:HAS_VC_WITHDRAWAL_COMPLETED
 *
 * 0x7BAF87C40BEA974C

 * 
 * Query whether a VC transfer has completed. Take as a parameter a transfer ID returned by TRANSFER_VC
 * 
 * This function is hard-coded to always return 1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} transferId
 * @returns {boolean}  
 */
export function hasVcWithdrawalCompleted(transferId: number): boolean {
	const hasVcWithdrawalCompleted_result = Citizen.invokeNative<boolean>('0x7BAF87C40BEA974C', transferId);
	return hasVcWithdrawalCompleted_result;
}