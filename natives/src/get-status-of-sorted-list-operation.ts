import { EPhotoOperationStatus } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_STATUS_OF_SORTED_LIST_OPERATION
 *
 * 0x62830FDE95255DE5

 * 
 * 3 matches across 3 scripts. First 2 were 0, 3rd was 1. Possibly a bool.
 * appcamera, appmedia, and cellphone_controller.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} scanForSaving
 * @returns {EPhotoOperationStatus}  
 */
export function getStatusOfSortedListOperation(scanForSaving: boolean): EPhotoOperationStatus {
	const getStatusOfSortedListOperation_result = Citizen.invokeNative<EPhotoOperationStatus>('0x62830FDE95255DE5', scanForSaving);
	return getStatusOfSortedListOperation_result;
}