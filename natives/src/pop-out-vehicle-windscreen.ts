import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:POP_OUT_VEHICLE_WINDSCREEN
 *
 * 0x4CF78EBCA2CD7E9E

 * 
 * Detaches the vehicle's windscreen.
 * For further information, see : gtaforums.com/topic/859570-glass/#entry1068894566
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function popOutVehicleWindscreen(vehicle: VehicleIndex): void {
	const popOutVehicleWindscreen_result = Citizen.invokeNative<void>('0x4CF78EBCA2CD7E9E', vehicle);
	return popOutVehicleWindscreen_result;
}