export interface IConnect {
    new(config: {
        key: string;
        onSuccess: OnMonoConnectSuccess;
        onClose: OnMonoConnectClose;
    }): any;
    setup(): void;
    open(): void;
}
export type OnMonoConnectSuccess = (response: { code: string; }) => void
export type OnMonoConnectClose = () => void