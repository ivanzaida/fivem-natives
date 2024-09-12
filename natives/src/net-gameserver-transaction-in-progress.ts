/**
 * NETSHOPPING:NET_GAMESERVER_TRANSACTION_IN_PROGRESS
 *
 * 0xEBCF66C686AEBDCA

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverTransactionInProgress(): boolean {
	const netGameserverTransactionInProgress_result = Citizen.invokeNative<boolean>('0xEBCF66C686AEBDCA', );
	return netGameserverTransactionInProgress_result;
}