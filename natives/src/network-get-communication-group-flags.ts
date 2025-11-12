/**
 * NETWORK:_NETWORK_GET_COMMUNICATION_GROUP_FLAGS
 *
 * 0x40DF02F371F40883

 * 
 * Returns communicationGroupFlag
 * communicationType: see 0xDBDF80673BBA3D65
 * 
 * enum eCommunicationGroupFlag
 * {
 * 	COMMUNICATION_GROUP_LOCAL_PLAYER = 1 << 0,
 * 	COMMUNICATION_GROUP_FRIENDS = 1 << 1,
 * 	COMMUNICATION_GROUP_SMALL_CREW = 1 << 2,
 * 	COMMUNICATION_GROUP_LARGE_CREW = 1 << 3,
 * 	COMMUNICATION_GROUP_RECENT_PLAYER = 1 << 4,
 * 	COMMUNICATION_GROUP_SAME_SESSION = 1 << 5,
 * 	COMMUNICATION_GROUP_SAME_TEAM = 1 << 6,
 * 	COMMUNICATION_GROUP_INVALID = 1 << 7,
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetCommunicationGroupFlags(): number {
	const networkGetCommunicationGroupFlags_result = Citizen.invokeNative<number>('0x40DF02F371F40883', );
	return networkGetCommunicationGroupFlags_result;
}