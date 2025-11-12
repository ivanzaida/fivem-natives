/**
 * GRAPHICS:GET_MAXIMUM_NUMBER_OF_PHOTOS
 *
 * 0x209F5DE8084C2803

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaximumNumberOfPhotos(): number {
	const getMaximumNumberOfPhotos_result = Citizen.invokeNative<number>('0x209F5DE8084C2803', );
	return getMaximumNumberOfPhotos_result;
}