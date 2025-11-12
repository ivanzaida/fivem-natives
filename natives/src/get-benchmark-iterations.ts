/**
 * MISC:GET_BENCHMARK_ITERATIONS
 *
 * 0x588D1FA610887CFD

 * 
 * Returns value of the '-benchmarkIterations' command line option.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getBenchmarkIterations(): number {
	const getBenchmarkIterations_result = Citizen.invokeNative<number>('0x588D1FA610887CFD', );
	return getBenchmarkIterations_result;
}