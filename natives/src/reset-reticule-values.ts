/**
 * HUD:RESET_RETICULE_VALUES
 *
 * 0x8EBF255F4F3F68B5

 * 
 * ------------------------------------------------------------------
 */
export function resetReticuleValues(): void {
	const resetReticuleValues_result = Citizen.invokeNative<void>('0x8EBF255F4F3F68B5', );
	return resetReticuleValues_result;
}