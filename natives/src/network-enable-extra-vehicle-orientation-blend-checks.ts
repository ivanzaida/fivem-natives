import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ENABLE_EXTRA_VEHICLE_ORIENTATION_BLEND_CHECKS
 *
 * 0xFA3B6F3FE5E66382

 * 
 * Set a cloned network vehicle to perform extra validation checks when blending it's orientation based on network
 * updates. This is useful for network modes where players are expected to crash into each other a lot (not races,
 * rather specific modes that encourage crashing) to reduce physics popping issues
 * IMPORTANT NOTE - THIS IS AN EXPENSIVE FUNCTION - ONLY USE WHEN NECESSARY AND TURN OFF WHEN NOT REQUIRED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} enableExtraChecks
 */
export function networkEnableExtraVehicleOrientationBlendChecks(networkId: NetworkIndex, enableExtraChecks: boolean): void {
	const networkEnableExtraVehicleOrientationBlendChecks_result = Citizen.invokeNative<void>('0xFA3B6F3FE5E66382', networkId, enableExtraChecks);
	return networkEnableExtraVehicleOrientationBlendChecks_result;
}