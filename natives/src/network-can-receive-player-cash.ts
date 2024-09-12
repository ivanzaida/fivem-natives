/**
 * MONEY:NETWORK_CAN_RECEIVE_PLAYER_CASH
 *
 * 0x5B9D8077EF640468

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} amountOfEVC
 * @param {number} amountOfPVC
 * @param {number} amountOfUSDE
 * @returns {boolean}  
 */
export function networkCanReceivePlayerCash(amount: number, amountOfEVC: number, amountOfPVC: number, amountOfUSDE: number): boolean {
	const networkCanReceivePlayerCash_result = Citizen.invokeNative<boolean>('0x5B9D8077EF640468', amount, amountOfEVC, amountOfPVC, amountOfUSDE);
	return networkCanReceivePlayerCash_result;
}