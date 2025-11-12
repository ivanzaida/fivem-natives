import { EPedZoomLevel } from '@ivanzaida/structures'

/**
 * CAM:GET_FOLLOW_PED_CAM_ZOOM_LEVEL
 *
 * 0xE63C16EA2171C883

 * 
 * Deprecated! Please now use GET_FOLLOW_PED_CAM_VIEW_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EPedZoomLevel}  
 */
export function getFollowPedCamZoomLevel(): EPedZoomLevel {
	const getFollowPedCamZoomLevel_result = Citizen.invokeNative<EPedZoomLevel>('0xE63C16EA2171C883', );
	return getFollowPedCamZoomLevel_result;
}