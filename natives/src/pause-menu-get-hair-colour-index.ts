/**
 * HUD:PAUSE_MENU_GET_HAIR_COLOUR_INDEX
 *
 * 0xE5E00092E71FB6A1

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function pauseMenuGetHairColourIndex(): number {
	const pauseMenuGetHairColourIndex_result = Citizen.invokeNative<number>('0xE5E00092E71FB6A1', );
	return pauseMenuGetHairColourIndex_result;
}