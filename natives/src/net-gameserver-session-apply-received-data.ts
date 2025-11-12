/**
 * NETSHOPPING:NET_GAMESERVER_SESSION_APPLY_RECEIVED_DATA
 *
 * 0x70ABB0748BDFB6BA

 * 
 * Apply the data received from the server (ala NET_GAMESERVER_START_SESSION)
 * Note: Be sure check the NET_GAMESERVER_RETRIEVE_START_SESSION_STATUS
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 * @returns {boolean}  
 */
export function netGameserverSessionApplyReceivedData(slot: number): boolean {
	const netGameserverSessionApplyReceivedData_result = Citizen.invokeNative<boolean>('0x70ABB0748BDFB6BA', slot);
	return netGameserverSessionApplyReceivedData_result;
}