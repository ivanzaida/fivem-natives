import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:OVERRIDE_VEHICLE_PEDS_CAN_STAND_ON_TOP_FLAG
 *
 * 0x7FA03E76

 * Overrides whether or not peds can stand on top of the specified vehicle.Note this flag is not replicated automatically, you will have to manually do so.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle.
 * @param {boolean} can Can they?
 */
export function overrideVehiclePedsCanStandOnTopFlag(vehicle: VehicleIndex, can: boolean): void {
	const overrideVehiclePedsCanStandOnTopFlag_result = Citizen.invokeNative<void>('0x7FA03E76', vehicle, can);
	return overrideVehiclePedsCanStandOnTopFlag_result;
}