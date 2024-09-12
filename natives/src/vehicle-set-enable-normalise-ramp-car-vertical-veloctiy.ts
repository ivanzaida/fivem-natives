import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_ENABLE_NORMALISE_RAMP_CAR_VERTICAL_VELOCTIY
 *
 * 0xDCCC8272AEA5EA2C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} normalise
 */
export function vehicleSetEnableNormaliseRampCarVerticalVeloctiy(vehicle: VehicleIndex, normalise: boolean): void {
	const vehicleSetEnableNormaliseRampCarVerticalVeloctiy_result = Citizen.invokeNative<void>('0xDCCC8272AEA5EA2C', vehicle, normalise);
	return vehicleSetEnableNormaliseRampCarVerticalVeloctiy_result;
}