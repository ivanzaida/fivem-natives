import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_LOAD_MISSION_CREATOR_PHOTO
 *
 * 0x86AAD2BE6D9F7463

 * 
 * ------------------------------------------------------------------
 * @param {string} szContentID
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfLoadMissionCreatorPhoto(szContentID: string): EPhotoOperationStatus {
	const getStatusOfLoadMissionCreatorPhoto_result = Citizen.invokeNative<EPhotoOperationStatus>('0x86AAD2BE6D9F7463', szContentID);
	return getStatusOfLoadMissionCreatorPhoto_result;
}