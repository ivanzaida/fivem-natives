/**
 * NETWORK:_NETWORK_SET_COMMUNICATION_GROUP_FLAGS
 *
 * 0xE549F846DE7D32D5

 * 
 * communicationType: see 0xDBDF80673BBA3D65
 * communicationGroupFlag: see 0x40DF02F371F40883
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkSetCommunicationGroupFlags(): void {
	const networkSetCommunicationGroupFlags_result = Citizen.invokeNative<void>('0xE549F846DE7D32D5', );
	return networkSetCommunicationGroupFlags_result;
}