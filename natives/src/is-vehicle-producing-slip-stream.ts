import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_PRODUCING_SLIP_STREAM
 *
 * 0x69347FDCD85BCA24

 * 
 * Returns true if the vehicle is being slipstreamed by another vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleProducingSlipStream(vehicle: VehicleIndex): boolean {
	const isVehicleProducingSlipStream_result = Citizen.invokeNative<boolean>('0x69347FDCD85BCA24', vehicle);
	return isVehicleProducingSlipStream_result;
}