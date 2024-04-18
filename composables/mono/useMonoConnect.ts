import { ref, onMounted, type Ref } from "vue";
import type {
  GetAccountStatementReturnType,
  IConnect,
  IMonoAccountAuthResponse,
  IMonoAccountDetailsResponse,
  IMonoAccountIdentificationResponse,
  IMonoUnlinkAccountResponse,
  OnMonoConnectClose,
  OnMonoConnectSuccess,
} from "./mono";
import axios from "axios";

const key = process.env.NUXT_ENV_MONO_PK ?? "test_pk_k9cb222008d5x7itkzz2";

export const monoApiClient = axios.create({
  baseURL: "https://api.withmono.com/v2",
  timeout: 8000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "mono-sec-key": key,
  },
});

declare var Connect: IConnect;

export const objectToQueryString = (obj: Record<string, any>) => {
  const keyValuePairs = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
      keyValuePairs.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
      );
    }
  }
  return keyValuePairs.join("&");
};

export const useMonoConnect = (
  onSuccess: OnMonoConnectSuccess,
  onClose?: OnMonoConnectClose
) => {
  const connect = ref<IConnect>();

  if (!key) throw new Error("MONO_PK is required");

  onClose ??= () => {};
  const config = {
    key,
    onSuccess,
    onClose,
  };

  onMounted(async () => {
    const script = document.createElement("script");
    script.src = "https://connect.withmono.com/connect.js";
    script.async = true;
    script.onload = () => {
      connect.value = new Connect(config);
      if (connect.value) connect.value.setup();
    };
    document.head.appendChild(script);
  });

  const openConnect = () => {
    if (connect.value) connect.value.open();
  };

  const exchangeToken = async (code: string) => {
    const { data } = await monoApiClient.post<IMonoAccountAuthResponse>(
      "/accounts/auth",
      { code }
    );

    if (data.status.toLowerCase() != "successful") throw data.message;

    return data.data.id;
  };

  const getAccountIdentity = async (id: string) => {
    const { data } =
      await monoApiClient.get<IMonoAccountIdentificationResponse>(
        `/accounts/${id}/identify`
      );

    if (data.status.toLowerCase() != "successful") throw data.message;

    return data.data;
  };

  const getAccountDetails = async (id: string) => {
    const { data } = await monoApiClient.get<IMonoAccountDetailsResponse>(
      `/accounts/${id}`
    );

    if (data.status.toLowerCase() != "successful") throw data.message;

    return data.data;
  };

  const getAccounts = async () => {
    const { data } =
      await monoApiClient.get<IMonoAccountDetailsResponse>(`/accounts`);

    if (data.status.toLowerCase() != "successful") throw data.message;

    return data.data;
  };

  const unlinkAccount = async (id: string) => {
    const { data } = await monoApiClient.post<IMonoUnlinkAccountResponse>(
      `/accounts/${id}/unlink`
    );

    if (data.status.toLowerCase() != "successful") throw data.message;

    return data.status == "successful";
  };

  const getAccountStatement = async <Output extends "pdf" | "json" = "json">(
    id: string,
    period?: string,
    output?: Output,
    format?: "v1" | "v2"
  ) => {
    const { data } = await monoApiClient.get<
      GetAccountStatementReturnType<Output>
    >(
      `/accounts/${id}/statement?${objectToQueryString({ period, output, format })}`
    );

    if (data.status.toLowerCase() !== "successful")
      throw new Error(data.message);

    return data.data;
  };

  const getAccountTransaction = async (
    id: string,
    start?: Date,
    end?: Date,
    narration?: string,
    type?: "credit" | "debit",
    paginate?: boolean,
    limits?: boolean
  ) => {
    const { data } = await monoApiClient.get(
      `/accounts/${id}/transactions?${objectToQueryString({ start, end, narration, type, paginate, limits })}`
    );

    if (data.status.toLowerCase() !== "successful")
      throw new Error(data.message);

    return data.data;
  };

  return {
    openConnect,
    exchangeToken,
    getAccountIdentity,
    getAccountDetails,
    getAccounts,
    unlinkAccount,
    getAccountStatement,
    getAccountTransaction,
  };
};
