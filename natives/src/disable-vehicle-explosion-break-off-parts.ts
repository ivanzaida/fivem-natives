/**
 * VEHICLE:DISABLE_VEHICLE_EXPLOSION_BREAK_OFF_PARTS
 *
 * 0x5CB3E2A3FC6B7543

 * 
 * Disables parts breaking off during vehicle explosion. Helps in reducing cost of physics
 * This should be called every frame as the code re-enables this in every frame
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableVehicleExplosionBreakOffParts(): void {
	const disableVehicleExplosionBreakOffParts_result = Citizen.invokeNative<void>('0x5CB3E2A3FC6B7543', );
	return disableVehicleExplosionBreakOffParts_result;
}