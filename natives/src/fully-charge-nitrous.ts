/**
 * VEHICLE:FULLY_CHARGE_NITROUS
 *
 * 0x1A2BCC8C636F9226

 * 
 * ------------------------------------------------------------------
 */
export function fullyChargeNitrous(): void {
	const fullyChargeNitrous_result = Citizen.invokeNative<void>('0x1A2BCC8C636F9226', );
	return fullyChargeNitrous_result;
}