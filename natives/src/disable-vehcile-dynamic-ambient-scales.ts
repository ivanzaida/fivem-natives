import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DISABLE_VEHCILE_DYNAMIC_AMBIENT_SCALES
 *
 * 0xFB9F77A8FFB0897E

 * 
 * Adds some kind of shadow to the vehicle.
 * 
 * p1 and p2 use values from 0-255 and both make the shadow darker the lower the value is. -1 disables the effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} naturalAmbientScale
 * @param {number} artificialAmbientscale
 */
export function disableVehcileDynamicAmbientScales(vehicle: VehicleIndex, naturalAmbientScale: number, artificialAmbientscale: number): void {
	const disableVehcileDynamicAmbientScales_result = Citizen.invokeNative<void>('0xFB9F77A8FFB0897E', vehicle, naturalAmbientScale, artificialAmbientscale);
	return disableVehcileDynamicAmbientScales_result;
}