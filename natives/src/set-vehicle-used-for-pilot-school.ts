import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USED_FOR_PILOT_SCHOOL
 *
 * 0x43176180326D6988

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} isUsedForPilotSchool
 */
export function setVehicleUsedForPilotSchool(vehicle: VehicleIndex, isUsedForPilotSchool: boolean): void {
	const setVehicleUsedForPilotSchool_result = Citizen.invokeNative<void>('0x43176180326D6988', vehicle, isUsedForPilotSchool);
	return setVehicleUsedForPilotSchool_result;
}