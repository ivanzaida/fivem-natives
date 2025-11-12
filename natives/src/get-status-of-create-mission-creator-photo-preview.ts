import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_CREATE_MISSION_CREATOR_PHOTO_PREVIEW
 *
 * 0x530D6F0F54C3DDB7

 * 
 * Returns the status of the request triggered by BEGIN_CREATE_MISSION_CREATOR_PHOTO_PREVIEW
 * Once this preview is ready, it can be used by script or scaleform. Both the name of the TXD and the texture is always
 * "MISSION_CREATOR_TEXTURE"
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfCreateMissionCreatorPhotoPreview(): EPhotoOperationStatus {
	const getStatusOfCreateMissionCreatorPhotoPreview_result = Citizen.invokeNative<EPhotoOperationStatus>('0x530D6F0F54C3DDB7', );
	return getStatusOfCreateMissionCreatorPhotoPreview_result;
}