/**
 * PAD:SHUTDOWN_PC_SCRIPTED_CONTROLS
 *
 * 0x4E6A84BCEF2DCCBF

 * 
 * ------------------------------------------------------------------
 */
export function shutdownPcScriptedControls(): void {
	const shutdownPcScriptedControls_result = Citizen.invokeNative<void>('0x4E6A84BCEF2DCCBF', );
	return shutdownPcScriptedControls_result;
}