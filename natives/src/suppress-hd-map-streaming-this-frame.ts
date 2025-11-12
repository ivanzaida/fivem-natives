/**
 * STREAMING:SUPPRESS_HD_MAP_STREAMING_THIS_FRAME
 *
 * 0xCA2E379E3CAB622F

 * 
 * stops the game from requesting new high detail imap files (e.g. to help streaming performance when flying fast etc)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function suppressHdMapStreamingThisFrame(): void {
	const suppressHdMapStreamingThisFrame_result = Citizen.invokeNative<void>('0xCA2E379E3CAB622F', );
	return suppressHdMapStreamingThisFrame_result;
}