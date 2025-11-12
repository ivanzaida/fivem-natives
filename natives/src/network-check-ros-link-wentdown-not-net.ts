/**
 * NETWORK:NETWORK_CHECK_ROS_LINK_WENTDOWN_NOT_NET
 *
 * 0x3CF1DEF284B9B6C0

 * 
 * Call to retrieve if in the last session the ROS connection (cloud) went down but not the platform network connection.
 * When this is called it will clear any status so this must be called in the network game once only. During transition from SP to MP since
 * I will adding some asserts and checks to make sure this is done in FREEMODE.
 * 
 * Returns true if profile setting 901 is set to true and sets it to false.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCheckRosLinkWentdownNotNet(): boolean {
	const networkCheckRosLinkWentdownNotNet_result = Citizen.invokeNative<boolean>('0x3CF1DEF284B9B6C0', );
	return networkCheckRosLinkWentdownNotNet_result;
}