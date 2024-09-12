/**
 * NETSHOPPING:NET_GAMESERVER_TRANSFER_WALLET_TO_BANK
 *
 * 0xCFE92984BF3486D5

 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @param {number} amount
 * @returns {boolean}  
 */
export function netGameserverTransferWalletToBank(character: number, amount: number): boolean {
	const netGameserverTransferWalletToBank_result = Citizen.invokeNative<boolean>('0xCFE92984BF3486D5', character, amount);
	return netGameserverTransferWalletToBank_result;
}