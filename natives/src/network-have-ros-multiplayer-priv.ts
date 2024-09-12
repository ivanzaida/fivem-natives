/**
 * NETWORK:NETWORK_HAVE_ROS_MULTIPLAYER_PRIV
 *
 * 0x938C5858FA4618E2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveRosMultiplayerPriv(): boolean {
	const networkHaveRosMultiplayerPriv_result = Citizen.invokeNative<boolean>('0x938C5858FA4618E2', );
	return networkHaveRosMultiplayerPriv_result;
}