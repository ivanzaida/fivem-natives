import { NetworkIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:NETWORK_USE_HIGH_PRECISION_TRAIN_BLENDING
 *
 * 0x0B5FFFF9010AEF80

 * 
 * Sets whether to use high precision network blending for the specified network ID.
 * High precision blending is useful for small objects that need to be kept very tightly in sync for gameplay purposes
 * 
 * Implemented only for trains.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} useHighPrecision
 */
export function networkUseHighPrecisionTrainBlending(networkId: NetworkIndex, useHighPrecision: boolean): void {
	const networkUseHighPrecisionTrainBlending_result = Citizen.invokeNative<void>('0x0B5FFFF9010AEF80', networkId, useHighPrecision);
	return networkUseHighPrecisionTrainBlending_result;
}