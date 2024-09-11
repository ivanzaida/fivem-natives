export enum EPaymentRefusedReason {
	PrrUnknown,
	PrrInvalidAmount, // Amount is negative or 0
	PrrNotEnoughCash, // Not enough Cash in the Wallet
	PrrNotEnoughEvc, // Not enough Earn Cash
	PrrInvalidBoosid, // No boss Id set
}