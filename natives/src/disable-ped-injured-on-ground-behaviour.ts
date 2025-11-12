import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:DISABLE_PED_INJURED_ON_GROUND_BEHAVIOUR
 *
 * 0x75DACB7D11C3CEF4

 * 
 * Use this to disable the injured on ground nm behaviour when he dies (note, a headshot will still override this currently).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function disablePedInjuredOnGroundBehaviour(ped: PedIndex): void {
	const disablePedInjuredOnGroundBehaviour_result = Citizen.invokeNative<void>('0x75DACB7D11C3CEF4', ped);
	return disablePedInjuredOnGroundBehaviour_result;
}