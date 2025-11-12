import { EOskStatus } from '@ivanzaida/structures'

/**
 * MISC:UPDATE_ONSCREEN_KEYBOARD
 *
 * 0x66DA7155B68E7638

 * 
 * Updates the system keyboard, and returns its status. This should be called periodically until a non-PENDING status is returned.
 * 
 * Returns the current status of the onscreen keyboard, and updates the output.
 * 
 * Status Codes:
 * 
 * -1: Keyboard isn't active
 * 0: User still editing
 * 1: User has finished editing
 * 2: User has canceled editing
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EOskStatus}  
 */
export function updateOnscreenKeyboard(): EOskStatus {
	const updateOnscreenKeyboard_result = Citizen.invokeNative<EOskStatus>('0x66DA7155B68E7638', );
	return updateOnscreenKeyboard_result;
}