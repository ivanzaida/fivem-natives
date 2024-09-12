/**
 * EVENT:SUPPRESS_AGITATION_EVENTS_NEXT_FRAME
 *
 * 0x6DB23D1A50246D3A

 * 
 * ------------------------------------------------------------------
 */
export function suppressAgitationEventsNextFrame(): void {
	const suppressAgitationEventsNextFrame_result = Citizen.invokeNative<void>('0x6DB23D1A50246D3A', );
	return suppressAgitationEventsNextFrame_result;
}