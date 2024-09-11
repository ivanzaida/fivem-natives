/**
 * GRAPHICS:DISABLE_PROCOBJ_CREATION
 *
 * 0x7EEDA53E80999F2C

 * 
 * ------------------------------------------------------------------
 */
export function disableProcobjCreation(): void {
	const disableProcobjCreation_result = Citizen.invokeNative<void>('0x7EEDA53E80999F2C', );
	return disableProcobjCreation_result;
}