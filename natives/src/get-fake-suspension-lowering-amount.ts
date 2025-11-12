import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_FAKE_SUSPENSION_LOWERING_AMOUNT
 *
 * 0xF7553BA24C0AB0B2

 * 
 * Gets the height of the vehicle's suspension.
 * The higher the value the lower the suspension. Each 0.002 corresponds with one more level lowered.
 * 0.000 is the stock suspension.
 * 0.008 is Ultra Suspension.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getFakeSuspensionLoweringAmount(vehicle: VehicleIndex): number {
	const getFakeSuspensionLoweringAmount_result = Citizen.invokeNative<number>('0xF7553BA24C0AB0B2', vehicle);
	return getFakeSuspensionLoweringAmount_result;
}