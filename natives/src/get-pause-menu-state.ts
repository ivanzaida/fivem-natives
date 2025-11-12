import { EPauseMenuState } from '@ivanzaida/structures'

/**
 * HUD:GET_PAUSE_MENU_STATE
 *
 * 0x05AA183DA1344935

 * 
 * Because 'active' is a relatively fluid term depending on your needs, this function expands IS_PAUSE_MENU_ACTIVE
 * (which effectively just checks == PM_READY)
 * 
 * Returns:
 * 
 * 0
 * 5
 * 10
 * 15
 * 20
 * 25
 * 30
 * 35
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EPauseMenuState}  
 */
export function getPauseMenuState(): EPauseMenuState {
	const getPauseMenuState_result = Citizen.invokeNative<EPauseMenuState>('0x05AA183DA1344935', );
	return getPauseMenuState_result;
}