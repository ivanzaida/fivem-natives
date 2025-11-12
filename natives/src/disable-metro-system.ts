/**
 * INTERIOR:DISABLE_METRO_SYSTEM
 *
 * 0x01C8E9BB989C1EEE

 * 
 * completely disable the metro system in the game
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} disable
 */
export function disableMetroSystem(disable: boolean): void {
	const disableMetroSystem_result = Citizen.invokeNative<void>('0x01C8E9BB989C1EEE', disable);
	return disableMetroSystem_result;
}