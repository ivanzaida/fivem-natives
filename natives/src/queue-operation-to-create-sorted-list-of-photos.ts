/**
 * GRAPHICS:QUEUE_OPERATION_TO_CREATE_SORTED_LIST_OF_PHOTOS
 *
 * 0xAE1965746C93F8D5

 * 
 * 2 matches across 2 scripts. Only showed in appcamera & appmedia. Both were 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} scanForSaving
 * @returns {boolean}  
 */
export function queueOperationToCreateSortedListOfPhotos(scanForSaving: boolean): boolean {
	const queueOperationToCreateSortedListOfPhotos_result = Citizen.invokeNative<boolean>('0xAE1965746C93F8D5', scanForSaving);
	return queueOperationToCreateSortedListOfPhotos_result;
}