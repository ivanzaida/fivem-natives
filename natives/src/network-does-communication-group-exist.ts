/**
 * NETWORK:_NETWORK_DOES_COMMUNICATION_GROUP_EXIST
 *
 * 0xDBDF80673BBA3D65

 * 
 * communicationType: 0 = VOICE; 1 = TEXT_CHAT; 2 = TEXT_MESSAGE; 3 = EMAIL; 4 = USER_CONTENT;  5 = USER_TEXT
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkDoesCommunicationGroupExist(): boolean {
	const networkDoesCommunicationGroupExist_result = Citizen.invokeNative<boolean>('0xDBDF80673BBA3D65', );
	return networkDoesCommunicationGroupExist_result;
}