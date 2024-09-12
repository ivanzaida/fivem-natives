/**
 * STREAMING:SHUTDOWN_CREATOR_BUDGET
 *
 * 0xA0511280CE71369E

 * 
 * ------------------------------------------------------------------
 */
export function shutdownCreatorBudget(): void {
	const shutdownCreatorBudget_result = Citizen.invokeNative<void>('0xA0511280CE71369E', );
	return shutdownCreatorBudget_result;
}