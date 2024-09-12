/**
 * NETWORK:NETWORK_HAS_ROS_PRIVILEGE_SPECIAL_EDITION_CONTENT
 *
 * 0x753B42F8D561B8E2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasRosPrivilegeSpecialEditionContent(): boolean {
	const networkHasRosPrivilegeSpecialEditionContent_result = Citizen.invokeNative<boolean>('0x753B42F8D561B8E2', );
	return networkHasRosPrivilegeSpecialEditionContent_result;
}