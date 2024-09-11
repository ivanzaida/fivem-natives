/**
 * NETSHOPPING:NET_GAMESERVER_START_SESSION_PENDING
 *
 * 0x53011E611CBE5D47

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverStartSessionPending(): boolean {
	const netGameserverStartSessionPending_result = Citizen.invokeNative<boolean>('0x53011E611CBE5D47', );
	return netGameserverStartSessionPending_result;
}