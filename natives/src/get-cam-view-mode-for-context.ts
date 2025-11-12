import { ECamViewModeContext, ECamViewMode } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_VIEW_MODE_FOR_CONTEXT
 *
 * 0xBCF87EE3DC296C2A

 * 
 * context: see _GET_CAM_ACTIVE_VIEW_MODE_CONTEXT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ECamViewModeContext} context
 * @returns {ECamViewMode}  
 */
export function getCamViewModeForContext(context: ECamViewModeContext | number): ECamViewMode {
	const getCamViewModeForContext_result = Citizen.invokeNative<ECamViewMode>('0xBCF87EE3DC296C2A', context);
	return getCamViewModeForContext_result;
}