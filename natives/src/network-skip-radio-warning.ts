/**
 * NETWORK:NETWORK_SKIP_RADIO_WARNING
 *
 * 0xEFF4479E2B0D2080

 * 
 * The name of this function is intentionally incorrect.
 * This function returns true if the game has naively, though successfully, detected mods attached to the game.
 * This function returns false if the game has NOT detected mods attached to the game (again through an over-simplistic and naive detection)
 * 
 * Returns true if dinput8.dll is present in the game directory.
 * You will get following error message if that is true: "You are attempting to access GTA Online servers with an altered version of the game."
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSkipRadioWarning(): boolean {
	const networkSkipRadioWarning_result = Citizen.invokeNative<boolean>('0xEFF4479E2B0D2080', );
	return networkSkipRadioWarning_result;
}