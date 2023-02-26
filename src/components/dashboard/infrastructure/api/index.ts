import IResponse from "@/utils/common/http.type";
import { AssetsRequest, AssetsResponse } from "../../entities";
import axios from "@/utils/common/common-http";

enum Api {
  BaseUrl = "coincap",
  Assets = "/assets",
}

export const getAssetsApi = async (params: AssetsRequest): Promise<IResponse<AssetsResponse>> => {
  const response = await axios.get(`${Api.BaseUrl}${Api.Assets}`, { params })
  return response.data
}
