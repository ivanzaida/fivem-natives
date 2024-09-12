/**
 * EVENT:SUPPRESS_SHOCKING_EVENTS_NEXT_FRAME
 *
 * 0xE33015D5CE800786

 * 
 * ------------------------------------------------------------------
 */
export function suppressShockingEventsNextFrame(): void {
	const suppressShockingEventsNextFrame_result = Citizen.invokeNative<void>('0xE33015D5CE800786', );
	return suppressShockingEventsNextFrame_result;
}