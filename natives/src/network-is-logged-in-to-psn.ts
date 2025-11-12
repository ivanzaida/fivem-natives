/**
 * NETWORK:NETWORK_IS_LOGGED_IN_TO_PSN
 *
 * 0xC026D674C8C48368

 * 
 * Returns TRUE if the main gamer index player is logged in to PSN. This does not guarantee the user is "online",
 * i.e. their connection to PSN services could be down, they could be underage, etc.
 * Use NETWORK_IS_SIGNED_ONLINE for full online PSN connection.
 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsLoggedInToPsn(): boolean {
	const networkIsLoggedInToPsn_result = Citizen.invokeNative<boolean>('0xC026D674C8C48368', );
	return networkIsLoggedInToPsn_result;
}