import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BULLDOZER_ARM_POSITION
 *
 * 0x741EDDC25DCDC64D

 * 
 * Sets a vehicle bulldozer arm position
 * 
 * Sets the arm position of a bulldozer. Position must be a value between 0.0 and 1.0. Ignored when `p2` is set to false, instead incrementing arm position by 0.1 (or 10%).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} armPosition
 * @param {boolean} snapToPosition
 */
export function setVehicleBulldozerArmPosition(vehicle: VehicleIndex, armPosition: number, snapToPosition: boolean = false): void {
	const setVehicleBulldozerArmPosition_result = Citizen.invokeNative<void>('0x741EDDC25DCDC64D', vehicle, armPosition, snapToPosition);
	return setVehicleBulldozerArmPosition_result;
}