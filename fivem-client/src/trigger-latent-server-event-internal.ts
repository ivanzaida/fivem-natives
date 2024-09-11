/**
 * CFX:TRIGGER_LATENT_SERVER_EVENT_INTERNAL
 *
 * 0X128737EA

 * The backing function for TriggerLatentServerEvent.
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @param {string} eventPayload
 * @param {number} payloadLength
 * @param {number} bps
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void {
	const triggerLatentServerEventInternal_result = Citizen.invokeNative<void>('0X128737EA', eventName, eventPayload, payloadLength, bps);
	return triggerLatentServerEventInternal_result;
}