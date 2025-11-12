/**
 * DECORATOR:DECOR_REGISTER_LOCK
 *
 * 0x1B3E687F45E0A870

 * 
 * Called after all decorator type initializations.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function decorRegisterLock(): void {
	const decorRegisterLock_result = Citizen.invokeNative<void>('0x1B3E687F45E0A870', );
	return decorRegisterLock_result;
}