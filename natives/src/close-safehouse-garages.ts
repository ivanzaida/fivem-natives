/**
 * OBJECT:CLOSE_SAFEHOUSE_GARAGES
 *
 * 0x3C0B3EA001613632

 * 
 * ------------------------------------------------------------------
 */
export function closeSafehouseGarages(): void {
	const closeSafehouseGarages_result = Citizen.invokeNative<void>('0x3C0B3EA001613632', );
	return closeSafehouseGarages_result;
}