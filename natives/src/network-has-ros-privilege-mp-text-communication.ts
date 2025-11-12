/**
 * NETWORK:_NETWORK_HAS_ROS_PRIVILEGE_MP_TEXT_COMMUNICATION
 *
 * 0xD9719341663C385F

 * 
 * Checks for privilege 29
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasRosPrivilegeMpTextCommunication(): boolean {
	const networkHasRosPrivilegeMpTextCommunication_result = Citizen.invokeNative<boolean>('0xD9719341663C385F', );
	return networkHasRosPrivilegeMpTextCommunication_result;
}