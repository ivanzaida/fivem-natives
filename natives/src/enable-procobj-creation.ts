/**
 * GRAPHICS:ENABLE_PROCOBJ_CREATION
 *
 * 0x976136EB2D134543

 * 
 * ------------------------------------------------------------------
 */
export function enableProcobjCreation(): void {
	const enableProcobjCreation_result = Citizen.invokeNative<void>('0x976136EB2D134543', );
	return enableProcobjCreation_result;
}