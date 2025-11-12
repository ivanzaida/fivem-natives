/**
 * MISC:IS_COMMANDLINE_END_USER_BENCHMARK
 *
 * 0x3BFC5030EF1E6147

 * 
 * Returns true if command line option '-benchmark' is set.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isCommandlineEndUserBenchmark(): boolean {
	const isCommandlineEndUserBenchmark_result = Citizen.invokeNative<boolean>('0x3BFC5030EF1E6147', );
	return isCommandlineEndUserBenchmark_result;
}