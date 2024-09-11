/**
 * NETSHOPPING:NET_GAMESERVER_CLEAR_SESSION
 *
 * 0x8C09D01F9FCC2827

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function netGameserverClearSession(slot: number): boolean {
	const netGameserverClearSession_result = Citizen.invokeNative<boolean>('0x8C09D01F9FCC2827', slot);
	return netGameserverClearSession_result;
}