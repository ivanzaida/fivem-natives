import { ModelNames } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_INVALID_OBJECT_MODEL
 *
 * 0x72073521D4ACB83A

 * 
 * Sets a binary map for invalid models created in multiplayer. A telemetry event to Rwill be sent when a remote player creates an object with an invalid model
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 */
export function networkAddInvalidObjectModel(modelHashKey: ModelNames): void {
	const networkAddInvalidObjectModel_result = Citizen.invokeNative<void>('0x72073521D4ACB83A', modelHashKey);
	return networkAddInvalidObjectModel_result;
}