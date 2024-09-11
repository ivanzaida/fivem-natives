/**
 * MONEY:NETWORK_CAN_BET
 *
 * 0xB0490531FD3DC629

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @returns {boolean}  
 */
export function networkCanBet(amount: number): boolean {
	const networkCanBet_result = Citizen.invokeNative<boolean>('0xB0490531FD3DC629', amount);
	return networkCanBet_result;
}