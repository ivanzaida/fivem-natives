import { EEassistedRouteFlags } from '@ivanzaida/structures'

/**
 * TASK:ASSISTED_MOVEMENT_SET_ROUTE_PROPERTIES
 *
 * 0xD60BA488D361DF8C

 * 
 * ------------------------------------------------------------------
 * @param {string} routeName
 * @param {EEassistedRouteFlags} flags
 */
export function assistedMovementSetRouteProperties(routeName: string, flags: EEassistedRouteFlags | number): void {
	const assistedMovementSetRouteProperties_result = Citizen.invokeNative<void>('0xD60BA488D361DF8C', routeName, flags);
	return assistedMovementSetRouteProperties_result;
}