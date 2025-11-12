import { ECamViewMode } from '@ivanzaida/structures'

/**
 * CAM:SET_FOLLOW_PED_CAM_VIEW_MODE
 *
 * 0xF20AB5C13902BB8A

 * 
 * Sets the type of Player camera:
 * 
 * 0 - Third Person Close
 * 1 - Third Person Mid
 * 2 - Third Person Far
 * 4 - First Person
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECamViewMode} viewMode
 */
export function setFollowPedCamViewMode(viewMode: ECamViewMode | number): void {
	const setFollowPedCamViewMode_result = Citizen.invokeNative<void>('0xF20AB5C13902BB8A', viewMode);
	return setFollowPedCamViewMode_result;
}