/**
 * NETSHOPPING:NET_GAMESERVER_CHECKOUT_START
 *
 * 0x5F7C6361179DFFC4

 * 
 * This command should be used for the BASKET and SERVICES.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} transactionId
 * @returns {boolean}  
 */
export function netGameserverCheckoutStart(transactionId: number): boolean {
	const netGameserverCheckoutStart_result = Citizen.invokeNative<boolean>('0x5F7C6361179DFFC4', transactionId);
	return netGameserverCheckoutStart_result;
}