import { ESavegameOperationStatus } from '@ivanzaida/structures'

/**
 * MISC:GET_STATUS_OF_MANUAL_SAVE
 *
 * 0xDEBBFB8E738665F4

 * 
 * ------------------------------------------------------------------
 * @returns {ESavegameOperationStatus}  
 */
export function getStatusOfManualSave(): ESavegameOperationStatus {
	const getStatusOfManualSave_result = Citizen.invokeNative<ESavegameOperationStatus>('0xDEBBFB8E738665F4', );
	return getStatusOfManualSave_result;
}