/**
 * SOCIALCLUB:SC_PAUSE_NEWS_SHUTDOWN
 *
 * 0x88600576EDB50BD2

 * 
 * ------------------------------------------------------------------
 */
export function scPauseNewsShutdown(): void {
	const scPauseNewsShutdown_result = Citizen.invokeNative<void>('0x88600576EDB50BD2', );
	return scPauseNewsShutdown_result;
}