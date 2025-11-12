import { EShockingEventLevel } from '@ivanzaida/structures'

/**
 * EVENT:SUPPRESS_SHOCKING_EVENT_TYPE_NEXT_FRAME
 *
 * 0x75043178E34E4D3C

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EShockingEventLevel} eventShockingLevel
 */
export function suppressShockingEventTypeNextFrame(eventShockingLevel: EShockingEventLevel | number): void {
	const suppressShockingEventTypeNextFrame_result = Citizen.invokeNative<void>('0x75043178E34E4D3C', eventShockingLevel);
	return suppressShockingEventTypeNextFrame_result;
}