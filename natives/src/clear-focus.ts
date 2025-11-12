/**
 * STREAMING:CLEAR_FOCUS
 *
 * 0xE3F88173F42C071B

 * 
 * The game focus is used for loading map data, collisions, object population etc.
 * If this has been overridden by script, it is important to clear it afterwards
 * Clears the overridden game focus and sets it to the player ped again (default)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearFocus(): void {
	const clearFocus_result = Citizen.invokeNative<void>('0xE3F88173F42C071B', );
	return clearFocus_result;
}