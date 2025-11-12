import { VehicleIndex, EModWheelType } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_TYPE
 *
 * 0xDA58D7AE

 * 
 * Returns an int
 * 
 * Wheel Types:
 * 0: Sport
 * 1: Muscle
 * 2: Lowrider
 * 3: SUV
 * 4: Offroad
 * 5: Tuner
 * 6: Bike Wheels
 * 7: High End
 * 8: Benny's Originals
 * 9: Benny's Bespoke
 * 10: Racing
 * 11: Street
 * 12: Track
 * 
 * Tested in Los Santos Customs
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {EModWheelType}  
 */
export function getVehicleWheelType(vehicle: VehicleIndex): EModWheelType {
	const getVehicleWheelType_result = Citizen.invokeNative<EModWheelType>('0xDA58D7AE', vehicle);
	return getVehicleWheelType_result;
}