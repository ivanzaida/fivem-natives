import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO
 *
 * 0xB6C7ECEA9936790D

 * 
 * ------------------------------------------------------------------
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfTakeHighQualityPhoto(): EPhotoOperationStatus {
	const getStatusOfTakeHighQualityPhoto_result = Citizen.invokeNative<EPhotoOperationStatus>('0xB6C7ECEA9936790D', );
	return getStatusOfTakeHighQualityPhoto_result;
}