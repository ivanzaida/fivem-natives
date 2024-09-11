/**
 * NETWORK:NETWORK_HAS_ROS_PRIVILEGE_PLAYED_LAST_GEN
 *
 * 0x5BC93955B6EEBC0B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasRosPrivilegePlayedLastGen(): boolean {
	const networkHasRosPrivilegePlayedLastGen_result = Citizen.invokeNative<boolean>('0x5BC93955B6EEBC0B', );
	return networkHasRosPrivilegePlayedLastGen_result;
}