import { PedIndex, EEventNames } from '@ivanzaida/structures'

/**
 * PED:HAS_PED_RECEIVED_EVENT
 *
 * 0x613F3705BEA060B4

 * 
 * Returns true if the ped has received the event (this is similar to IS_PED_RESPONDING_TO_EVENT,
 * but will work with blocking of non-temporary events).  EVENT_INVALID can be used to test if the ped has received any event.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EEventNames} eventType
 * @returns {boolean}  
 */
export function hasPedReceivedEvent(ped: PedIndex, eventType: EEventNames | number): boolean {
	const hasPedReceivedEvent_result = Citizen.invokeNative<boolean>('0x613F3705BEA060B4', ped, eventType);
	return hasPedReceivedEvent_result;
}