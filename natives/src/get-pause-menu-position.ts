import { Vector3 } from '@ivanzaida/structures'

/**
 * HUD:GET_PAUSE_MENU_POSITION
 *
 * 0xE7DCCB6BBE933741

 * 
 * This command will assert if the pause menu is not active
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {Vector3}  
 */
export function getPauseMenuPosition(): Vector3 {
	const getPauseMenuPosition_result = Citizen.invokeNative<Vector3>('0xE7DCCB6BBE933741', );
	return getPauseMenuPosition_result;
}