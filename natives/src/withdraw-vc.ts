/**
 * MONEY:WITHDRAW_VC
 *
 * 0x8C72AE091EB20602

 * 
 * Start a VC transfer. This function requests a VC total of "amount" to the current player.
 * Returns an int (transferId) which is used to query the state of the transfer.
 * 
 * Does nothing and always returns 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {number}  
 */
export function withdrawVc(amount: number): number {
	const withdrawVc_result = Citizen.invokeNative<number>('0x8C72AE091EB20602', amount);
	return withdrawVc_result;
}