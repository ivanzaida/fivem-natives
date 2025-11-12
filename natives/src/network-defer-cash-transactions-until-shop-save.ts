/**
 * MONEY:NETWORK_DEFER_CASH_TRANSACTIONS_UNTIL_SHOP_SAVE
 *
 * 0xFC6FC18CC3214743

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkDeferCashTransactionsUntilShopSave(): void {
	const networkDeferCashTransactionsUntilShopSave_result = Citizen.invokeNative<void>('0xFC6FC18CC3214743', );
	return networkDeferCashTransactionsUntilShopSave_result;
}