/**
 * CFX:ADD_AUDIO_SUBMIX_OUTPUT
 *
 * 0XAC6E290D

 * Adds an output for the specified audio submix.
 * 
 * ------------------------------------------------------------------
 * @param {number} submixId The input submix.
 * @param {number} outputSubmixId The output submix. Use 0 for the master game submix.
 */
export function addAudioSubmixOutput(submixId: number, outputSubmixId: number): void {
	const addAudioSubmixOutput_result = Citizen.invokeNative<void>('0XAC6E290D', submixId, outputSubmixId);
	return addAudioSubmixOutput_result;
}