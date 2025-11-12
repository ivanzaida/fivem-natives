/**
 * MONEY:NETWORK_DELETE_CHARACTER
 *
 * 0x2147F6D06CE70F1B

 * 
 * Note the 2nd parameters are always 1, 0. I have a feeling it deals with your money, wallet, bank. So when you delete the character it of course wipes the wallet cash at that time. So if that was the case, it would be eg, NETWORK_DELETE_CHARACTER(characterIndex, deleteWalletCash, deleteBankCash);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @param {boolean} wipeWallet
 * @param {boolean} wipeBank
 */
export function networkDeleteCharacter(character: number, wipeWallet: boolean = true, wipeBank: boolean = false): void {
	const networkDeleteCharacter_result = Citizen.invokeNative<void>('0x2147F6D06CE70F1B', character, wipeWallet, wipeBank);
	return networkDeleteCharacter_result;
}