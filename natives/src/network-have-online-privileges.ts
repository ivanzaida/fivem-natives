/**
 * NETWORK:NETWORK_HAVE_ONLINE_PRIVILEGES
 *
 * 0xD25970CBEE074E07

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveOnlinePrivileges(): boolean {
	const networkHaveOnlinePrivileges_result = Citizen.invokeNative<boolean>('0xD25970CBEE074E07', );
	return networkHaveOnlinePrivileges_result;
}