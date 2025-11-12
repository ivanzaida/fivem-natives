import { VehicleIndex, ELandingGearState } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_LANDING_GEAR_STATE
 *
 * 0x68F7F7C5DF6717F8

 * 
 * Landing gear states:
 * 
 * 0: Deployed
 * 1: Closing (Retracting)
 * 2: (Landing gear state 2 is never used.)
 * 3: Opening (Deploying)
 * 4: Retracted
 * 
 * Returns the current state of the vehicles landing gear.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {ELandingGearState}  
 */
export function getLandingGearState(vehicle: VehicleIndex): ELandingGearState {
	const getLandingGearState_result = Citizen.invokeNative<ELandingGearState>('0x68F7F7C5DF6717F8', vehicle);
	return getLandingGearState_result;
}