/**
 * NETWORK:NETWORK_SESSION_GET_PRIVATE_SLOTS
 *
 * 0x7EE8EFCDD1DAF8E8

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkSessionGetPrivateSlots(): number {
	const networkSessionGetPrivateSlots_result = Citizen.invokeNative<number>('0x7EE8EFCDD1DAF8E8', );
	return networkSessionGetPrivateSlots_result;
}