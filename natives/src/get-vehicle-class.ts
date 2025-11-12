import { VehicleIndex, EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS
 *
 * 0x5506AFBD6056C05F

 * 
 * Returns an int
 * 
 * Vehicle Classes:
 * 0: Compacts
 * 1: Sedans
 * 2: SUVs
 * 3: Coupes
 * 4: Muscle
 * 5: Sports Classics
 * 6: Sports
 * 7: Super
 * 8: Motorcycles
 * 9: Off-road
 * 10: Industrial
 * 11: Utility
 * 12: Vans
 * 13: Cycles
 * 14: Boats
 * 15: Helicopters
 * 16: Planes
 * 17: Service
 * 18: Emergency
 * 19: Military
 * 20: Commercial
 * 21: Trains
 * 
 * char buffer[128];
 * std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS(vehicle));
 * 
 * const char className = HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION(buffer);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EVehicleClass}  
 */
export function getVehicleClass(vehicle: VehicleIndex): EVehicleClass {
	const getVehicleClass_result = Citizen.invokeNative<EVehicleClass>('0x5506AFBD6056C05F', vehicle);
	return getVehicleClass_result;
}