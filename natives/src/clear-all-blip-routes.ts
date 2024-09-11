/**
 * HUD:CLEAR_ALL_BLIP_ROUTES
 *
 * 0xCABB9B176D4BC0C6

 * 
 * ------------------------------------------------------------------
 */
export function clearAllBlipRoutes(): void {
	const clearAllBlipRoutes_result = Citizen.invokeNative<void>('0xCABB9B176D4BC0C6', );
	return clearAllBlipRoutes_result;
}