/**
 * GRAPHICS:GET_MAXIMUM_NUMBER_OF_CLOUD_PHOTOS
 *
 * 0xA0BFBD756D313CF2

 * 
 * This function is hard-coded to always return 96.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaximumNumberOfCloudPhotos(): number {
	const getMaximumNumberOfCloudPhotos_result = Citizen.invokeNative<number>('0xA0BFBD756D313CF2', );
	return getMaximumNumberOfCloudPhotos_result;
}