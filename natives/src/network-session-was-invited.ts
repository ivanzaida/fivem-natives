/**
 * NETWORK:NETWORK_SESSION_WAS_INVITED
 *
 * 0x8F676111F5795F1C

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionWasInvited(): boolean {
	const networkSessionWasInvited_result = Citizen.invokeNative<boolean>('0x8F676111F5795F1C', );
	return networkSessionWasInvited_result;
}