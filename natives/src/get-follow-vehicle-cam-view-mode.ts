import { ECamViewMode } from '@ivanzaida/structures'

/**
 * CAM:GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 *
 * 0x655E58062EC2D269

 * 
 * Gets the view mode used by the follow-vehicle and vehicle-aim cameras associated with classes of vehicles that are not handled specially, such as cars. Use GET_CAM_VIEW_MODE_FOR_CONTEXT to query the view mode applied for other classes of vehicle.
 * 
 * Returns the type of camera:
 * 
 * enum _viewmode //0xA11D7CA8
 * {
 * 	THIRD_PERSON_NEAR = 0,
 * 	THIRD_PERSON_MEDIUM = 1,
 * 	THIRD_PERSON_FAR = 2,
 * 	CINEMATIC = 3,
 * 	FIRST_PERSON = 4
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ECamViewMode}  
 */
export function getFollowVehicleCamViewMode(): ECamViewMode {
	const getFollowVehicleCamViewMode_result = Citizen.invokeNative<ECamViewMode>('0x655E58062EC2D269', );
	return getFollowVehicleCamViewMode_result;
}