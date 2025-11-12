/**
 * NETWORK:NETWORK_HAS_VALID_ROS_CREDENTIALS
 *
 * 0x1595D1B690089487

 * 
 * Returns whether the signed-in user has valid Rockstar Online Services (ROS) credentials.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasValidRosCredentials(): boolean {
	const networkHasValidRosCredentials_result = Citizen.invokeNative<boolean>('0x1595D1B690089487', );
	return networkHasValidRosCredentials_result;
}