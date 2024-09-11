import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_SAVE_HIGH_QUALITY_PHOTO
 *
 * 0x9FE1211A2B698F5D

 * 
 * ------------------------------------------------------------------
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfSaveHighQualityPhoto(): EPhotoOperationStatus {
	const getStatusOfSaveHighQualityPhoto_result = Citizen.invokeNative<EPhotoOperationStatus>('0x9FE1211A2B698F5D', );
	return getStatusOfSaveHighQualityPhoto_result;
}