/**
 * NETSHOPPING:NET_GAMESERVER_TRANSFER_BANK_TO_WALLET
 *
 * 0x4F3198DEED415E95

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @param {number} amount
 * @returns {boolean}  
 */
export function netGameserverTransferBankToWallet(slot: number, amount: number): boolean {
	const netGameserverTransferBankToWallet_result = Citizen.invokeNative<boolean>('0x4F3198DEED415E95', slot, amount);
	return netGameserverTransferBankToWallet_result;
}