import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_IN_VEHICLE_CONTEXT
 *
 * 0x26E9393912EA6F6A

 * 
 * Resets the in vehicle context.
 * DON'T FORGET to unstream the clipset if no longer needed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetPedInVehicleContext(ped: PedIndex): void {
	const resetPedInVehicleContext_result = Citizen.invokeNative<void>('0x26E9393912EA6F6A', ped);
	return resetPedInVehicleContext_result;
}