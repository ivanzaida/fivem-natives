/**
 * NETWORK:DELAY_MP_STORE_OPEN
 *
 * 0xE50095A9B205820E

 * 
 * Delays the store from opening by 3 frames. This is to allow such transitions as skycam to complete.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function delayMpStoreOpen(): void {
	const delayMpStoreOpen_result = Citizen.invokeNative<void>('0xE50095A9B205820E', );
	return delayMpStoreOpen_result;
}