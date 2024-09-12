/**
 * NETWORK:NETWORK_IS_REFRESHING_ROS_CREDENTIALS
 *
 * 0x9A98CA859043585F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsRefreshingRosCredentials(): boolean {
	const networkIsRefreshingRosCredentials_result = Citizen.invokeNative<boolean>('0x9A98CA859043585F', );
	return networkIsRefreshingRosCredentials_result;
}