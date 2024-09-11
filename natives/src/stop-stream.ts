/**
 * AUDIO:STOP_STREAM
 *
 * 0x22A76EDE2316E9A1

 * 
 * ------------------------------------------------------------------
 */
export function stopStream(): void {
	const stopStream_result = Citizen.invokeNative<void>('0x22A76EDE2316E9A1', );
	return stopStream_result;
}