import { ModelNames } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_FROM_IMPORT_EXPORT
 *
 * 0x4D10D49AEE7C9AEA

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {ModelNames} modelHashKey
 */
export function networkEarnFromImportExport(amount: number, modelHashKey: ModelNames): void {
	const networkEarnFromImportExport_result = Citizen.invokeNative<void>('0x4D10D49AEE7C9AEA', amount, modelHashKey);
	return networkEarnFromImportExport_result;
}