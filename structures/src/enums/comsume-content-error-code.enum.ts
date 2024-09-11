export enum EComsumeContentErrorCode {
	ErrorUnknown = -1,
	ErrorNone,
	ErrorUnlockAlreadyUsed = 4, // (ConsumeContentUnlock) The source account has already been used to unlock this content for another account
}