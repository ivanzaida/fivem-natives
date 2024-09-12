/**
 * CFX:TRIGGER_LATENT_CLIENT_EVENT_INTERNAL
 *
 * 0x70B35890

 * The backing function for TriggerLatentClientEvent.
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @param {string} eventTarget
 * @param {string} eventPayload
 * @param {number} payloadLength
 * @param {number} bps
 */
export function triggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void {
	const triggerLatentClientEventInternal_result = Citizen.invokeNative<void>('0x70B35890', eventName, eventTarget, eventPayload, payloadLength, bps);
	return triggerLatentClientEventInternal_result;
}