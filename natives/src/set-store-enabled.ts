/**
 * NETWORK:SET_STORE_ENABLED
 *
 * 0x56B77EAF3DD4C954

 * 
 * Allows script to set whether the DLC store is available from the pause menu
 * 
 * Access to the store for shark cards etc...
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setStoreEnabled(enabled: boolean): void {
	const setStoreEnabled_result = Citizen.invokeNative<void>('0x56B77EAF3DD4C954', enabled);
	return setStoreEnabled_result;
}