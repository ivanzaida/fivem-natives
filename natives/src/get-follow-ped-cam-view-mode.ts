import { ECamViewMode } from '@ivanzaida/structures'

/**
 * CAM:GET_FOLLOW_PED_CAM_VIEW_MODE
 *
 * 0x3B5989D5DB08A155

 * 
 * See viewmode enum in CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE for return value
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ECamViewMode}  
 */
export function getFollowPedCamViewMode(): ECamViewMode {
	const getFollowPedCamViewMode_result = Citizen.invokeNative<ECamViewMode>('0x3B5989D5DB08A155', );
	return getFollowPedCamViewMode_result;
}