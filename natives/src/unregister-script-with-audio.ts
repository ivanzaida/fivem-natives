/**
 * AUDIO:UNREGISTER_SCRIPT_WITH_AUDIO
 *
 * 0x6CC88053C1AF072D

 * 
 * Doesn't need to be called in your cleanup, as TERMINATE_THIS_SCRIPT will take care of it.
 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 */
export function unregisterScriptWithAudio(): void {
	const unregisterScriptWithAudio_result = Citizen.invokeNative<void>('0x6CC88053C1AF072D', );
	return unregisterScriptWithAudio_result;
}