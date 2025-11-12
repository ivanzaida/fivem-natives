/**
 * AUDIO:FREEZE_MICROPHONE
 *
 * 0xA7047BB729F81596

 * 
 * Allows script to freeze the microphone for a single frame, mantaining its current transform/settings.
 * This command should be called every frame you want to keep the microphone frozen, when you stop calling it it will automatically unfreeze
 * 
 * 
 * ------------------------------------------------------------------
 */
export function freezeMicrophone(): void {
	const freezeMicrophone_result = Citizen.invokeNative<void>('0xA7047BB729F81596', );
	return freezeMicrophone_result;
}