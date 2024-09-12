/**
 * NETSHOPPING:NET_GAMESERVER_END_SERVICE
 *
 * 0x1FDE21A286357401

 * 
 * ------------------------------------------------------------------
 * @param {number} transactionId
 * @returns {boolean}  
 */
export function netGameserverEndService(transactionId: number): boolean {
	const netGameserverEndService_result = Citizen.invokeNative<boolean>('0x1FDE21A286357401', transactionId);
	return netGameserverEndService_result;
}