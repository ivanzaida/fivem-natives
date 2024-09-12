import { EEHelpTextFloatingId } from '@ivanzaida/structures'

/**
 * HUD:IS_FLOATING_HELP_TEXT_ON_SCREEN
 *
 * 0x00A2121FCB70A45B

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpTextFloatingId} id
 * @returns {boolean}  
 */
export function isFloatingHelpTextOnScreen(id: EEHelpTextFloatingId | number): boolean {
	const isFloatingHelpTextOnScreen_result = Citizen.invokeNative<boolean>('0x00A2121FCB70A45B', id);
	return isFloatingHelpTextOnScreen_result;
}