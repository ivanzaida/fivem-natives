/**
 * CFX:ENABLE_EDITOR_RUNTIME
 *
 * 0XC383871D

 * Enables the editor runtime mode, changing game behavior to track entity metadata.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 */
export function enableEditorRuntime(): void {
	const enableEditorRuntime_result = Citizen.invokeNative<void>('0XC383871D', );
	return enableEditorRuntime_result;
}