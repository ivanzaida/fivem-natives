import { EELowQualityPhotoSetting, EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_CREATE_LOW_QUALITY_COPY_OF_PHOTO
 *
 * 0x39CD1674039F82E0

 * 
 * ------------------------------------------------------------------
 * @param {EELowQualityPhotoSetting} qualitySetting
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfCreateLowQualityCopyOfPhoto(qualitySetting: EELowQualityPhotoSetting | number): EPhotoOperationStatus {
	const getStatusOfCreateLowQualityCopyOfPhoto_result = Citizen.invokeNative<EPhotoOperationStatus>('0x39CD1674039F82E0', qualitySetting);
	return getStatusOfCreateLowQualityCopyOfPhoto_result;
}