/**
 * MISC:SAVE_END_USER_BENCHMARK
 *
 * 0x2070D32BEB6A3825

 * 
 * Saves the benchmark recording to %USERPROFILE%\Documents\Rockstar Games\GTA V\Benchmarks and submits some metrics.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function saveEndUserBenchmark(): void {
	const saveEndUserBenchmark_result = Citizen.invokeNative<void>('0x2070D32BEB6A3825', );
	return saveEndUserBenchmark_result;
}