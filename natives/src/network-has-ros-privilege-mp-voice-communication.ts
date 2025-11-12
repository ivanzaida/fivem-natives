/**
 * NETWORK:_NETWORK_HAS_ROS_PRIVILEGE_MP_VOICE_COMMUNICATION
 *
 * 0x8956A309BE90057C

 * 
 * Checks for privilege 30
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasRosPrivilegeMpVoiceCommunication(): boolean {
	const networkHasRosPrivilegeMpVoiceCommunication_result = Citizen.invokeNative<boolean>('0x8956A309BE90057C', );
	return networkHasRosPrivilegeMpVoiceCommunication_result;
}