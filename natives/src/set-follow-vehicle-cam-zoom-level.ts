import { EVehicleZoomLevel } from '@ivanzaida/structures'

/**
 * CAM:SET_FOLLOW_VEHICLE_CAM_ZOOM_LEVEL
 *
 * 0x872D985A4B3A9EEF

 * 
 * Deprecated! Please now use SET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EVehicleZoomLevel} zoomLevel
 */
export function setFollowVehicleCamZoomLevel(zoomLevel: EVehicleZoomLevel | number): void {
	const setFollowVehicleCamZoomLevel_result = Citizen.invokeNative<void>('0x872D985A4B3A9EEF', zoomLevel);
	return setFollowVehicleCamZoomLevel_result;
}