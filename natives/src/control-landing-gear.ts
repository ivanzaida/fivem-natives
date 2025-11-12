import { VehicleIndex, ELandingGearCommand } from '@ivanzaida/structures'

/**
 * VEHICLE:CONTROL_LANDING_GEAR
 *
 * 0xC2A036647DD761E4

 * 
 * Works for vehicles with a retractable landing gear
 * 
 * Landing gear states:
 * 
 * 0: Deployed
 * 1: Closing
 * 2: Opening
 * 3: Retracted
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {ELandingGearCommand} command
 */
export function controlLandingGear(vehicle: VehicleIndex, command: ELandingGearCommand | number): void {
	const controlLandingGear_result = Citizen.invokeNative<void>('0xC2A036647DD761E4', vehicle, command);
	return controlLandingGear_result;
}