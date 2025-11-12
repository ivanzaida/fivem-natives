import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_LOAD_HIGH_QUALITY_PHOTO_STATUS
 *
 * 0x7522B8298919A016

 * 
 * Hardcoded to always return 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} photoSlot
 * @returns {EPhotoOperationStatus}  
 */
export function getLoadHighQualityPhotoStatus(photoSlot: number): EPhotoOperationStatus {
	const getLoadHighQualityPhotoStatus_result = Citizen.invokeNative<EPhotoOperationStatus>('0x7522B8298919A016', photoSlot);
	return getLoadHighQualityPhotoStatus_result;
}