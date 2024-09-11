/**
 * NETSHOPPING:NET_GAMESERVER_IS_SESSION_REFRESH_PENDING
 *
 * 0x34F31012FED51A0F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverIsSessionRefreshPending(): boolean {
	const netGameserverIsSessionRefreshPending_result = Citizen.invokeNative<boolean>('0x34F31012FED51A0F', );
	return netGameserverIsSessionRefreshPending_result;
}