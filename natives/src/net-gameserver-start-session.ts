/**
 * NETSHOPPING:NET_GAMESERVER_START_SESSION
 *
 * 0x837A06CA50CB0287

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function netGameserverStartSession(slot: number): boolean {
	const netGameserverStartSession_result = Citizen.invokeNative<boolean>('0x837A06CA50CB0287', slot);
	return netGameserverStartSession_result;
}