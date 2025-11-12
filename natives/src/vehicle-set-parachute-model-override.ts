import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:VEHICLE_SET_PARACHUTE_MODEL_OVERRIDE
 *
 * 0x85F0DD9B2A310950

 * 
 * Parachute models:
 * - sr_prop_specraces_para_s_01
 * - imp_prop_impexp_para_s (SecuroServ; Default)
 * Plus, many more props can be used as vehicle parachutes, like umbrellas (prop_beach_parasol_03), and unlike SET_PLAYER_PARACHUTE_MODEL_OVERRIDE, you won't get stuck mid-air when using an umbrella.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} modelNameHash
 */
export function vehicleSetParachuteModelOverride(vehicle: VehicleIndex, modelNameHash: number): void {
	const vehicleSetParachuteModelOverride_result = Citizen.invokeNative<void>('0x85F0DD9B2A310950', vehicle, modelNameHash);
	return vehicleSetParachuteModelOverride_result;
}