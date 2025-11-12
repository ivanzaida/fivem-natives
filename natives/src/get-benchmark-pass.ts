/**
 * MISC:GET_BENCHMARK_PASS
 *
 * 0x7007C113A8466ADE

 * 
 * Returns value of the '-benchmarkPass' command line option.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getBenchmarkPass(): number {
	const getBenchmarkPass_result = Citizen.invokeNative<number>('0x7007C113A8466ADE', );
	return getBenchmarkPass_result;
}