import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_PARACHUTE_MODEL_TINT_INDEX
 *
 * 0xB51B6AC3785890FE

 * 
 * Variations available for the generic parachute (sr_prop_specraces_para_s_01):
 * - 0: Rainbow
 * - 1: Red
 * - 2: White, blue, yellow
 * - 3: Black, red, white
 * - 4: Red, white, blue
 * - 5: Blue
 * - 6: Black
 * - 7: Black, yellow
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} tint
 */
export function vehicleSetParachuteModelTintIndex(vehicle: VehicleIndex, tint: number): void {
	const vehicleSetParachuteModelTintIndex_result = Citizen.invokeNative<void>('0xB51B6AC3785890FE', vehicle, tint);
	return vehicleSetParachuteModelTintIndex_result;
}