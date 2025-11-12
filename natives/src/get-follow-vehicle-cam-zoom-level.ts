import { EVehicleZoomLevel } from '@ivanzaida/structures'

/**
 * CAM:GET_FOLLOW_VEHICLE_CAM_ZOOM_LEVEL
 *
 * 0xD511F6B5FB8D3854

 * 
 * Deprecated! Please now use GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EVehicleZoomLevel}  
 */
export function getFollowVehicleCamZoomLevel(): EVehicleZoomLevel {
	const getFollowVehicleCamZoomLevel_result = Citizen.invokeNative<EVehicleZoomLevel>('0xD511F6B5FB8D3854', );
	return getFollowVehicleCamZoomLevel_result;
}