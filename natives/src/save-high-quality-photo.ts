/**
 * GRAPHICS:SAVE_HIGH_QUALITY_PHOTO
 *
 * 0xBA0D235D624BE8BD

 * 
 * Triggers the saving of a photo into the specified slot in the photo gallery.
 * This can only be called after GET_STATUS_OF_TAKE_HIGH_QUALITY_PHOTO has returned PHOTO_OPERATION_SUCCEEDED and before calling FREE_MEMORY_FOR_HIGH_QUALITY_PHOTO
 * 
 * 1 match in 1 script. cellphone_controller.
 * p0 is -1 in scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} photoSlot
 * @returns {boolean}  
 */
export function saveHighQualityPhoto(photoSlot: number): boolean {
	const saveHighQualityPhoto_result = Citizen.invokeNative<boolean>('0xBA0D235D624BE8BD', photoSlot);
	return saveHighQualityPhoto_result;
}