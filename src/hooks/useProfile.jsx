import { useQuery } from "@tanstack/react-query";
import authinstance from "../api/authAxiosInstance";
import { useTranslation } from "react-i18next";

export default function useProfile() {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ["profile", i18n.language],
    queryFn: async () => {
      const response = await authinstance.get(`/Profile`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}