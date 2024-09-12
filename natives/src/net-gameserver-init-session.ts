/**
 * NETSHOPPING:NET_GAMESERVER_INIT_SESSION
 *
 * 0x8D45EE985CFA01DD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function netGameserverInitSession(): boolean {
	const netGameserverInitSession_result = Citizen.invokeNative<boolean>('0x8D45EE985CFA01DD', );
	return netGameserverInitSession_result;
}