/**
 * MONEY:NETWORK_SPENT_CARGO_SOURCING
 *
 * 0x17723C8F38B28C26

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} cost
 * @param {number} warehouseID
 * @param {number} warehouseSlot
 */
export function networkSpentCargoSourcing(amount: number, fromBank: boolean, fromBankAndWallet: boolean, cost: number, warehouseID: number, warehouseSlot: number): void {
	const networkSpentCargoSourcing_result = Citizen.invokeNative<void>('0x17723C8F38B28C26', amount, fromBank, fromBankAndWallet, cost, warehouseID, warehouseSlot);
	return networkSpentCargoSourcing_result;
}