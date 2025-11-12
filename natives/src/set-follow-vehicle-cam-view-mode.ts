import { ECamViewMode } from '@ivanzaida/structures'

/**
 * CAM:SET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 *
 * 0x043CE6FFCF2F6963

 * 
 * Sets the view mode used by the follow-vehicle and vehicle-aim cameras associated with classes of vehicles that are not handled specially, such as cars. Use SET_CAM_VIEW_MODE_FOR_CONTEXT to set the view mode applied for other classes of vehicle.
 * 
 * Sets the type of Player camera in vehicles:
 * viewmode: see CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECamViewMode} viewMode
 */
export function setFollowVehicleCamViewMode(viewMode: ECamViewMode | number): void {
	const setFollowVehicleCamViewMode_result = Citizen.invokeNative<void>('0x043CE6FFCF2F6963', viewMode);
	return setFollowVehicleCamViewMode_result;
}