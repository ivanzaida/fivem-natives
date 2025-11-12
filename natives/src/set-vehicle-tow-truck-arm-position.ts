import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TOW_TRUCK_ARM_POSITION
 *
 * 0xF20C964ED62BD3A7

 * 
 * Sets a tow truck arm position, 0.0 on the ground 1.0 in the air
 * 
 * Sets how much the crane on the tow truck is raised, where 0.0 is fully lowered and 1.0 is fully raised.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} towTruckVehicle
 * @param {number} armPosition
 */
export function setVehicleTowTruckArmPosition(towTruckVehicle: VehicleIndex, armPosition: number): void {
	const setVehicleTowTruckArmPosition_result = Citizen.invokeNative<void>('0xF20C964ED62BD3A7', towTruckVehicle, armPosition);
	return setVehicleTowTruckArmPosition_result;
}