import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HAS_FLAG
 *
 * 0xD85C9F57

 * Note: Flags are not the same based on your `gamebuild`. Please see [here](https://docs.fivem.net/docs/game-references/vehicle-references/vehicle-flags) to see a complete list of all vehicle flags.Get vehicle.meta flag by index. Useful examples include `FLAG_LAW_ENFORCEMENT` (31), `FLAG_RICH_CAR` (36), `FLAG_IS_ELECTRIC` (43), `FLAG_IS_OFFROAD_VEHICLE` (48).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain flags for.
 * @param {number} flagIndex Flag index.
 * @returns {boolean}  A boolean for whether the flag is set.
 */
export function getVehicleHasFlag(vehicle: VehicleIndex, flagIndex: number): boolean {
	const getVehicleHasFlag_result = Citizen.invokeNative<boolean>('0xD85C9F57', vehicle, flagIndex);
	return getVehicleHasFlag_result;
}