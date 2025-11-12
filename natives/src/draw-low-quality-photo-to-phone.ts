import { EEPhotoRotation } from '@ivanzaida/structures'

/**
 * GRAPHICS:DRAW_LOW_QUALITY_PHOTO_TO_PHONE
 *
 * 0x4FA503A6757253A7

 * 
 * Call this to draw the low quality copy of the photo to the phone.
 * You can only call this after GET_STATUS_OF_CREATE_LOW_QUALITY_COPY_OF_PHOTO has returned PHOTO_OPERATION_SUCCEEDED. You can't call this after calling FREE_MEMORY_FOR_LOW_QUALITY_PHOTO
 * Call with FALSE to stop drawing the photo
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} draw
 * @param {EEPhotoRotation} photoRotation
 */
export function drawLowQualityPhotoToPhone(draw: boolean, photoRotation: EEPhotoRotation | number = 0): void {
	const drawLowQualityPhotoToPhone_result = Citizen.invokeNative<void>('0x4FA503A6757253A7', draw, photoRotation);
	return drawLowQualityPhotoToPhone_result;
}