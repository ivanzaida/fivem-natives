/**
 * NETSHOPPING:NET_GAMESERVER_IS_SESSION_VALID
 *
 * 0x134EF45B578F4CCF

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function netGameserverIsSessionValid(slot: number): boolean {
	const netGameserverIsSessionValid_result = Citizen.invokeNative<boolean>('0x134EF45B578F4CCF', slot);
	return netGameserverIsSessionValid_result;
}