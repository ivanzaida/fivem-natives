import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_USE_HIGH_PRECISION_BLENDING
 *
 * 0x6CBA9D07DDF3A4F4

 * 
 * Sets whether to use high precision network blending for the specified network ID. Currently this can only be
 * called on objects (not vehicles and peds). High precision blending is useful for small objects that need to be kept
 * very tightly in sync for gameplay purposes (e.g. a golf ball in a golf mini-game)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} useHighPrecision
 */
export function networkUseHighPrecisionBlending(networkId: NetworkIndex, useHighPrecision: boolean): void {
	const networkUseHighPrecisionBlending_result = Citizen.invokeNative<void>('0x6CBA9D07DDF3A4F4', networkId, useHighPrecision);
	return networkUseHighPrecisionBlending_result;
}