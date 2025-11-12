import { ECamViewModeContext } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_ACTIVE_VIEW_MODE_CONTEXT
 *
 * 0xBF03D0685ADC793B

 * 
 * Returns the view mode context for the active gameplay camera. This may then be used with commands such as GET_CAM_VIEW_MODE_FOR_CONTEXT and SET_CAM_VIEW_MODE_FOR_CONTEXT. See CAM_VIEW_MODE_CONTEXT enumeration.
 * 
 * enum Context
 * {
 * 	ON_FOOT,
 * 	IN_VEHICLE,
 * 	ON_BIKE,
 * 	IN_BOAT,
 * 	IN_AIRCRAFT,
 * 	IN_SUBMARINE,
 * 	IN_HELI,
 * 	IN_TURRET
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ECamViewModeContext}  
 */
export function getCamActiveViewModeContext(): ECamViewModeContext {
	const getCamActiveViewModeContext_result = Citizen.invokeNative<ECamViewModeContext>('0xBF03D0685ADC793B', );
	return getCamActiveViewModeContext_result;
}