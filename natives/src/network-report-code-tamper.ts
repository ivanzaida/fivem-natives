/**
 * NETWORK:NETWORK_REPORT_CODE_TAMPER
 *
 * 0x5CE41A29691C7614

 * 
 * Peers send telemetry reporting this guy as a cheater.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkReportCodeTamper(): void {
	const networkReportCodeTamper_result = Citizen.invokeNative<void>('0x5CE41A29691C7614', );
	return networkReportCodeTamper_result;
}