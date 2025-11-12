import { VehicleIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ENABLE_HIGH_SPEED_EDGE_FALL_DETECTION
 *
 * 0x8810DE004A94F18B

 * 
 * Enables a periodic ShapeTest within the NetBlender and invokes rage::netBlenderLinInterp::GoStraightToTarget (or some functional wrapper).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enable
 */
export function setNetworkEnableHighSpeedEdgeFallDetection(vehicle: VehicleIndex, enable: boolean): void {
	const setNetworkEnableHighSpeedEdgeFallDetection_result = Citizen.invokeNative<void>('0x8810DE004A94F18B', vehicle, enable);
	return setNetworkEnableHighSpeedEdgeFallDetection_result;
}