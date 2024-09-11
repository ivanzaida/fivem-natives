import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DISABLE_INDIVIDUAL_PLANE_PROPELLER
 *
 * 0x36746293A73925EB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} propeller
 */
export function disableIndividualPlanePropeller(vehicle: VehicleIndex, propeller: number): void {
	const disableIndividualPlanePropeller_result = Citizen.invokeNative<void>('0x36746293A73925EB', vehicle, propeller);
	return disableIndividualPlanePropeller_result;
}