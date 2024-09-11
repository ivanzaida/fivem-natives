/**
 * NETSHOPPING:NET_GAMESERVER_USE_SERVER_TRANSACTIONS
 *
 * 0xC18CB5D7A27A2E00

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverUseServerTransactions(): boolean {
	const netGameserverUseServerTransactions_result = Citizen.invokeNative<boolean>('0xC18CB5D7A27A2E00', );
	return netGameserverUseServerTransactions_result;
}