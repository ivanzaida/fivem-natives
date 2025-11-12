import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ENTITY_USE_HIGH_PRECISION_ROTATION
 *
 * 0xB0D23E19A23DCAAF

 * 
 * Sets whether to use high precision rotation network for the specified network ID. Currently this can only be
 * called on objects (not vehicles and peds).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} useHighPrecision
 */
export function networkEntityUseHighPrecisionRotation(networkId: NetworkIndex, useHighPrecision: boolean): void {
	const networkEntityUseHighPrecisionRotation_result = Citizen.invokeNative<void>('0xB0D23E19A23DCAAF', networkId, useHighPrecision);
	return networkEntityUseHighPrecisionRotation_result;
}