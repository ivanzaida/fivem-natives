import { EELowQualityPhotoSetting } from '@ivanzaida/structures'

/**
 * GRAPHICS:BEGIN_CREATE_LOW_QUALITY_COPY_OF_PHOTO
 *
 * 0xF8E79D92A7C6EFE0

 * 
 * Creates a low quality version of the current high quality photo. The low quality version can be displayed on the phone.
 * This can only be called after GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO has returned PHOTO_OPERATION_SUCCEEDED and before calling FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EELowQualityPhotoSetting} qualitySetting
 * @returns {boolean}  
 */
export function beginCreateLowQualityCopyOfPhoto(qualitySetting: EELowQualityPhotoSetting | number): boolean {
	const beginCreateLowQualityCopyOfPhoto_result = Citizen.invokeNative<boolean>('0xF8E79D92A7C6EFE0', qualitySetting);
	return beginCreateLowQualityCopyOfPhoto_result;
}