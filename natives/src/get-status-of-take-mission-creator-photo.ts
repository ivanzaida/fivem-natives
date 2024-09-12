import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_TAKE_MISSION_CREATOR_PHOTO
 *
 * 0x4E411746D4FFB0B1

 * 
 * ------------------------------------------------------------------
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfTakeMissionCreatorPhoto(): EPhotoOperationStatus {
	const getStatusOfTakeMissionCreatorPhoto_result = Citizen.invokeNative<EPhotoOperationStatus>('0x4E411746D4FFB0B1', );
	return getStatusOfTakeMissionCreatorPhoto_result;
}