/**
 * GRAPHICS:GET_CURRENT_NUMBER_OF_CLOUD_PHOTOS
 *
 * 0x991C49208F09B7C0

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCurrentNumberOfCloudPhotos(): number {
	const getCurrentNumberOfCloudPhotos_result = Citizen.invokeNative<number>('0x991C49208F09B7C0', );
	return getCurrentNumberOfCloudPhotos_result;
}