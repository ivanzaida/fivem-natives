import { ECamViewModeContext, ECamViewMode } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_VIEW_MODE_FOR_CONTEXT
 *
 * 0x07938654FF332D78

 * 
 * context: see _GET_CAM_ACTIVE_VIEW_MODE_CONTEXT, viewmode: see CAM.GET_FOLLOW_VEHICLE_CAM_VIEW_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECamViewModeContext} context
 * @param {ECamViewMode} viewMode
 */
export function setCamViewModeForContext(context: ECamViewModeContext | number, viewMode: ECamViewMode | number): void {
	const setCamViewModeForContext_result = Citizen.invokeNative<void>('0x07938654FF332D78', context, viewMode);
	return setCamViewModeForContext_result;
}