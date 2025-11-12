import { ERandomEvent } from '@ivanzaida/structures'

/**
 * MISC:SUPRESS_RANDOM_EVENT_THIS_FRAME
 *
 * 0x06687A6579389884

 * 
 * Set a random event to be enabled or disabled for this frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ERandomEvent} eventType
 * @param {boolean} enable
 */
export function supressRandomEventThisFrame(eventType: ERandomEvent | number, enable: boolean): void {
	const supressRandomEventThisFrame_result = Citizen.invokeNative<void>('0x06687A6579389884', eventType, enable);
	return supressRandomEventThisFrame_result;
}