/**
 * PED:STOP_ANY_PED_MODEL_BEING_SUPPRESSED
 *
 * 0xE5D8756E0C3EFFB7

 * 
 * ------------------------------------------------------------------
 */
export function stopAnyPedModelBeingSuppressed(): void {
	const stopAnyPedModelBeingSuppressed_result = Citizen.invokeNative<void>('0xE5D8756E0C3EFFB7', );
	return stopAnyPedModelBeingSuppressed_result;
}