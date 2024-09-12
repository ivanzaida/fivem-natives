/**
 * NETWORK:NETWORK_HAVE_ROS_CREATE_TICKET_PRIV
 *
 * 0xC869C5AD1CA63C58

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveRosCreateTicketPriv(): boolean {
	const networkHaveRosCreateTicketPriv_result = Citizen.invokeNative<boolean>('0xC869C5AD1CA63C58', );
	return networkHaveRosCreateTicketPriv_result;
}