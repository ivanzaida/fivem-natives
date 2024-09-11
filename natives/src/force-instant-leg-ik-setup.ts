import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:FORCE_INSTANT_LEG_IK_SETUP
 *
 * 0x854D2E21A9863405

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function forceInstantLegIkSetup(ped: PedIndex): void {
	const forceInstantLegIkSetup_result = Citizen.invokeNative<void>('0x854D2E21A9863405', ped);
	return forceInstantLegIkSetup_result;
}