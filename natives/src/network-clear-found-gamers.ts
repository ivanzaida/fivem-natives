/**
 * NETWORK:NETWORK_CLEAR_FOUND_GAMERS
 *
 * 0x40F220671F7EF07D

 * 
 * ------------------------------------------------------------------
 */
export function networkClearFoundGamers(): void {
	const networkClearFoundGamers_result = Citizen.invokeNative<void>('0x40F220671F7EF07D', );
	return networkClearFoundGamers_result;
}