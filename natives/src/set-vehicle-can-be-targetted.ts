import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_BE_TARGETTED
 *
 * 0xCF9C21E54DB720B8

 * 
 * This has not yet been tested - it's just an assumption of what the types could be.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canBeTargettedFlag
 */
export function setVehicleCanBeTargetted(vehicle: VehicleIndex, canBeTargettedFlag: boolean): void {
	const setVehicleCanBeTargetted_result = Citizen.invokeNative<void>('0xCF9C21E54DB720B8', vehicle, canBeTargettedFlag);
	return setVehicleCanBeTargetted_result;
}