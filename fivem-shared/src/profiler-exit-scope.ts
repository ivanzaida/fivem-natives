/**
 * CFX:PROFILER_EXIT_SCOPE
 *
 * 0xB39CA35C

 * Scope exit for profiler.
 * 
 * ------------------------------------------------------------------
 */
export function profilerExitScope(): void {
	const profilerExitScope_result = Citizen.invokeNative<void>('0xB39CA35C', );
	return profilerExitScope_result;
}