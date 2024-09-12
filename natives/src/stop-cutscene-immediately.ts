/**
 * CUTSCENE:STOP_CUTSCENE_IMMEDIATELY
 *
 * 0xA7E4AA8D29D3DAC1

 * 
 * ------------------------------------------------------------------
 */
export function stopCutsceneImmediately(): void {
	const stopCutsceneImmediately_result = Citizen.invokeNative<void>('0xA7E4AA8D29D3DAC1', );
	return stopCutsceneImmediately_result;
}