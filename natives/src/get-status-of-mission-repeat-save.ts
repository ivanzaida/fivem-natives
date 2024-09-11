import { ESavegameOperationStatus } from '@ivanzaida/structures'

/**
 * MISC:GET_STATUS_OF_MISSION_REPEAT_SAVE
 *
 * 0x7DE5CD18CC7CF0A6

 * 
 * ------------------------------------------------------------------
 * @returns {ESavegameOperationStatus}  
 */
export function getStatusOfMissionRepeatSave(): ESavegameOperationStatus {
	const getStatusOfMissionRepeatSave_result = Citizen.invokeNative<ESavegameOperationStatus>('0x7DE5CD18CC7CF0A6', );
	return getStatusOfMissionRepeatSave_result;
}