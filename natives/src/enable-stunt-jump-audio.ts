/**
 * AUDIO:ENABLE_STUNT_JUMP_AUDIO
 *
 * 0xA9C10BD85DD34D7E

 * 
 * Enable the stunt jump audio detection code
 * This command is meant to be called continuously while we want that code active
 * 
 * 
 * ------------------------------------------------------------------
 */
export function enableStuntJumpAudio(): void {
	const enableStuntJumpAudio_result = Citizen.invokeNative<void>('0xA9C10BD85DD34D7E', );
	return enableStuntJumpAudio_result;
}