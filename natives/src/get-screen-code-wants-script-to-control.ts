import { EFrontendMenuScreen } from '@ivanzaida/structures'

/**
 * HUD:GET_SCREEN_CODE_WANTS_SCRIPT_TO_CONTROL
 *
 * 0x2EE7F7571D5CF4C1

 * 
 * ------------------------------------------------------------------
 * @returns {EFrontendMenuScreen}  
 */
export function getScreenCodeWantsScriptToControl(): EFrontendMenuScreen {
	const getScreenCodeWantsScriptToControl_result = Citizen.invokeNative<EFrontendMenuScreen>('0x2EE7F7571D5CF4C1', );
	return getScreenCodeWantsScriptToControl_result;
}