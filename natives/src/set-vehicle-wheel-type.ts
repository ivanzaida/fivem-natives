import { VehicleIndex, EModWheelType } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WHEEL_TYPE
 *
 * 0xE33678A9AE50A01B

 * 
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
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EModWheelType} type
 */
export function setVehicleWheelType(vehicle: VehicleIndex, type: EModWheelType | number): void {
	const setVehicleWheelType_result = Citizen.invokeNative<void>('0xE33678A9AE50A01B', vehicle, type);
	return setVehicleWheelType_result;
}