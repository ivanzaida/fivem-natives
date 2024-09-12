import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DEFENSIVE_SPHERE_ATTACHED_TO_VEHICLE
 *
 * 0x06AA75009161058B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} centreX
 * @param {number} centreY
 * @param {number} centreZ
 * @param {number} radius
 * @param {boolean} applyToSecondaryDefensiveArea Makes this command be used with the secondary/fallback defensive area instead of the primary one
 */
export function setPedDefensiveSphereAttachedToVehicle(ped: PedIndex, vehicle: VehicleIndex, centreX: number, centreY: number, centreZ: number, radius: number, applyToSecondaryDefensiveArea: boolean = false): void {
	const setPedDefensiveSphereAttachedToVehicle_result = Citizen.invokeNative<void>('0x06AA75009161058B', ped, vehicle, centreX, centreY, centreZ, radius, applyToSecondaryDefensiveArea);
	return setPedDefensiveSphereAttachedToVehicle_result;
}