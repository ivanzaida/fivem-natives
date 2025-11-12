/**
 * STREAMING:END_SRL
 *
 * 0xE9DE8F39ED85311E

 * 
 * Indicate that the current scripted cutscene has finished playing. This will end SRL playback. If RAG had been
 * set to record the SRL, this function will save the SRL to the assets folder.
 * 
 * Clear the current srl and stop rendering the area selected by PREFETCH_SRL and started with BEGIN_SRL.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function endSrl(): void {
	const endSrl_result = Citizen.invokeNative<void>('0xE9DE8F39ED85311E', );
	return endSrl_result;
}