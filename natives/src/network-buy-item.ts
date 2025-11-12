import { EPurchaseType } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_BUY_ITEM
 *
 * 0x231BA68A82FF0316

 * 
 * Player bought something in a shop
 * extra1 - client view of the current inventory. e.g. if buying bullets include how many
 * bullets the client thinks he owns.
 * itemIdentifier - extra item identifier, like PEGASUS.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} itemhash
 * @param {EPurchaseType} type
 * @param {number} extra1
 * @param {boolean} fromBank
 * @param {string} itemIdentifier
 * @param {number} shopNameHash
 * @param {number} extraItemHash
 * @param {number} colorHash
 * @param {boolean} fromBankAndWallet
 */
export function networkBuyItem(amount: number, itemhash: number, type: EPurchaseType | number, extra1: number = 1, fromBank: boolean = false, itemIdentifier: string = null!, shopNameHash: number = 0, extraItemHash: number = 0, colorHash: number = 0, fromBankAndWallet: boolean = false): void {
	const networkBuyItem_result = Citizen.invokeNative<void>('0x231BA68A82FF0316', amount, itemhash, type, extra1, fromBank, itemIdentifier, shopNameHash, extraItemHash, colorHash, fromBankAndWallet);
	return networkBuyItem_result;
}