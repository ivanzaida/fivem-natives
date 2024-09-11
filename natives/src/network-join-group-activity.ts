/**
 * NETWORK:NETWORK_JOIN_GROUP_ACTIVITY
 *
 * 0x646BC1CC9552A232

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkJoinGroupActivity(): boolean {
	const networkJoinGroupActivity_result = Citizen.invokeNative<boolean>('0x646BC1CC9552A232', );
	return networkJoinGroupActivity_result;
}