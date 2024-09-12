/**
 * CFX:DISABLE_EDITOR_RUNTIME
 *
 * 0xB1622B17

 * Disables the editor runtime mode, changing game behavior to not track entity metadata.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 */
export function disableEditorRuntime(): void {
	const disableEditorRuntime_result = Citizen.invokeNative<void>('0xB1622B17', );
	return disableEditorRuntime_result;
}